import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { HeaderSection } from 'Modules/Landing/Header/Header';
import { HeroSection } from 'Modules/Landing/fragments/Hero/Hero';
import { FooterSection } from 'Modules/Landing/Footer/Footer';
import styles from 'Styles/pages/Home.module.scss';
import ScrollToTop from 'Modules/Landing/fragments/ScrollToTop';
import { JobHuntingSection } from 'Modules/Landing/fragments/JobHunting/JobHunting';

export default function Home() {
  const navigationMenu = [
    { link: `/contact-us`, label: 'Contact Us' },
  ];

  const { pathname } = useRouter();

  const [isScroll, setIsScroll] = useState(false);
  const [isHomeState, setIsHomeState] = useState(false);

  const handleScroll = () => {
    const { scrollY } = window;
    if (scrollY < 200) {
      setIsScroll(false);
    } else {
      setIsScroll(true);
    }
  };

  useEffect(() => {
    const isHome = ['/', '/home'].includes(pathname);
    setIsHomeState(isHome);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    !isHome && setIsScroll(true);
    isHome && window.addEventListener('scroll', handleScroll, { passive: true });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>PT_tester - Solusi Digital Baru Untuk Digital Yang Lebih Optimal</title>
        <link href="/favicon.ico" rel="icon" />
        <link href="/PT_tester.png" rel="apple-touch-icon" sizes="256x256" />
        <link href="/PT_tester.png" rel="icon" type="image/png" />
        <link href="/favicon.ico" rel="icon" type="image/x-icon" />
        <meta content="PT_tester" property="og:site_name" />
        <meta
          content="PT_tester - Solusi Digital Baru Untuk Digital Yang Lebih Optimal"
          property="og:title"
        />
        <meta
          content="PT_tester merupakan platform Digital yang mendigitalisasi layanan Transportasi dan Distribusi secara end-to-end serta didukung oleh Digital dari Control Tower"
          name="description"
        />
        <meta content="Control Tower, Distribusi, Transportasi, PT_tester" name="keywords" />
        <meta content="{{ asset('images/PT_tester.png') }}" itemProp="image" property="og:image" />
        <meta content="website" property="og:type" />
        <meta content="1200" property="og:image:width" />
        <meta content="600" property="og:image:height" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="#ffffff" name="theme-color" />
        <meta content="120000" property="og:updated_time" />
        {/* fb domain verification */}
        <meta content="abmonxcvzw5b1wnd422dy6jbjz8z15" name="facebook-domain-verification" />
      </Head>
      <HeaderSection isHome={isHomeState} isScroll={isScroll} links={navigationMenu} />
      <HeroSection />
      <JobHuntingSection/>
      <FooterSection />
      <ScrollToTop />
    </div>
  );
}
