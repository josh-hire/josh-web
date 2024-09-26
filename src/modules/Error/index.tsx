import styles from './styles.module.scss';
import Link from 'next/link';
import { Button } from '@mantine/core';

interface ErrorModuleProps {
  data: {
    error: {
      message: string;
    };
  };
}

export default function ErrorModule({ data }: ErrorModuleProps) {
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
