import { Text } from '@mantine/core';

interface PasswordRequirementProps {
  label: string;
  medium?: boolean;
  meets?: boolean;
}

const PasswordRequirement: React.FC<PasswordRequirementProps> = ({ meets = false, medium = false }) => {
  const color = meets ? 'teal' : 'red';

  return (
    <Text
      color={medium ? 'yellow' : color}
      mt={7}
      size="sm"
      sx={{ display: 'flex', alignItems: 'center' }}
    >
      Error
    </Text>
  );
};

export default PasswordRequirement;
