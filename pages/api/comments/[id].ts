import { NextApiRequest, NextApiResponse } from 'next';
import Comment from '../../../models/Comment';
import { getToken } from 'next-auth/jwt';
import User from '../../../models/User';

const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({
      message: 'Missing id',
    });
  }

  try {
    const comment = await Comment.findById(id).exec();
    if (!comment) {
      return res.status(404).json({
        message: 'Comment not found',
      });
    }

    return res.status(200).json({
      data: comment,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  const token = await getToken({ req });
  if (!token) {
    return res.status(401).json({
      message: 'Unauthorized',
    });
  }

  const user = await User.findOne({ email: token.email }).exec();
  if (!user) {
    return res.status(404).json({
      message: 'User not found for this token',
    });
  }

  const { id } = req.query;

  if (!id) {
    return res.status(400).json({
      message: 'Missing id',
    });
  }

  const comment = await Comment.findById(id).exec();
  if (!comment) {
    return res.status(404).json({
      message: 'Comment not found',
    });
  }

  if (comment.userId.toString() === user._id.toString()) {
    return res.status(403).json({
      message: 'Forbidden to edit this comment',
    });
  }

  const { comment: newComment } = req.body;
  if (!newComment) {
    return res.status(400).json({
      message: 'Missing comment',
    });
  }

  try {
    comment.content = newComment;
    await comment.save();

    return res.status(200).json({
      data: comment,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const DELETE = async (req: NextApiRequest, res: NextApiResponse) => {
  const token = await getToken({ req });
  if (!token) {
    return res.status(401).json({
      message: 'Unauthorized',
    });
  }

  const user = await User.findOne({ email: token.email }).exec();
  if (!user) {
    return res.status(404).json({
      message: 'User not found for this token',
    });
  }

  const { id } = req.query;

  if (!id) {
    return res.status(400).json({
      message: 'Missing id',
    });
  }

  const comment = await Comment.findById(id).exec();
  if (!comment) {
    return res.status(404).json({
      message: 'Comment not found',
    });
  }

  const deletedComment = await Comment.findByIdAndDelete(id).exec();
  return res.status(200).json({
    data: deletedComment,
  });
};

export default async function route(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return GET(req, res);

    case 'POST':
      return POST(req, res);

    case 'DELETE':
      return DELETE(req, res);

    default:
      return res.status(405).end();
  }
}
