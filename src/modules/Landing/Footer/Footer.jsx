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
          title: 'Work for us',
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
      title: 'Contact',
      marginLeft: 70,
      linkData: [
        {
          marginLeft: 70,
          id: 1,
          url: '#',
          image: null,
          title: 'Get in touch',
        },
        {
          id: 2,
          marginLeft: 70,
          url: '#',
          image: null,
          title: 'Media/PR',
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
            order={3}
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
        order={1}
        size="14"
        style={{ display: 'flex', marginLeft: value?.marginLeft }}>
        {value?.title}
      </Text>
      {renderItemLink(value?.linkData)}
    </div>
  ));

  const boxItemFooter = () => {
    return (
      <SimpleGrid breakpoints={[{ maxWidth: 'md', cols: 1 }]} cols={1} spacing={0}>
        <Text align="start" className={styles.titleMenuBottomLeft} order={1} size="md">
          Logo Footer
        </Text>
        <Text align="left" className={styles.title} mt="sm" size="lg" weight={500}>
          © 2024 getahead. All rights reserved.
        </Text>
      </SimpleGrid>
    );
  };

  return (
    <Footer className={styles.root}>
      <Container>
        <Grid align="left" gutter={0}>
          <Col md={5} mt={50} span={3}>
            {boxItemFooter()}
          </Col>
          <Col className={styles.imageWrap} md={7} mt={21} span={12}>
            <Flex>{itemMenuFooter}</Flex>
          </Col>
        </Grid>
      </Container>
    </Footer>
  );
}
