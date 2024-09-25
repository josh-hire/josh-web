import PropTypes from 'prop-types';
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { setCookie, getCookie } from 'cookies-next';
import { useState } from 'react';
import { ModalsProvider } from '@mantine/modals';

export default function MantineContextProvider({ children }) {
  const [colorScheme, setColorScheme] = useState(getCookie('mantine-color-scheme') || 'light');

  const toggleColorScheme = (value) => {
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
        withNormalizeCSS>
        <ModalsProvider>
          <NotificationsProvider>{children}</NotificationsProvider>
        </ModalsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

MantineContextProvider.propTypes = {
  children: PropTypes.node,
};

MantineContextProvider.defaultProps = {
  children: null,
};
