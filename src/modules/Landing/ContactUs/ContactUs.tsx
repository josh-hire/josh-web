import { Container } from '@mantine/core';
import MotionAnimate from 'Components/elements/MotionAnimate';
import styles from './styles.module.scss';

const ContactUsModule: React.FC = () => {
  return (
    <MotionAnimate
      animate="fadeIn"
      autoAnimate={true}
      key={'tCBeritaItem1'}
      style={{
        animationDuration: '1.5s',
      }}
    >
      <Container className={styles.root}>
        <div className={styles.container}>Contact Us</div>
      </Container>
    </MotionAnimate>
  );
};

export default ContactUsModule;