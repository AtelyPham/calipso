import NextAuth, { DefaultSession, DefaultUser } from 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface User extends DefaultUser {
    /**
     * The user's password
     */
    password?: string;

    /**
     * The user's role
     */
    role: 'admin' | 'user';
  }

  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    /**
     * The user's access token. This is a custom property added to the JWT.
     */
    accessToken?: string;
  }
}

declare module 'next-auth/jwt' {}
