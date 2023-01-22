import Navbar from '@/components/Navbar'
import '../assets/styles/main.scss'

export default function App({ Component, pageProps }) {
  return  (
    <>
      <Navbar/>
      <Component {...pageProps} />
    </>
  )
}
