import { InputBase as Base } from '@mantine/core';
import PropTypes from 'prop-types';

export default function TextField({
  disabled,
  icon,
  iconWidth,
  invalid,
  radius,
  rightSection,
  rightSectionWidth,
  ...rest
}) {
  return (
    <Base
      disabled={disabled}
      icon={icon}
      iconWidth={iconWidth}
      invalid={invalid}
      radius={radius}
      rightSection={rightSection}
      rightSectionWidth={rightSectionWidth}
      {...rest}
    />
  );
}

TextField.defaultProps = {
  disabled: false,
  icon: null,
  iconWidth: 36,
  invalid: false,
  radius: 3,
  rightSection: null,
  rightSectionWidth: 36,
};

TextField.propTypes = {
  disabled: PropTypes.bool,
  icon: PropTypes.node,
  iconWidth: PropTypes.number,
  invalid: PropTypes.bool,
  radius: PropTypes.number,
  rightSection: PropTypes.node,
  rightSectionWidth: PropTypes.number,
};
