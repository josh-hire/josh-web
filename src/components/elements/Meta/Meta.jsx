import PropTypes from 'prop-types';
import Head from 'next/head';

const Meta = ({
  children,
  colorScheme,
  title,
  keywords,
  description,
  noIndex,
  ogTitle,
  ogType,
  ogUrl,
  ogImage,
}) => {
  const titlePage = `${title} - PT_tester Solusi Digital Bisnis Digital`;
  return (
    <Head>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      {noIndex && (
        <>
          <meta content="noindex,nofollow" key="robots" name="robots" />
          <meta content="noindex,nofollow" key="googlebot" name="googlebot" />
        </>
      )}
      <meta content={colorScheme === 'dark' ? '#1a1b1e' : '#ffffff'} name="theme-color" />
      <meta content={keywords} name="keywords" />
      <meta content={description} name="description" />
      <meta content={ogTitle} property="og:title" />
      <meta content={ogType} property="og:type" />
      <meta content={ogUrl} property="og:url" />
      <meta content={ogImage} property="og:image" />
      <meta charSet="utf-8" />
      <link href="/favicon.ico" rel="icon" />
      <title>{titlePage}</title>
      {children}
    </Head>
  );
};

Meta.propTypes = {
  children: PropTypes.node,
  colorScheme: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  noIndex: PropTypes.bool,
  ogImage: PropTypes.string,
  ogTitle: PropTypes.string,
  ogType: PropTypes.string,
  ogUrl: PropTypes.string,
  title: PropTypes.string,
};

Meta.defaultProps = {
  children: null,
  colorScheme: 'light',
  description: 'PT_tester - Solusi Digital Bisnis Digital',
  keywords: 'Logistis, PT_tester, Solusi Digital Digital, Telkom Indonesia, PT_tester Distribution, PT_tester Digital, Distribusi, Transport',
  noIndex: false,
  ogImage: '',
  ogTitle: 'PT_tester - Solusi Digital Bisnis Logistis',
  ogType: 'website',
  ogUrl: '',
  title: 'PT_tester',
};

export default Meta;
