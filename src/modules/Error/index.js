import styles from './styles.module.scss';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Button } from '@mantine/core';

export default function ErrorModule({ data }) {
  return (
    <div className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <h1>Error</h1>
          <h2>{data.error.message}</h2>
          <Link href="/">
            <Button>back to home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

ErrorModule.defaultProps = {
  data: {},
};

ErrorModule.propTypes = {
  data: PropTypes.object,
};
