import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import { HeaderSection } from 'Modules/Landing/Header/Header';
import { FooterSection } from 'Modules/Landing/Footer/Footer';
import ScrollToTop from 'Modules/Landing/fragments/ScrollToTop';

const DefaultLayout = ({ children }) => {

  const navigationMenu = [
    { link: `/contact-us`, label: 'Contact Us' },
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

DefaultLayout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  titleSub: PropTypes.string,
};

DefaultLayout.defaultProps = {
  children: null,
  title: '',
  titleSub: '',
};

export default DefaultLayout;
