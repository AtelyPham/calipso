import 'react-toastify/dist/ReactToastify.css';

import RequiredLargeScreen from '../components/RequiredLargeScreen';
import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <RequiredLargeScreen>
      <SessionProvider session={session}>
        <ToastContainer />
        <Component {...pageProps} />
      </SessionProvider>
    </RequiredLargeScreen>
  );
}

export default MyApp;
