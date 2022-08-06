import type { AppProps } from 'next/app';
import { useRef } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NEXT_PUBLIC_ENV } from '$config';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import GlobalStyle from '$styles/GlobalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = useRef(
    new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
          suspense: true,
          useErrorBoundary: true,
          cacheTime: 1000 * 60 * 5,
          staleTime: 1000 * 60 * 3,
        },
      },
    }),
  );
  return (
    <QueryClientProvider client={queryClient.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <GlobalStyle />
        <Component {...pageProps} />
      </Hydrate>
      {NEXT_PUBLIC_ENV === 'local' ? <ReactQueryDevtools initialIsOpen={false} /> : null}
    </QueryClientProvider>
  );
}

export default MyApp;
