import { Title, Container, Flex, Image, SimpleGrid, Text } from '@mantine/core';
import styles from './styles.module.scss';
import MotionAnimate from 'Components/elements/MotionAnimate';

export function AboutUsSection() {
  return (
    <MotionAnimate
      animate="fadeIn"
      autoAnimate={true}
      key={'aboutUsMotion'}
      style={{
        animationDuration: '1.5s',
      }}>
      <Container className={styles.root} fluid>
        <Container className={styles.containerCard} size={'md'}>
          <Flex direction={'column'} justify={'center'} align={'center'}>
            <Flex
              className={styles.boxTitle}
              direction={'row'}
              justify={'center'}
              mb={10}
              w={'100%'}>
              <Title className={styles.title}>About Us</Title>
            </Flex>
            <SimpleGrid
              breakpoints={[{ maxWidth: 'md', cols: 1 }]}
              cols={2}
              spacing={30}
              px={60}
              py={20}
                className={styles.boxOurApp}
              >
              <Flex direction={'column'} justify={'flex-start'} align={'flex-start'}>
                <Flex direction={'column'} w={'100%'}>
                  <Title className={styles.titleContent}>Our App</Title>
                  <Flex
                    className={styles.mobileView}
                    direction={'column'}
                    justify={'center'}
                    align={'center'}
                    h={'100%'}
                    px={40}>
                    <Image
                      alt="Logo PT_joshweb"
                      src={'/assets/home/images/aboutUs/img-content.png'}
                      fit="fill"
                    />
                  </Flex>
                  <Text className={styles.description}>
                    {`"Josh" is short for Job for Swipe and Hiring leveraging innovative technology to create an intuitive platform where job seekers and companies can easily connect. We wanted to build a platform that not only enhances the job-seeking experience but also provides companies with the tools to find the right talent quickly and effortlessly. With Josh, we’re creating a space where opportunities meet potential, and where both sides of the job market can benefit from an optimized, data-driven approach to hiring.`}
                  </Text>
                </Flex>
              </Flex>
              <Flex
                className={styles.desktopView}
                direction={'column'}
                justify={'center'}
                align={'center'}
                h={'100%'}
                px={40}>
                <Image
                  alt="Logo PT_joshweb"
                  src={'/assets/home/images/aboutUs/img-content.png'}
                  fit="fill"
                />
              </Flex>
            </SimpleGrid>
          </Flex>
        </Container>
      </Container>
    </MotionAnimate>
  );
}
