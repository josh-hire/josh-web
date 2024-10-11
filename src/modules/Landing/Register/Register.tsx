import { Container, Flex, Grid, Col, Title, Text, Image } from '@mantine/core';
import MotionAnimate from 'Components/elements/MotionAnimate';
import styles from './styles.module.scss';
import { RegisterForm } from './Fragments/RegisterForm';
import { JobPositionForm } from './Fragments/JobPositionForm';
import { WorkPreferencesForm } from './Fragments/WorkPreferencesForm';
import { SkillPossesedForm } from './Fragments/SkillPossesedForm';
import { WorkExperienceForm } from './Fragments/WorkExperienceForm';
import { EducationBackgroundForm } from './Fragments/EducationBackgroundForm';

import clsx from 'clsx';
import { useState } from 'react';

const RegisterModule: React.FC = () => {
  const [activePage, setActivePage] = useState<number>(1);
  const [data, setData] = useState<Record<string, any>>({
    dataStep1: {},
    dataStep2: {},
    dataStep3: {},
    dataStep4: {},
    dataStep5: {},
    dataStep6: {},
  });

  const renderProgressPage = (activePage = 0) => {
    const data = [...new Array(6)];

    return data.map((_, i) => {
      return (
        <Flex key={'progressItem' + i}>
          <div
            className={clsx(
              styles.itemProgressPage,
              i <= activePage - 1 && styles.itemProgressActive,
            )}
          />
        </Flex>
      );
    });
  };

  const handleSetData = (data: any, index: number) => {
    setActivePage(index);
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
            <Flex
              direction={'column'}
              justify={'space-between'}
              align={'flex-start'}
              h={'100%'}
              pr={100}
              w={'100%'}
              className={styles.boxLeftSection}
              >
              <div className={styles.containerTitle}>
                <Flex
                  direction={'row'}
                  justify={'flex-end'}
                  align={'center'}
                  h={'100%'}
                  ml={110}
                  mt={'50%'}
                  className={styles.boxTitle}
                  >
                  <Image
                    fit="contain"
                    height={135}
                    alt="josh"
                    src={'/assets/home/images/josh.png'}
                    className={styles.joshLogo}
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
              <Flex  direction={'row'} justify={'flex-start'} align={'flex-start'} ml={100} mb={50} className={styles.boxProgress}>
                {renderProgressPage(activePage)}
              </Flex>
            </Flex>
          </Col>
          <Col lg={6} sm={12}>
            {activePage === 1 && (
              <RegisterForm handleSetData={(data, index) => handleSetData(data, index)} />
            )}
            {activePage === 2 && (
              <JobPositionForm handleSetData={(data, index) => handleSetData(data, index)} />
            )}
            {activePage === 3 && (
              <WorkPreferencesForm handleSetData={(data, index) => handleSetData(data, index)} />
            )}
            {activePage === 4 && (
              <SkillPossesedForm handleSetData={(data, index) => handleSetData(data, index)} />
            )}
            {activePage === 5 && (
              <WorkExperienceForm handleSetData={(data, index) => handleSetData(data, index)} />
            )}
            {activePage === 6 && (
              <EducationBackgroundForm handleSetData={(data, index) => handleSetData(data, index)} />
            )}
          </Col>
        </Grid>
      </Container>
    </MotionAnimate>
  );
};

export default RegisterModule;
