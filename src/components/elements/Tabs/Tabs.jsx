import { clsx } from '@mantine/core';
import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';
import { noop } from 'Utils/common';
import styles from './styles.module.scss';

export default function Tab({
  data,
  defaultValue,
  value: initialValue,
  onChange,
  className,
}) {

  const [currentValue, setCurrentValue] = useState(initialValue ?? defaultValue);

  const _onChange = useCallback(val=>{
    setCurrentValue(val);
    return onChange && onChange(val);
  },[onChange]);

  return (
    <div className={clsx(styles.tabs, className)}>
      {data.map(({ label, value, badge }, key) => (
        <div
          className={clsx([
            styles.item,
            currentValue === value && styles.active,
          ])}
          key={`tab-${value}-${key}`}
          onClick={() => _onChange(value)}
        >
          <div className={styles.label}>
            {label}
            {badge && <span className={styles.badge}>{badge}</span>}
          </div>
          {(currentValue === value) && <div className={styles.divider} />}
        </div>
      ))}
    </div>
  );
}

Tab.defaultProps = {
  className: '',
  data: [],
  defaultValue: '',
  onChange: noop,
  value: undefined,
};

Tab.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};
