import PropTypes from 'prop-types';
import { UnstyledButton, Group, Avatar, Text, createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  user: {
    display: 'block',
    borderRadius: '8px',
    width: '100%',
    padding: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
    },
  },
}));
export function UserButton({ image, name, email, icon, ...others }) {
  const { classes } = useStyles();

  return (
    <UnstyledButton className={classes.user} {...others}>
      <Group>
        <Avatar radius="xl" src={image} />
        <Group>
          <div style={{ flex: 1 }}>
            <Text size="sm" weight={500}>
              {name}
            </Text>

            <Text color="dimmed" size="xs">
              {email}
            </Text>
          </div>

          {icon}
        </Group>
      </Group>
    </UnstyledButton>
  );
}

UserButton.defaultProps = {
  email: '',
  icon: null,
  image: '',
  name: '',
};

UserButton.propTypes = {
  email: PropTypes.string,
  icon: PropTypes.node,
  image: PropTypes.string,
  name: PropTypes.string,
};
