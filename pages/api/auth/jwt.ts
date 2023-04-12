// This is an example of how to read a JSON Web Token from an API route
import { getToken } from 'next-auth/jwt';

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { isRaw } = req.query;
  // If you don't have the NEXTAUTH_SECRET environment variable set,
  // you will have to pass your secret as `secret` to `getToken`
  const token = await getToken({ req, raw: isRaw === 'true' });

  if (!token) {
    return res.status(401).json({
      message: 'Unauthorized',
    });
  }

  res.send(JSON.stringify(token, null, 2));
}
