import { Title, Text, Container, Image, Flex, Col, Grid, Button } from '@mantine/core';
import styles from './styles.module.scss';
import MotionAnimate from 'Components/elements/MotionAnimate';
import Link from 'next/link';

export function HeroSection() {
  return (
    <MotionAnimate
      animate="fadeIn"
      autoAnimate={true}
      key={'heroMotion'}
      style={{
        animationDuration: '1.5s',
      }}>
      <Container className={styles.root} size={'lg'}>
        <Grid columns={12}>
          <Col span={12}>
            <Title className={styles.title}>SWIPE through jobs and get HIRED fast</Title>
          </Col>
        </Grid>
        <Grid columns={12}>
          <Col span={6}>
            <div className={styles.heroImage}>
              <Image alt="Logo PT_tester" src={'/assets/home/images/hero.png'} />
            </div>
          </Col>
          <Col span={6}>
            <Flex direction={'column'} h={'100%'} justify={'end'} align={'end'} w={'100%'}>
              <Title className={styles.title}>Swipe to Hire</Title>
              <Text className={styles.description}>
                {`Unlock your full potential! The journey to greatness begins with one swipe—explore endless opportunities, connect with your dream job, and take the first step toward a future filled with success.`}
              </Text>
              <Flex direction={'row'} justify={'end'} align={'end'} w={'100%'} mt={20}>
                <Button className={styles.button}>Sign In</Button>
                <Link href={'/register'}>
                  <Button className={styles.button}>Sign Up</Button>
                </Link>
              </Flex>
            </Flex>
          </Col>
        </Grid>
      </Container>
    </MotionAnimate>
  );
}
