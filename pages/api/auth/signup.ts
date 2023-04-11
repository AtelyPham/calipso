import { NextApiRequest, NextApiResponse } from 'next';

import mongoose from '../../../libs/mongodb/mongoose';
import { hashPassword } from '../../../utils/hash';
import User from '../../../models/User';

async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { email, password, name, image } = req.body;
  if (!email || !password) {
    const missingFields = [];

    if (!email) missingFields.push('email');
    if (!password) missingFields.push('password');

    res.status(422).json({
      message: `Missing required fields: ${missingFields.join(', ')}`,
    });
    return;
  }

  await mongoose.connect();

  const user = await User.findOne({ email });
  if (user) {
    res.status(422).json({
      message: 'Email already exists',
    });
    return;
  }

  const hashedPassword = await hashPassword(password);

  const newUser = new User({
    email,
    password: hashedPassword,
    name,
    image,
  });
  await newUser.save();

  res.status(201).json({ message: 'User signed up successfuly' });
}

export default function route(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST': {
      return POST(req, res);
    }

    default: {
      return res.status(405).json({
        error: `Method ${req.method} Not Allowed`,
      });
    }
  }
}
