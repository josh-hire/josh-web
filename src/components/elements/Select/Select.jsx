import { ArrowDown } from 'Elements/Logo/ArrowDown';
import PropTypes from 'prop-types';
import styles from './Select.module.scss';

import { Select as SelectCore } from '@mantine/core';

const Select = (props) => {
  const { classNames, rightSection, meta, input } = props;
  return (
    <div
      className={styles.root}
      onBlur={() => {
        input.onBlur && input?.onBlur();
      }}>
      <SelectCore
        {...props}
        classNames={{
          root: meta.error && meta.touched ? styles.selectorError : styles.selection,
          label: styles.selectionClass,
          item: styles.item,
          required: styles.required,
          ...classNames,
        }}
        rightSection={rightSection ?? <ArrowDown />}
        styles={{
          rightSection: { pointerEvents: 'none' },
        }}
        variant="unstyled"
      />
      {meta.error && meta.touched && <div className={styles.errorText}>{meta.error}</div>}
    </div>
  );
};

Select.propTypes = {
  classNames: PropTypes.object,
  input: PropTypes.object,
  meta: PropTypes.object,
  rightSection: PropTypes.node,
};

Select.defaultProps = {
  classNames: {},
  input: {},
  meta: {},
  rightSection: null,
};

export default Select;
