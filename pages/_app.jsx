import RequiredLargeScreen from '../components/RequiredLargeScreen';
import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <RequiredLargeScreen>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </RequiredLargeScreen>
  );
}

export default MyApp;
