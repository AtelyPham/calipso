import RequiredLargeScreen from '../components/RequiredLargeScreen'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <RequiredLargeScreen>
      <Component {...pageProps} />
    </RequiredLargeScreen>
  )
}

export default MyApp
