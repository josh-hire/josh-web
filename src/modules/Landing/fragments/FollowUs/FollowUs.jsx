import { Title, Container, Flex, Image, SimpleGrid } from '@mantine/core';
import styles from './styles.module.scss';

export function FollowUsSection() {
  const JobHuntingData = [
    {
      title: 'job1',
      imageUrl: '/assets/home/images/job-hunting/job1.png',
      desc: 'Designed to match you with companies that fit your wants and needs. From dog friendly offices to working from home, simply set your wish list and get swiping.',
    },
    {
      title: 'job2',
      imageUrl: '/assets/home/images/job-hunting/job2.png',
      desc: 'Resume? We think your career is worthy of a beautiful profile showcasing YOU, your experience, strengths, and passions. Oh and no cover letters, EVER.',
    },
    {
      title: 'job3',
      imageUrl: '/assets/home/images/job-hunting/job3.png',
      desc: 'Swipe through jobs left and right. Transparency is key. See what perks are on offer, what salary is being paid, learn about the role, the company hiring and if you like what you see, simply swipe right to apply. It is that easy.',
    },
    {
      title: 'job4',
      imageUrl: '/assets/home/images/job-hunting/job4.png',
      desc: 'Match with your next role. Once you find your ideal job and swipe right, the company hiring has the opportunity to swipe right on your profile as well. If they do, it is a match made in Getahead.',
    },
    {
      title: 'job5',
      imageUrl: '/assets/home/images/job-hunting/job5.png',
      desc: 'Once matched you can chat with the company/candidate directly through our app. Set up a time for an interview, ask further questions and get to know more about each other.',
    },
    {
      title: 'job6',
      imageUrl: '/assets/home/images/job-hunting/job6.png',
      desc: 'Save even more time by interviewing directly through the app with a ‘face to face’ video call. Need someone to start tomorrow? You have all the tools right at your fingertips.',
    },
  ];

  const renderJobHunting =(start=0, end=3)=> JobHuntingData.slice(start,end).map((item, i) => {
    return (
      <Flex direction={'column'} key={`job${i}`}>
        <div className={styles.jobItems}>
          <Image alt={item?.title} fit="contain" height={400} src={item?.imageUrl} />
        </div>
        <Title className={styles.jobDesc}>{item?.desc}</Title>
      </Flex>
    );
  });

  return (
    <Container className={styles.root}>
      <Flex direction={'column'} justify={'center'}>
        <Flex direction={'row'} h={'100%'} justify={'center'} mb={80} w={'100%'}>
          <Title className={styles.title}>Your job hunting superpower</Title>
        </Flex>
        <SimpleGrid breakpoints={[{ maxWidth: 'md', cols: 1 }]} cols={3} spacing={0}>
          {renderJobHunting(0,3)}
        </SimpleGrid>
        <SimpleGrid breakpoints={[{ maxWidth: 'md', cols: 1 }]} cols={3} spacing={0}>
          {renderJobHunting(3,6)}
        </SimpleGrid>
      </Flex>
    </Container>
  );
}
