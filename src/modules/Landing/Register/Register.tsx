import { Container, Flex, Grid, Col, Title, Text, Image } from '@mantine/core';
import MotionAnimate from 'Components/elements/MotionAnimate';
import styles from './styles.module.scss';
import { RegisterForm } from './Fragments/RegisterForm';
import clsx from 'clsx';
import { useState } from 'react';

const RegisterModule: React.FC = () => {

  const [activePage, setActivePage] =  useState<number>(1);
  
  const renderProgressPage = (activePage=0) => {
    const data = [...new Array(6)];

    return data.map((_, i) => {
      return (
        <Flex key={'progressItem' + i}>
          <div className={clsx(styles.itemProgressPage,  i<=activePage-1 && styles.itemProgressActive)} />
        </Flex>
      );
    });
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
          <Col span={6}>
            <Flex
              direction={'column'}
              justify={'space-between'}
              align={'flex-start'}
              h={'100%'}
              pr={100}
              w={'100%'}>
              <div>
                <Flex
                  direction={'row'}
                  justify={'flex-end'}
                  align={'center'}
                  h={'100%'}
                  ml={110}
                  mt={'50%'}>
                  <Image
                    fit="contain"
                    height={135}
                    alt="josh"
                    src={'/assets/home/images/josh.png'}
                  />
                  <Flex
                    direction={'column'}
                    justify={'center'}
                    align={'flex-start'}
                    ml={20}
                    w={'100%'}>
                    <Title className={styles.title}>JOSH</Title>
                    <Text mt={20} className={styles.description}>
                      Swipe & Hiring
                    </Text>
                  </Flex>
                </Flex>
              </div>
              <Flex direction={'row'} justify={'flex-start'} align={'flex-start'} ml={100} mb={50}>
                {renderProgressPage(activePage)}
              </Flex>
            </Flex>
          </Col>
          <Col span={6}>
            <RegisterForm />
          </Col>
        </Grid>
      </Container>
    </MotionAnimate>
  );
};

export default RegisterModule;
