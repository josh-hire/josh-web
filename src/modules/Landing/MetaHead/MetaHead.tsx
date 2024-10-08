import PropTypes from 'prop-types';
import Head from 'next/head';

const MetaHead = ({ title, description, url, image, keywords }) => {
  return (
    <Head>
      <meta
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        name="viewport"
      />
      <title>
        {title ? title : 'PT_joshweb - Solusi Digital Baru Untuk Bisnis'}
      </title>
      <meta
        content={
          description
            ? description
            : 'PT_joshweb merupakan platform yang melayani bisnis digital anda'
        }
        name="description"
      />
      <meta content="PT_joshweb" name="author" />
      <meta content={url ? url : 'https://PT_joshweb.id'} property="og:url" />
      <meta
        content={title ? title : 'PT_joshweb - Solusi Digital Baru Untuk Bisnis'}
        property="og:title"
      />
      <meta
        content={
          description
            ? description
            : 'PT_joshweb merupakan platform bisnis digital'
        }
        property="og:description"
      />
      <meta content={image ? image : '/PT_joshweb.png'} itemProp="image" property="og:image" />
      <meta
        content={keywords ? keywords : 'bisnis online, web profile, toko online'}
        name="keywords"
      />
      <meta content="website" name="og:type" />
      <meta
        content={title ? title : 'PT_joshweb - Solusi Digital Baru Untuk Bisnis'}
        name="twitter:title"
      />
      <meta content="PT_joshweb" property="og:site_name" />
      <meta content="1200" property="og:image:width" />
      <meta content="600" property="og:image:height" />
      <meta content="summary_large_image" name="twitter:card" />
      <meta content="#ffffff" name="theme-color" />
      <meta content="120000" property="og:updated_time" />
      <link href="/favicon.ico" rel="icon" />
      <link href="/PT_joshweb.png" rel="apple-touch-icon" sizes="256x256" />
      <link href="/PT_joshweb.png" rel="icon" type="image/png" />
      <link href="/favicon.ico" rel="icon" type="image/x-icon" />
    </Head>
  );
};

MetaHead.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  keywords: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
};

MetaHead.defaultProps = {
  description: '',
  image: '',
  keywords: '',
  title: '',
  url: '',
};

export default MetaHead;
