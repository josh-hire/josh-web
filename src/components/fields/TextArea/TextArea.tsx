import { Textarea as Base, TextareaProps } from '@mantine/core';
import React from 'react';

interface TextAreaProps extends TextareaProps {
  icon?: React.ReactNode;
  iconWidth?: number;
  rightSection?: React.ReactNode;
  rightSectionWidth?: number;
}

const TextArea: React.FC<TextAreaProps> = ({
  autosize = false,
  disabled = false,
  icon = null,
  iconWidth = 36,
  maxRows = 0,
  minRows = 0,
  radius = 3,
  rightSection = null,
  rightSectionWidth = 36,
  ...rest
}) => {
  return (
    <Base
      autosize={autosize}
      disabled={disabled}
      icon={icon}
      iconWidth={iconWidth}
      maxRows={maxRows}
      minRows={minRows}
      radius={radius}
      rightSection={rightSection}
      rightSectionWidth={rightSectionWidth}
      {...rest}
    />
  );
};

export default TextArea;
