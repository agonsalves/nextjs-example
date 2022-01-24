import { GlobalStyle } from '@/styles/global';
import { theme } from '@/styles/themes/main';
import Head from 'next/head';
import React, { useRef } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { ThemeProvider } from 'styled-components';
import Panels from '@/components/Header/Panels';
import { PanelControllerProvider } from '../hooks/usePanel';
import { FiltersContextProvider } from '@/hooks/useFilters';
import { AnimatePresence } from 'framer-motion';
import HeaderMenuPanelController from '@/controllers/HeaderMenuPanelController';

function MyApp({ Component, pageProps }) {
  const queryClientRef = useRef(null);

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider theme={theme}>
          <PanelControllerProvider>
            <HeaderMenuPanelController>
            <FiltersContextProvider>
              <Head>
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=0.5"
                />
              </Head>
              <AnimatePresence exitBeforeEnter>
                <Component {...pageProps} />
              </AnimatePresence>
              <Panels />
              <GlobalStyle />
            </FiltersContextProvider>
            </HeaderMenuPanelController>
          </PanelControllerProvider>
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
