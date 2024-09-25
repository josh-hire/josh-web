import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './ScrollToTop.styles';
import FeatherIcon from 'feather-icons-react';
import styles from './styles.module.scss';

export const handleScroll =(setIsScroll)=>{
  const { scrollY } = window;
  if (scrollY<200){
    setIsScroll(false);
  }else{
    setIsScroll(true);
  }
};
const ScrollToTop = () => {
  const { classes } = useStyles();

  const [isScroll, setIsScroll] = useState(false);



  useEffect(()=>{
    window.addEventListener('scroll', handleScroll.bind('', setIsScroll ), { passive: true });
  },[]);

  const handleScrollToTop=()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isScroll) {return null;}

  return (
    <div className={classes.root}>
      <div onClick={()=>handleScrollToTop()}>
        <FeatherIcon className={styles.scrollToTop} icon="arrow-up-circle" size={30}/>
      </div>
    </div>
  );
};

ScrollToTop.propTypes = {
  children: PropTypes.node,
};

ScrollToTop.defaultProps = {
  children: null,
};

export default ScrollToTop;
