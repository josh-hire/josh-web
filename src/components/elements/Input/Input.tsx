import clsx from 'clsx';
import React from 'react';
import styles from './Input.module.scss';

interface Meta {
  dirty?: boolean;
  error?: string;
  touched?: boolean;
  submitError?: string;
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  disabled?: boolean;
  errorAutoHeight?: boolean;
  icon?: React.ReactNode;
  input: React.InputHTMLAttributes<HTMLInputElement>;
  inputClassName?: string;
  insetIcon?: React.ReactNode;
  label?: string;
  meta?: Meta;
  name?: string;
  onClickIcon?: () => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  className,
  disabled = false,
  label,
  name,
  meta,
  icon: Icon,
  inputClassName,
  input,
  required = false,
  onClickIcon,
  onKeyUp,
  insetIcon: InsetIcon,
  errorAutoHeight = false,
  ...props
}) => {
  const { dirty, error, touched, submitError } = meta;

  return (
    <div
      className={clsx(
        className,
        styles.container,
        Icon && styles['container-icon'],
        InsetIcon && styles['container-inset-icon'],
      )}
      {...props}
    >
      <label className={clsx(styles.label, disabled && styles.disabledLabel)}>
        {label}
        {required && <span className={styles.required}>*</span>}
      </label>
      <div className={styles.icon}>
        {Icon && (
          <span className={styles.icon} onClick={onClickIcon}>
            {Icon}
          </span>
        )}
      </div>
      <div className={styles['input-box']}>
        <div className={styles.insetIcon}>
          {InsetIcon && (
            <span className={styles.insetIcon} onClick={onClickIcon}>
              {InsetIcon}
            </span>
          )}
        </div>
        <input
          autoComplete="off"
          {...input}
          className={clsx(
            inputClassName,
            styles.input,
            !!input.value && styles.empty,
            (!!error || !!submitError) && (dirty || touched) && styles.errorInput,
          )}
          id={name}
          {...props}
          onKeyUp={onKeyUp}
        />
      </div>
      <div className={clsx(styles.message, errorAutoHeight && styles.autoHeight)}>
        {(!!error || !!submitError) && (dirty || touched) && (
          <span className={styles.error}>{error || submitError}</span>
        )}
      </div>
    </div>
  );
};

export default Input;
