import { nanoid } from 'nanoid';
import { NextApiRequest, NextApiResponse } from 'next';

import transporter from '../../../libs/mail';
import db from '../../../libs/mongodb/mongoose';
import Token from '../../../models/Token';
import User from '../../../models/User';
import { hashPassword } from '../../../utils/hash';

const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body;

  try {
    await db.connect();

    // Check for user existence
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(422).json({ messge: "User doesn't exists!" });
    } else {
      const token = await Token.findOne({ userId: user._id });

      if (token) {
        const createdAt = new Date(token.createdAt);

        // Rate limit 1 minute for sending email
        if (Date.now() - createdAt.getTime() < 60000) {
          return res.status(400).json({
            success: false,
            message: `Please wait for ${
              60 - Math.floor((Date.now() - createdAt.getTime()) / 1000)
            } seconds before requesting again`,
          });
        }

        await token.deleteOne();
      }

      // Create a token id
      const securedTokenId = nanoid(32);

      // Store token in DB
      await new Token({
        userId: user._id,
        token: securedTokenId,
        createdAt: Date.now(),
      }).save();

      // Link send to user's email for resetting
      const link = `${process.env.APP_URL}/reset-password/${securedTokenId}`;

      console.log(link);

      await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: user.email,
        subject: 'Reset Password',
        text: 'Reset Password Messsage',
        html: ` 
        <div>
           <h1>Follow the following link</h1>
            <p>Please follow 
              <a href="${link}"> this link </a> 
              to reset your password
              </p>
        </div> 
        `,
      });
    }
  } catch (error: any) {
    return res.status(400).send({ success: false, message: error.message });
  }

  // Success
  res.status(200).json({ success: true });
};

const PUT = async (req: NextApiRequest, res: NextApiResponse) => {
  const { tokenId, password } = req.body;

  // Get token from DB
  const token = await Token.findOne({ token: tokenId });

  if (!token) {
    return res.status(400).json({
      success: false,
      message: 'Invalid or expired password reset token',
    });
  }

  // Return user
  const user = await User.findOne({ _id: token.userId });

  // Hash password before resetting
  const hashedPassword = await hashPassword(password);

  await User.updateOne(
    { _id: user._id },
    { password: hashedPassword },
    { new: true },
  );

  await transporter.sendMail({
    from: process.env.EMAIL,
    to: user.email,
    subject: 'Password reset successufly',
    html: 'Password is successfuly reset',
  });

  // Delete token so it won't be used twice
  const deleteToken = await Token.deleteOne({ _id: token._id });

  if (!deleteToken) {
    res.status(403).end();
  }

  res
    .status(200)
    .json({ seccuess: true, message: 'Password is reset successfuly' });
};

export default async function route(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    return POST(req, res);
  } else if (req.method === 'PUT') {
    return PUT(req, res);
  } else {
    res.status(405).end();
  }
}
