import '@fontsource/lato';
import PropTypes from 'prop-types';
import ContextProvider from 'Contexts/';
import Toastr from 'Components/elements/Toastr';
import 'Styles/globals.scss';
import 'Styles/nprogress.scss';
import ErrorBoundaryModule from 'Modules/Error';
import { ErrorBoundary } from 'react-error-boundary';
import MetaHead from 'Modules/Landing/MetaHead';
import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { SITE_URL } from 'Utils/constants';

export default function App(props) {
  const router = useRouter();
  const canonicalUrl = (SITE_URL + (router.asPath === '/' ? '' : router.asPath)).split('?')[0];
  const { Component, pageProps } = props;
  const { data } = pageProps;
  return (
    <>
      <DefaultSeo canonical={canonicalUrl} />
      <MetaHead
        description={data?.meta?.description}
        image={data?.thumbnailUrl}
        keywords={data?.meta?.keywords}
        title={data?.title}
        url={canonicalUrl}
      />
      <ErrorBoundary
        fallbackRender={(fallbackProps) => {
          return <ErrorBoundaryModule data={fallbackProps} />;
        }}>
        <ContextProvider>
          <Component {...pageProps} />
          <Toastr />
        </ContextProvider>
      </ErrorBoundary>
    </>
  );
}

App.defaultProps = {
  pageProps: {},
};

App.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.func,
  ]).isRequired,
  pageProps: PropTypes.object,
};
