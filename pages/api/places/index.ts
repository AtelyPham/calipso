import { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';

import Place from '../../../models/Place';
import mongoose from '../..//../libs/mongodb/mongoose';

async function GET(req: NextApiRequest, res: NextApiResponse) {
  const { offset = 0, limit = 10 } = req.query;
  const _offset = Number(offset);
  const _limit = Number(limit);

  if (Number.isNaN(_offset) || Number.isNaN(_limit)) {
    return res.status(400).end();
  }

  await mongoose.connect();

  const places = await Place.find().skip(_offset).limit(_limit).exec();
  const total = await Place.countDocuments();

  return res.status(200).json({
    data: places,
    offset,
    limit,
    total,
  });
}

async function POST(req: NextApiRequest, res: NextApiResponse) {
  const token = await getToken({ req });
  if (!token) {
    return res.status(401).json({
      message: 'Unauthorized',
    });
  }

  if (token.role !== 'admin') {
    return res.status(403).json({
      message: 'Forbidden, you are not an admin',
    });
  }

  const { name, region, country, state } = req.body;

  if (!name || !region || !country || !state) {
    return res.status(400).end();
  }

  await mongoose.connect();

  const place = new Place({
    name,
    region,
    country,
    state,
    slug: name,
    long_slug: `${name}-${region}-${country}-${state}`,
  });

  await place.save();

  return res.status(201).json({
    data: place,
  });
}

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
