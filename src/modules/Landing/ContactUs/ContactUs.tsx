import { Container, Flex, Grid, Col, Title, Text, Image } from '@mantine/core';
import MotionAnimate from 'Components/elements/MotionAnimate';
import styles from './styles.module.scss';
import { ContactUsForm } from './Fragments/ContactUsForm';

const ContactUsModule: React.FC = () => {
  return (
    <MotionAnimate
      animate="fadeIn"
      autoAnimate={true}
      key={'tCBeritaItem1'}
      style={{
        animationDuration: '1.5s',
      }}>
      <Container className={styles.root} fluid>
        <Container w={'100%'} size={'lg'}>
          <Grid columns={12}>
            <Col lg={6} sm={12}>
              <Flex
                direction={'column'}
                h={'100%'}
                justify={'flex-start'}
                align={'flex-start'}
                w={'100%'}>
                  <Title className={styles.title}>Get In Touch</Title>
                  <Text mt={20} className={styles.description}>
                    Have a questions or feedback?
                  </Text>
                  <Text className={styles.description}>
                    fill out the form and we will be in touch
                  </Text>
                <Flex
                  direction={'row'}
                  justify={'flex-start'}
                  align={'center'}
                  mt={'12rem'}
                  className={styles.boxInstagram}
                  w={'100%'}>
                  <Image
                    fit="contain"
                    height={34}
                    width={35}
                    alt="instagrams"
                    src={'/assets/home/images/instagram.png'}
                  />
                  <Text ml={10} className={styles.instagram}>
                    @Josh.official
                  </Text>
                </Flex>
              </Flex>
            </Col>
            <Col lg={6} sm={12}>
              <ContactUsForm />
            </Col>
          </Grid>
        </Container>
      </Container>
    </MotionAnimate>
  );
};

export default ContactUsModule;
