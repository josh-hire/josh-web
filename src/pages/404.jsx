import { Button, Group } from '@mantine/core';
import styles from 'Styles/pages/404.module.scss';

export default function ServerError() {

  return (
    <div className={styles.root}>
      <h1>404</h1>
      <h3>Not Found</h3>
      <p>
        Our servers could not handle your request. Don&apos;t worry, our development team was
        already notified. Try refreshing the page.
      </p>
      <Group position="center">
        <Button size="md" variant="white">
          Refresh the page
        </Button>
      </Group>
    </div>
  );
}
