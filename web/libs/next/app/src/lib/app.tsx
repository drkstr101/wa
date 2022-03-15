import { SSRProvider } from '@react-aria/ssr';
import { Provider } from '@react-spectrum/provider';
import { theme } from '@react-spectrum/theme-default';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect, useState } from 'react';

function WaNextApp({ Component, pageProps }: AppProps) {
  // keep color scheme in sync with tailwindcss
  const [colorScheme, setColorScheme] = useState<'light' | 'dark'>('dark');
  useEffect(() => {
    setColorScheme(
      window.document.body.getAttribute('data-theme') === 'light' ? 'light' : 'dark'
    );
  }, []);
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <title>Watheia Labs | A capabilities test of the modern web</title>
      </Head>
      <SSRProvider>
        <Provider theme={theme} colorScheme={colorScheme} minHeight="100%">
          <Component {...pageProps} />
        </Provider>
      </SSRProvider>
    </>
  );
}

export default WaNextApp;
