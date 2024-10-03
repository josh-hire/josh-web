import styles from './styles.module.scss';
import { HeaderSection } from 'Modules/Landing/Header/Header';
import { FooterSection } from 'Modules/Landing/Footer/Footer';
import ScrollToTop from 'Modules/Landing/fragments/ScrollToTop';

const DefaultLayout = ({ children }) => {
  const navigationMenu = [
    { link: `/contact-us`, label: 'Contact' },
    { link: `/register`, label: 'Sign Up' },
  ];

  return (
    <div className={styles.header}>
      <HeaderSection links={navigationMenu} />
      {children}
      <FooterSection />
      <ScrollToTop />
    </div>
  );
};

export default DefaultLayout;
