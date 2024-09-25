import { useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useInView } from 'react-intersection-observer';
import 'animate.css/source/zooming_entrances/zoomIn.css';
import 'animate.css/source/zooming_entrances/zoomInDown.css';
import 'animate.css/source/zooming_entrances/zoomInUp.css';
import 'animate.css/source/zooming_exits/zoomOut.css';
import 'animate.css/source/zooming_exits/zoomOutDown.css';
import 'animate.css/source/zooming_exits/zoomOutUp.css';
import 'animate.css/source/fading_entrances/fadeIn.css';
import 'animate.css/source/fading_entrances/fadeInDown.css';
import 'animate.css/source/fading_entrances/fadeInLeft.css';
import 'animate.css/source/fading_entrances/fadeInRight.css';
import 'animate.css/source/fading_entrances/fadeInUp.css';
import 'animate.css/source/fading_entrances/fadeInTopLeft.css';
import 'animate.css/source/fading_entrances/fadeInTopRight.css';
import 'animate.css/source/fading_entrances/fadeInBottomLeft.css';
import 'animate.css/source/fading_entrances/fadeInBottomRight.css';
import 'animate.css/source/attention_seekers/bounce.css';
import 'animate.css/source/attention_seekers/pulse.css';
import 'animate.css/source/bouncing_entrances/bounceIn.css';
import 'animate.css/source/bouncing_entrances/bounceInDown.css';
import 'animate.css/source/bouncing_entrances/bounceInLeft.css';
import 'animate.css/source/bouncing_entrances/bounceInRight.css';
import 'animate.css/source/flippers/flipInX.css';
import 'animate.css/source/flippers/flipInY.css';
import 'animate.css/source/flippers/flipOutY.css';
import 'animate.css/source/rotating_entrances/rotateIn.css';
import 'animate.css/source/rotating_exits/rotateOut.css';
import 'animate.css/source/specials/jackInTheBox.css';

import styles from './styles.module.scss';

const MotionAnimate = ({
  children,
  className,
  animate,
  key,
  autoAnimate,
  trigger,
  style,
  onActiveChange,
}) => {
  const { ref: HeroRef, inView } = useInView();
  useEffect(() => {
    if (onActiveChange) {
      onActiveChange(inView);
    }
  }, [inView]);
  return (
    <div
      className={clsx(
        styles.root,
        className,
        autoAnimate && inView ? animate : '',
        trigger ? animate : '',
      )}
      key={key || 'PT_tester.id'}
      ref={HeroRef}
      style={{ ...style }}>
      {children}
    </div>
  );
};

MotionAnimate.propTypes = {
  animate: PropTypes.string,
  autoAnimate: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  key: PropTypes.string,
  onActiveChange: PropTypes.func,
  style: PropTypes.object,
  trigger: PropTypes.bool,
};

MotionAnimate.defaultProps = {
  animate: '',
  autoAnimate: false,
  children: null,
  className: '',
  key: 'PT_tester.id',
  onActiveChange: null,
  style: {},
  trigger: false,
};

export { MotionAnimate };
