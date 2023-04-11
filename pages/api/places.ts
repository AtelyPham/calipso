import { NextApiRequest, NextApiResponse } from 'next';

import mongoose from '../../libs/mongodb/mongoose';
import Place from '../../models/Place';

async function GET(req: NextApiRequest, res: NextApiResponse) {
  const { offset = 0, limit = 20 } = req.query;
  const _offset = Number(offset);
  const _limit = Number(limit);

  if (Number.isNaN(_offset) || Number.isNaN(_limit)) {
    return res.status(400).end();
  }

  await mongoose.connect();

  const places = await Place.find().skip(_offset).limit(_limit).exec();

  return res.status(200).json(places);
}

export default async function route(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return GET(req, res);
    default:
      return res.status(405).end();
  }
}
