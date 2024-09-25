import { Text } from '@mantine/core';
import PropTypes from 'prop-types';
const PasswordRequirement = ({ meets, medium }) => {

  const _meets = meets ? 'teal' : 'red';

  return (
    <Text
      color={medium ? 'yellow' : _meets}
      mt={7}
      size="sm"
      sx={{ display: 'flex', alignItems: 'center' }}
    >
     Error
    </Text>
  );
};

PasswordRequirement.defaultProps = {
  medium: false,
  meets: false,
};

PasswordRequirement.propTypes = {
  label: PropTypes.string.isRequired,
  medium: PropTypes.bool,
  meets: PropTypes.bool,
};

export default PasswordRequirement;
