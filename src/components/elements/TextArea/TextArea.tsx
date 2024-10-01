import React, { useRef } from 'react';
import clsx from 'clsx';
import styles from './TextArea.module.scss';

interface Meta {
  dirty?: boolean;
  error?: string;
  touched?: boolean;
  submitError?: string;
}

interface TextAreaProps {
  className?: string;
  disabled?: boolean;
  label?: string;
  name?: string;
  meta?: Meta;
  icon?: React.ReactNode;
  inputClassName?: string;
  input?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
  required?: boolean;
  message?: string;
  onClickIcon?: () => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  insetIcon?: React.ReactNode;
  errorAutoHeight?: boolean;
  [key: string]: any;
}

const TextArea: React.FC<TextAreaProps> = ({
  className,
  disabled,
  label,
  name,
  meta = { dirty: false, touched: false },
  icon: Icon,
  inputClassName,
  input,
  required,
  message,
  onClickIcon,
  onKeyUp,
  insetIcon: InsetIcon,
  errorAutoHeight = false,
  ...props
}) => {
  const { dirty, error, touched, submitError } = meta;
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const textAutoGrow = () => {
    const elm = textAreaRef.current;
    if (elm) {
      elm.style.height = '168px';
      if (!elm.value) {
        elm.style.height = '168px';
      } else {
        elm.style.height = `${elm.scrollHeight}px`;
      }
      if (elm.scrollHeight > 336) {
        elm.style.height = '336px';
        elm.style.overflowY = 'scroll';
      } else {
        elm.style.overflow = 'hidden';
      }
    }
  };

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
        <textarea
          autoComplete="off"
          rows={1}
          style={{ height: '168px' }}
          {...input}
          className={clsx(
            inputClassName,
            styles.input,
            !!input.value && styles.empty,
            (!!error || !!submitError) && (dirty || touched) && styles.errorInput,
          )}
          id={name}
          {...props}
          onInput={textAutoGrow}
          onKeyUp={onKeyUp}
          ref={textAreaRef}
        />
      </div>
      <div className={clsx(styles.message, errorAutoHeight && styles.autoHeight)}>
        {message && (
          <span className={styles.message}>
            <a>{message}</a>
          </span>
        )}
        {(!!error || !!submitError) && (dirty || touched) && (
          <small className={styles.error}>{error || submitError}</small>
        )}
      </div>
    </div>
  );
};

export default TextArea;
