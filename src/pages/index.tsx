import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { HeaderSection } from 'Modules/Landing/Header/Header';
import { HeroSection } from 'Modules/Landing/fragments/Hero/Hero';
import { FooterSection } from 'Modules/Landing/Footer/Footer';
import styles from 'Styles/pages/Home.module.scss';
import ScrollToTop from 'Modules/Landing/fragments/ScrollToTop';
import { AboutUsSection } from 'Modules/Landing/fragments/AboutUs/AboutUs';
import { ProductSection } from 'Modules/Landing/fragments/Product/Product';

export default function Home() {
  const navigationMenu = [
    { link: `/contact-us`, label: 'Contact' },
    { link: `/register`, label: 'Sign Up' },
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
        <title>Josh-Web - Hire Digital Solution</title>
        <link href="/favicon.ico" rel="icon" />
        <link href="/PT_joshweb.png" rel="apple-touch-icon" sizes="256x256" />
        <link href="/PT_joshweb.png" rel="icon" type="image/png" />
        <link href="/favicon.ico" rel="icon" type="image/x-icon" />
        <meta content="PT_joshweb" property="og:site_name" />
        <meta
          content="PT_joshweb - Hire Digital Solution"
          property="og:title"
        />
        <meta
          content="PT_joshweb merupakan platform Digital yang mendigitalisasi layanan Transportasi dan Distribusi secara end-to-end serta didukung oleh Digital dari Control Tower"
          name="description"
        />
        <meta content="Control Tower, Distribusi, Transportasi, PT_joshweb" name="keywords" />
        <meta content="{{ asset('images/PT_joshweb.png') }}" itemProp="image" property="og:image" />
        <meta content="website" property="og:type" />
        <meta content="1200" property="og:image:width" />
        <meta content="600" property="og:image:height" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="#ffffff" name="theme-color" />
        <meta content="120000" property="og:updated_time" />
        <meta content="abmonxcvzw5b1wnd422dy6jbjz8z15" name="facebook-domain-verification" />
      </Head>
      <HeaderSection links={navigationMenu} />
      <HeroSection />
      <AboutUsSection/>
      <ProductSection/>
      <FooterSection />
      <ScrollToTop />
    </div>
  );
}
