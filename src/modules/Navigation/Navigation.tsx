import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Box, clsx, Navbar, ScrollArea } from '@mantine/core';
import { useStyles } from './Navigation.styles';
import styles from './styles.module.scss';

export default function Navigation({ hidden, links,  ...rest }) {
  const { classes } = useStyles();
  const width = useMemo(() => (hidden ? '100px' : '260px'), [hidden]);

  return (
    <Navbar
      className={clsx([styles.navbar, hidden && styles.hidden])}
      p="md"
      style={{ 'width': width }}
      width={{ base: !hidden ? 260 : 100 }}
      {...rest}>
      <Navbar.Section
        className={classes.links}
        component={ScrollArea}
        grow
        sx={{ width: hidden ? '115px' : 'auto' }}>
        <Box py={hidden ? '20px' : '0'}>{links}</Box>
      </Navbar.Section>
    </Navbar>
  );
}

Navigation.propTypes = {
  hidden: PropTypes.bool,
  links:PropTypes.string,
  list: PropTypes.array,
};

Navigation.defaultProps = {
  hidden: false,
  links:'',
  list: [],
};
