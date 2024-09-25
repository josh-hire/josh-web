import { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Menu, Center, Header, Container, Group, Button, Burger, Image } from '@mantine/core';
import Link from 'next/link';
import { URL_PT_tester_APP } from 'Utils/constants';
import { useStyles } from './Header.styles';
import styles from './styles.module.scss';
import FeatherIcon from 'feather-icons-react';
export const HEADER_HEIGHT = 80;

export function HeaderSection({ links }) {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);

  const items = links?.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu exitTransitionDuration={0} key={link.label} trigger="hover">
          <Menu.Target>
            <Link className={classes.link} href={link.link}>
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
              </Center>
            </Link>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <div
        className={clsx(
          classes.link,
        )}
        key={link.label}>
        <Link href={link.link} key={link.label}>
          {link.label}
        </Link>
      </div>
    );
  });

  const renderMenuButton = () => {
    return (
      <div className={styles.boxButtonMobile}>
        <Link href={`${URL_PT_tester_APP}`} passHref>
          <Button className={styles.button} radius="xl" sx={{ height: 30 }}>
           LOGIN
          </Button>
        </Link>
      </div>
    );
  };

  return (
    <Header
      className={styles.root}
      height={HEADER_HEIGHT}
      mb={120}
      onMouseLeave={() => setOpened(false)}>
      <Container
        className={clsx(classes.inner, opened ? classes.innerActive : classes.inner)}>
        <Group className={classes.menu}>
          <Burger className={classes.burger} size="sm" />
          <Link href={`/`}>
            <span className={styles.boxLogo} style={{ cursor: 'pointer', textAlign: 'left' }}>
              Logo Header
            </span>
          </Link>
        </Group>
        <div className={styles.boxHamburgerMenu} style={{ display: 'none' }}>
          <Link href={`/`} passHref>
            <div className={styles.boxLogo}>LOGO</div>
          </Link>
          <div className={styles.menuDropdown} onClick={() => setOpened(!opened)}>
            <Image
              alt={'Icon Menu PT_tester'}
              fit="contain"
              radius="md"
              src={opened ? '/assets/img/home/close-menu.png' : '/assets/img/home/menu.png'}
            />
          </div>
          <div
            className={clsx(
              styles.boxDropdown,
              opened ? styles.boxDropdownActive : styles.boxDropdown,
            )}>
            {renderMenuButton()}
          </div>
        </div>
        <Group className={classes.links} spacing={5}>
          <Group className={classes.links} spacing={5} sx={{ marginRight: '1rem' }}>
            {items}
          </Group>
          <Group className={classes.links} spacing={5}>
            <Link href={''} passHref>
              <span className={styles.button}>Download the app</span>
            </Link>
            <Link href={''} passHref>
              <FeatherIcon className={styles.sosMed} icon="twitter" />
            </Link>
            <Link href={''} passHref>
              <FeatherIcon className={styles.sosMed} icon="facebook" />
            </Link>
            <Link href={''} passHref>
              <FeatherIcon className={styles.sosMed} icon="user"/>
            </Link>
          </Group>
        </Group>
      </Container>
    </Header>
  );
}

HeaderSection.propTypes = {
  isHome: PropTypes.bool,
  isScroll: PropTypes.bool,
  links: PropTypes.array,
};

HeaderSection.defaultProps = {
  isHome: false,
  isScroll: false,
  links: [],
};
