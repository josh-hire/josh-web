import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { ReactNode } from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    },
  },
});

interface ReactQueryContextProviderProps {
  children: ReactNode;
}

export default function ReactQueryContextProvider({ children }: ReactQueryContextProviderProps) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}