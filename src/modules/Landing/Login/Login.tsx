import { Container, Grid, Col } from '@mantine/core';
import MotionAnimate from 'Components/elements/MotionAnimate';
import styles from './styles.module.scss';
import { LoginForm } from './Fragments/LoginForm';
import { useState } from 'react';

const LoginrModule: React.FC = () => {
  const [data, setData] = useState<Record<string, any>>({
   email:'',
   password:''
  });

  const handleSetData = (data: any, index: number) => {
    setData({ dataStep1: data });
  };

  return (
    <MotionAnimate
      animate="fadeIn"
      autoAnimate={true}
      key={'tCBeritaItem1'}
      style={{
        animationDuration: '1.5s',
      }}>
      <Container className={styles.root} fluid p={0}>
        <Grid w={'100%'} columns={12}>
          <Col lg={6} sm={12}>
            
          </Col>
          <Col lg={6} sm={12}>
            <LoginForm handleSetData={(data, index) => handleSetData(data, index)} />
          </Col>
        </Grid>
      </Container>
    </MotionAnimate>
  );
};

export default LoginrModule;
