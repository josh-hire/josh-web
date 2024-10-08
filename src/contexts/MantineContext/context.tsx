import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { useState, ReactNode } from 'react';
import { ModalsProvider } from '@mantine/modals';

interface MantineContextProviderProps {
  children: ReactNode;
}

export default function MantineContextProvider({ children }: MantineContextProviderProps) {

  const [colorScheme, setColorScheme] = useState<ColorScheme>( 'light');

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
  };

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        theme={{ colorScheme, fontFamily: 'var(--font-lato)' }}
        withCSSVariables
        withGlobalStyles
        withNormalizeCSS
      >
        <ModalsProvider>
          <NotificationsProvider>{children}</NotificationsProvider>
        </ModalsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}