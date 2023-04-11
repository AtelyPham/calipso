import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import EmailProvider from 'next-auth/providers/email';
import FacebookProvider from 'next-auth/providers/facebook';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import TwitterProvider from 'next-auth/providers/twitter';

import mongoPromise from '../../../libs/mongodb';
import mongoose from '../../../libs/mongodb/mongoose';
import User from '../../../models/User';
import { isPasswordValid } from '../../../utils/hash';

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options

export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(mongoPromise),

  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        secure: false,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
    CredentialsProvider({
      name: 'email and password',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'example@gmail.com',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: '********',
        },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        await mongoose.connect();

        const user = await User.findOne({ email: credentials.email });
        if (!user) {
          return null;
        }

        const isValidPw = await isPasswordValid(
          credentials.password,
          user.password,
        );

        if (isValidPw) {
          return {
            id: user._id.toString(),
            name: user.name ?? null,
            role: user.role ?? 'user',
            email: user.email ?? null,
            image: user.image ?? null,
            password: user.password ?? null,
          };
        } else {
          return null;
        }
      },
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID!,
      clientSecret: process.env.FACEBOOK_SECRET!,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_ID!,
      clientSecret: process.env.TWITTER_SECRET!,
      version: '2.0',
    }),
  ],

  session: {
    strategy: 'jwt',
  },

  theme: {
    colorScheme: 'auto',
    logo: '/Calipso.png',
  },

  callbacks: {
    async jwt({ token }) {
      return {
        ...token,
        name: token.name ?? null,
        email: token.email ?? null,
        picture: token.picture ?? null,
      };
    },
  },
};

export default NextAuth(authOptions);
