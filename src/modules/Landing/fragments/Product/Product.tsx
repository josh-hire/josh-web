'use client';
import { Title, Container, Flex, Image, Text } from '@mantine/core';
import Link from 'next/link';
import styles from './styles.module.scss';
import { Carousel } from '@mantine/carousel';
import MotionAnimate from 'Components/elements/MotionAnimate';
import Autoplay, { AutoplayType } from 'embla-carousel-autoplay';
import { MutableRefObject, useRef } from 'react';

export function ProductSection() {
  const autoplay:MutableRefObject<AutoplayType> = useRef(Autoplay({ delay: 2000 }));

  const productData = [
    {
      imgUrl: '/assets/home/images/products/product1.png',
      content: `You can view jobs tailored to your preferences, with listings displayed from the past 30 days.`,
      link: '',
    },
    {
      imgUrl: '/assets/home/images/products/product2.png',
      content: `Swipe left or right to explore job openings. Check out the offered benefits, expected salary, and learn more about the position and the hiring company. If you're interested, swipe right to apply. It's that simple!`,
      link: '',
    },
    {
      imgUrl: '/assets/home/images/products/product3.png',
      content: `We believe your career deserves to be showcased in a captivating profile that highlights YOU, your experience, skills, and interests, aligned with the preferences you selected during registration.`,
      link: '',
    },
    {
      imgUrl: '/assets/home/images/products/product4.png',
      content: `You can view jobs tailored to your preferences, with listings displayed from the past 30 days.`,
      link: '',
    },
    {
      imgUrl: '/assets/home/images/products/product5.png',
      content: `Once you've found a match, you can connect directly with the company or candidate through our app. Schedule an interview, ask engaging questions, and dive deeper into getting to know each other!`,
      link: '',
    },
  ];

  const productItems = () =>
    productData.map((item, i) => {
      return (
        <Carousel.Slide key={'product' + i} className={styles.containerCard}>
          <Flex direction={'column'} justify={'flex-start'} align={'center'}>
            <Link href={item.link}>
              <Image alt={'product' + i} fit="contain" h={222} src={item?.imgUrl} />
            </Link>
            <Text className={styles.description}>{item?.content}</Text>
          </Flex>
        </Carousel.Slide>
      );
    });

  return (
    <MotionAnimate
      animate="fadeIn"
      autoAnimate={true}
      key={'prodctMotions'}
      style={{
        animationDuration: '1.5s',
      }}>
      <Container className={styles.root} fluid>
        <Flex
          className={styles.boxTitle}
          direction={'column'}
          justify={'center'}
          mb={10}
          w={'100%'}>
          <Flex className={styles.boxTitle} direction={'row'} justify={'center'} mb={10} w={'100%'}>
            <Title className={styles.title}>
              We create products that power your career growth.
            </Title>
          </Flex>
          <Carousel
            onMouseEnter={() => {
              autoplay?.current?.stop();
            }}
            onMouseLeave={() => {
              autoplay?.current?.reset();
              autoplay?.current?.play();
            }}
            dragFree
            loop
            slideSize="25%"
            height={'auto'}
            withControls={false}
            initialSlide={2}
            plugins={[autoplay.current]}
            breakpoints={[
              { maxWidth: 'md', slideSize: '50%' },
              { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
            ]}
            >
            {productItems()}
          </Carousel>
        </Flex>
      </Container>
    </MotionAnimate>
  );
}
