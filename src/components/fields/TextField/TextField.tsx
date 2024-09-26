import { InputBase as Base, InputBaseProps } from '@mantine/core';
import React from 'react';

interface TextFieldProps extends InputBaseProps {
  icon?: React.ReactNode;
  iconWidth?: number;
  rightSection?: React.ReactNode;
  rightSectionWidth?: number;
}

const TextField: React.FC<TextFieldProps> = ({
  disabled = false,
  icon = null,
  iconWidth = 36,
  radius = 3,
  rightSection = null,
  rightSectionWidth = 36,
  ...rest
}) => {
  return (
    <Base
      disabled={disabled}
      icon={icon}
      iconWidth={iconWidth}
      radius={radius}
      rightSection={rightSection}
      rightSectionWidth={rightSectionWidth}
      {...rest}
    />
  );
};

export default TextField;
