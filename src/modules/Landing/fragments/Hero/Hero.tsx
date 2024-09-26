import { Title, Text, Container, Image, Flex, Col, Grid, Button } from '@mantine/core';
import styles from './styles.module.scss';

export function HeroSection() {
  return (
    <Container className={styles.root}>
      <Grid columns={12}>
        <Col span={6}>
          <Flex direction={'column'} h={'100%'} justify={'center'} w={'100%'}>
            <Title className={styles.title}>Caffeine Composers</Title>
            <Title className={styles.title}>get swiping</Title>
            <Text className={styles.description}>
              {`Getahead has launched the world's fastest jobs app`}
            </Text>

            <Button className={styles.button}>
              Download the app
            </Button>
          </Flex>
        </Col>
        <Col span={6}>
          <div className={styles.heroImage}>
            <Image alt="Logo PT_tester" src={'/assets/home/images/hero.png'} />
          </div>
        </Col>
      </Grid>
    </Container>
  );
}
