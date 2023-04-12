import { NextApiRequest, NextApiResponse } from 'next';

import Comment from '../../../models/Comment';
import Place from '../../../models/Place';
import { getToken } from 'next-auth/jwt';
import User from '../../../models/User';
import { ObjectId } from 'mongodb';

const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  // Get the placeId from the query string
  const { placeId, userId, offset = 0, limit = 10 } = req.query;

  if (!placeId) {
    return res.status(400).json({
      message: 'Missing placeId',
    });
  }

  const _offset = Number(offset);
  const _limit = Number(limit);

  if (Number.isNaN(_offset) || Number.isNaN(_limit)) {
    return res.status(400).json({
      message: 'Invalid offset or limit',
    });
  }

  try {
    const place = await Place.findById(placeId).exec();
    if (!place) {
      return res.status(404).json({ message: 'Place not found' });
    }

    const comments = await Comment.find({ placeId, userId })
      .skip(_offset)
      .limit(_limit)
      .exec();

    const total = await Comment.countDocuments({ placeId, userId });

    return res.status(200).json({
      data: comments,
      offset,
      limit,
      total,
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

  const { placeId, comment } = req.body;

  if (!placeId || !comment) {
    return res.status(400).json({
      message: 'Missing placeId or comment',
    });
  }

  const place = await Place.findById(placeId).exec();
  if (!place) {
    return res.status(404).json({
      message: 'Place not found',
    });
  }

  try {
    const newComment = new Comment({
      placeId: place._id,
      userId: user._id,
      comment,
    });
    await newComment.save();

    return res.status(201).json({
      data: newComment,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export default async function route(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return GET(req, res);

    case 'POST':
      return POST(req, res);

    default:
      return res.status(405).end();
  }
}
