import { createStyles } from '@mantine/core';
import { HEADER_HEIGHT } from './Header';

export const useStyles = createStyles((theme) => ({
  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
  header: {
    backgroundColor: 'rgba(0, 0, 0, 1);',
    boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.25);',
    opacity: 1,
    position: 'fixed',
    zIndex: 1200,
    transition: '500ms ease',
  },
  headerScroll: {
    backgroundColor: 'rgba(0, 0, 0, 1);',
    boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.25);',
    opacity: 1,
  },
  inner: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    display: 'flex',
    fontSize: theme.fontSizes.md,
    height: HEADER_HEIGHT,
    justifyContent: 'space-between',
    width: theme.breakpoints.lg,
    paddingRight: 0,
    paddingLeft: 0,
    '@media (max-width: 775px)': {
      paddingRight: '1rem',
      paddingLeft: '1rem',
    },
  },
  innerActive: {
    alignItems: 'center',
    backgroundColor: theme.white,
    display: 'flex',
    fontSize: theme.fontSizes.md,
    height: HEADER_HEIGHT,
    justifyContent: 'space-between',
    width: theme.breakpoints.lg,
  },
  link: {
    borderRadius: theme.radius.sm,
    color: theme.white,
    display: 'block',
    fontFamily: `Lato`,
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '1.5rem',
    padding: '0.5rem 1rem',
    textDecoration: 'none',
  },

  activeLink: {
    color: '#E8590C',
  },
  linkLabel: {
    marginRight: 5,
  },
  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },
  menu: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },
}));
