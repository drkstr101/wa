import '@watheia/assets.styles/index.css';
import { AppProps } from 'next/app';

function CustomApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default CustomApp;
