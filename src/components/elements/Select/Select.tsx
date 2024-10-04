import React from 'react';
import styles from './Select.module.scss';
import { Select as SelectCore, SelectItem } from '@mantine/core';
import FeatherIcon from 'feather-icons-react';

interface SelectProps {
  classNames?: Record<string, string>;
  input?: {
    onBlur?: () => void;
    value?: string;
  };
  meta?: {
    error?: string;
    touched?: boolean;
  };
  rightSection?: React.ReactNode;
}

const Select: React.FC<SelectItem> = (props) => {
  const { classNames, rightSection, meta, input, data } = props;

  return (
    <div
      className={styles.root}
      onBlur={() => {
        input?.onBlur && input.onBlur();
      }}
    >
      <SelectCore
        data={data}
        {...props}
        classNames={{
          root: meta?.error && meta?.touched ? styles.selectorError : styles.selection,
          label: styles.selectionClass,
          item: styles.item,
          required: styles.required,
          ...classNames,
        }}
        rightSection={rightSection ??
          <FeatherIcon icon="chevron-down" />}
        styles={{
          rightSection: { pointerEvents: 'none' },
        }}
        variant="unstyled"
      />
      {meta?.error && meta?.touched && <div className={styles.errorText}>{meta.error}</div>}
    </div>
  );
};

export default Select;
