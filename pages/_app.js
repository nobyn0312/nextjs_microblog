import '@/styles/globals.css'
import fetch from 'isomorphic-fetch';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

if (!globalThis.fetch) {
  globalThis.fetch = fetch;
}