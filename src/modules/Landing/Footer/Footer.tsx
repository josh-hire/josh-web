import { Container, Grid, Col, Image, SimpleGrid, Text, Flex, Footer } from '@mantine/core';
import Link from 'next/link';
import clsx from 'clsx';
import styles from './styles.module.scss';

export function FooterSection() {
  const footerData = [
    {
      id: 1,
      title: 'Company',
      linkData: [
        {
          id: 1,
          url: '#',
          image: null,
          title: 'Work with us',
          target: '_blank',
        },
      ],
    },
    {
      id: 2,
      title: 'Legal',
      linkData: [
        {
          id: 1,
          url: '#',
          image: null,
          title: 'Terms and conditions',
        },
        {
          id: 2,
          url: '#',
          image: null,
          title: 'Privacy Policy',
        },
      ],
    },
    {
      id: 3,
      title: 'Connect With Us',
      marginLeft: 0,
      linkData: [
        {
          marginLeft: 0,
          id: 1,
          url: '#',
          image: '/assets/home/images/instagram.png',
          title: '@Josh.official',
        },
      ],
    },
    {
      id: 3,
      title: 'Contact',
      marginLeft: 0,
      linkData: [
        {
          marginLeft: 0,
          id: 1,
          url: '#',
          image: null,
          title: 'Get in touch',
        },
      ],
    },
  ];

  const renderItemLink = (data) => {
    if (!data) {
      return null;
    }

    return data?.map((item) => {
      return (
        <div
          className={styles.boxTitleLink}
          key={item?.title}
          style={{ display: 'flex', marginLeft: item?.marginLeft }}>
          {item?.image && (
            <div className={styles.boxIconLink}>
              <Image alt={item?.title} fit="contain" src={item?.image} />
            </div>
          )}
          <Text
            align="start"
            className={clsx(styles.titleLInk, item?.url && item?.url !== '' && styles.isLink)}
            size="lg">
            {item?.url && item?.url !== '' ? (
              <Link href={item?.url}>
                {item?.title} {item?.note}
              </Link>
            ) : (
              <span>
                {item?.title} {item?.note}
              </span>
            )}
          </Text>
        </div>
      );
    });
  };

  const itemMenuFooter = footerData.map((value) => (
    <div className={styles[`boxItem`]} key={value.title}>
      <Text
        align="start"
        className={styles.titleMenuBottom}
        size={14}
        style={{ display: 'flex', marginLeft: value?.marginLeft }}>
        {value?.title}
      </Text>
      {renderItemLink(value?.linkData)}
    </div>
  ));

  const boxItemFooter = () => {
    return (
      <SimpleGrid breakpoints={[{ maxWidth: 'md', cols: 1 }]} cols={1} spacing={0}>
        <div>
          <Text align="start" className={styles.titleMenuBottomLeft} size="md">
            find your dream job at JOSH
          </Text>
        </div>
        <Flex>
          <Image
            className={styles.appImage}
            mr={20}
            mt={16}
            alt={'google-play'}
            fit="contain"
            src={'/assets/home/images/google-play.png'}
            width={'180px'}
          />
          <Image
            className={styles.appImage}
            mt={16}
            alt={'play-store'}
            fit="contain"
            src={'/assets/home/images/google-play.png'}
            width={'180px'}
          />
        </Flex>
        {/* <Text align="left" className={styles.title} mt="sm" size="lg" weight={500}>
          © 2024 getahead. All rights reserved.
        </Text> */}
      </SimpleGrid>
    );
  };

  return (
    <Footer className={styles.root} height={'auto'}>
      <div className={styles.boxContainer}>
        <Container fluid>
          <Grid align="left" gutter={0}>
            <Col md={5} mt={50} lg={5} sm={12}>
              {boxItemFooter()}
            </Col>
            <Col className={styles.imageWrap} md={7} mt={0} lg={7}>
              <SimpleGrid breakpoints={[{ maxWidth: 'md', cols: 2 }]} cols={2} spacing={30}>
                {itemMenuFooter}
              </SimpleGrid>
            </Col>
          </Grid>
        </Container>
      </div>
    </Footer>
  );
}
