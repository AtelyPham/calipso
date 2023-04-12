import { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';

import Place from '../../../models/Place';
import parsePlaceBody from '../../../utils/parsePlaceBody';
import User from '../../../models/User';

const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  if (!id) {
    return res.status(400).end();
  }

  const place = await Place.findById(id).exec();

  if (!place) {
    return res.status(404).end();
  }

  return res.status(200).json({
    data: {
      place,
    },
  });
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
    return res.status(404).end();
  }

  if (user.role !== 'admin') {
    return res.status(403).json({
      message: 'Forbidden, you are not an admin',
    });
  }

  const { id } = req.query;

  if (!id) {
    return res.status(400).end();
  }

  const place = await Place.findById(id).exec();
  if (!place) {
    return res.status(404).end();
  }

  const {
    image_lastmod,
    region,
    population,
    descriptionFromReview,
    slug,
    short_slug,
    long_slug,
    image,
    name,
    latitude,
    longitude,
    country,
    country_code,
    country_slug,
    state,
    internet_speed,
    air_quality_score,
    air_quality_now_score,
    humidity,
    rank,
    weather_icon,
    weather_emoji,
    temperatureC,
    temperatureC_feels_like,
    cost_for_nomad_in_usd,
    total_score,
    overall_score,
    cost_score,
    internet_score,
    leisure_quality,
    safety_level,
  } = parsePlaceBody(req.body);

  if (
    !image_lastmod ||
    !region ||
    !population ||
    !descriptionFromReview ||
    !slug ||
    !short_slug ||
    !long_slug ||
    !image ||
    !name ||
    !latitude ||
    !longitude ||
    !country ||
    !country_code ||
    !country_slug ||
    !state ||
    !internet_speed ||
    !air_quality_score ||
    !air_quality_now_score ||
    !humidity ||
    !rank ||
    !weather_icon ||
    !weather_emoji ||
    !temperatureC ||
    !temperatureC_feels_like ||
    !cost_for_nomad_in_usd ||
    !total_score ||
    !overall_score ||
    !cost_score ||
    !internet_score ||
    !leisure_quality ||
    !safety_level
  ) {
    return res.status(400).end();
  }

  const updatedPlace = await Place.findByIdAndUpdate(
    id,
    {
      ...req.body,
    },
    { returnDocument: 'after' },
  ).exec();

  return res.status(200).json({
    data: {
      place: updatedPlace,
    },
  });
};

const PUT = async (req: NextApiRequest, res: NextApiResponse) => {
  const token = await getToken({ req });
  if (!token) {
    return res.status(401).json({
      message: 'Unauthorized',
    });
  }

  const user = await User.findOne({ email: token.email }).exec();
  if (!user) {
    return res.status(404).end();
  }

  if (user.role !== 'admin') {
    return res.status(403).json({
      message: 'Forbidden, you are not an admin',
    });
  }

  const { id } = req.query;

  if (!id) {
    return res.status(400).end();
  }

  const place = await Place.findById(id).exec();
  if (!place) {
    return res.status(404).end();
  }

  const parsed = parsePlaceBody(req.body);

  const updatedPlace = await Place.findByIdAndUpdate(id, parsed, {
    returnDocument: 'after',
  });

  return res.status(200).json({
    data: {
      place: updatedPlace,
    },
  });
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
    return res.status(404).end();
  }

  if (user.role !== 'admin') {
    return res.status(403).json({
      message: 'Forbidden, you are not an admin',
    });
  }

  const { id } = req.query;

  if (!id) {
    return res.status(400).end();
  }

  const place = await Place.findById(id).exec();
  if (!place) {
    return res.status(404).end();
  }

  const deletedPlace = await Place.findByIdAndDelete(id).exec();

  return res.status(200).json({
    data: {
      place: deletedPlace,
    },
  });
};

export default function route(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return GET(req, res);

    case 'POST':
      return POST(req, res);

    case 'PUT':
      return PUT(req, res);

    case 'DELETE':
      return DELETE(req, res);

    default:
      return res.status(405).end();
  }
}
