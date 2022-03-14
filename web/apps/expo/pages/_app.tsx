import { SSRProvider } from '@react-aria/ssr';
import { Provider } from '@react-spectrum/provider';
import { theme } from '@react-spectrum/theme-default';
import '@watheia/assets.styles/index.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect, useState } from 'react';

function CustomApp({ Component, pageProps }: AppProps) {
  // keep color scheme in sync with tailwindcss
  const [colorScheme, setColorScheme] = useState<'light' | 'dark'>('dark');
  useEffect(() => {
    setColorScheme(
      window.document.body.getAttribute('data-theme') === 'light' ? 'light' : 'dark'
    );
  }, []);
  console.log('Using Color Scheme', colorScheme);
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <title>Welcome to design-system!</title>
      </Head>
      <SSRProvider>
        <Provider theme={theme} colorScheme={colorScheme} minHeight="100%">
          <Component {...pageProps} />
        </Provider>
      </SSRProvider>
    </>
  );
}

export default CustomApp;
