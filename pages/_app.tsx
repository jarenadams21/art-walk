import '@/styles/globals.css'
import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { AuthContextProvider } from '@/context/AuthContext';
import { DBContextProvider } from '@/context/DBContext';
import { useRouter } from 'next/router';
import ProtectedRoute from './components/ProtectedRoute';

const noAuthRequired = ['login', '/signup']

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const router = useRouter()
  const noAuthRequired = ['/login', '/signup']

  return (
    <AuthContextProvider>
      <DBContextProvider>
      <Head>
        <title>Art Walk</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
      >
         {noAuthRequired.includes(router.pathname) ? (
          <Component {...pageProps} />
        ) : (
          <ProtectedRoute>
            <Component {...pageProps} />
          </ProtectedRoute>
        )}
      </MantineProvider>
      </DBContextProvider>
    </AuthContextProvider>
  );
}