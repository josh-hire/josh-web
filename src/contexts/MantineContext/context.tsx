import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { setCookie, getCookie } from 'cookies-next';
import { useState, ReactNode } from 'react';
import { ModalsProvider } from '@mantine/modals';

interface MantineContextProviderProps {
  children: ReactNode;
}

export default function MantineContextProvider({ children }: MantineContextProviderProps) {
  const colorShemaMantine = getCookie('mantine-color-scheme') as ColorScheme;

  const [colorScheme, setColorScheme] = useState<ColorScheme>(colorShemaMantine || 'light');

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookie('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
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