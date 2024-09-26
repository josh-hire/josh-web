import { useEffect, useState } from 'react';
import { useStyles } from './ScrollToTop.styles';
import FeatherIcon from 'feather-icons-react';
import styles from './styles.module.scss';

export const handleScroll = (setIsScroll: React.Dispatch<React.SetStateAction<boolean>>) => {
  const { scrollY } = window;
  if (scrollY < 200) {
    setIsScroll(false);
  } else {
    setIsScroll(true);
  }
};

const ScrollToTop: React.FC = () => {
  const { classes } = useStyles();
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => handleScroll(setIsScroll);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isScroll) return null;

  return (
    <div className={classes.root}>
      <div onClick={handleScrollToTop}>
        <FeatherIcon className={styles.scrollToTop} icon="arrow-up-circle" size={30} />
      </div>
    </div>
  );
};

export default ScrollToTop;