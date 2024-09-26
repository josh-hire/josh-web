import { useEffect, ReactNode, CSSProperties } from 'react';
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

interface MotionAnimateProps {
  children?: ReactNode;
  className?: string;
  animate?: string;
  key?: string;
  autoAnimate?: boolean;
  trigger?: boolean;
  style?: CSSProperties;
  onActiveChange?: (inView: boolean) => void;
}

const MotionAnimate: React.FC<MotionAnimateProps> = ({
  children,
  className,
  animate = '',
  autoAnimate = false,
  trigger = false,
  style = {},
  onActiveChange,
}) => {
  const { ref: HeroRef, inView } = useInView();

  useEffect(() => {
    if (onActiveChange) {
      onActiveChange(inView);
    }
  }, [inView, onActiveChange]);

  return (
    <div
      className={clsx(
        styles.root,
        className,
        autoAnimate && inView ? animate : '',
        trigger ? animate : '',
      )}
      ref={HeroRef}
      style={style}
    >
      {children}
    </div>
  );
};

export { MotionAnimate };
