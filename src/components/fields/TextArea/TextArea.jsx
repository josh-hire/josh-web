import { Textarea as Base } from '@mantine/core';
import PropTypes from 'prop-types';

export default function TextArea({
  autosize,
  disabled,
  icon,
  iconWidth,
  invalid,
  maxRows,
  minRows,
  radius,
  rightSection,
  rightSectionWidth,
  ...rest
}) {
  return (
    <Base
      autosize={autosize}
      disabled={disabled}
      icon={icon}
      iconWidth={iconWidth}
      invalid={invalid}
      maxRows={maxRows}
      minRows={minRows}
      radius={radius}
      rightSection={rightSection}
      rightSectionWidth={rightSectionWidth}
      {...rest}
    />
  );
}


TextArea.defaultProps = {
  autosize: false,
  disabled: false,
  icon: null,
  iconWidth: 36,
  invalid: false,
  maxRows: 0,
  minRows: 0,
  radius: 3,
  rightSection: null,
  rightSectionWidth: 36,
};

TextArea.propTypes = {
  autosize: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.node,
  iconWidth: PropTypes.number,
  invalid: PropTypes.bool,
  maxRows: PropTypes.number,
  minRows: PropTypes.number,
  radius: PropTypes.number,
  rightSection: PropTypes.node,
  rightSectionWidth: PropTypes.number,
};
