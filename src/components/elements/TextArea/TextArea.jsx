/* eslint-disable sonarjs/cognitive-complexity */
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import styles from './TextArea.module.scss';

const TextArea = ({
  className,
  disabled,
  label,
  name,
  meta,
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
  const textAreaRef = useRef();
  const textAutoGrow = () => {
    const elm = textAreaRef?.current;
    if (!elm.value) {
      elm.style.height = '168px';
    } else {
      elm.style.height = elm.scrollHeight + 'px';
    }
    if (elm.scrollHeight > 336) {
      elm.style.height = '336px';
      elm.style.overflowY = 'scroll';
    } else {
      elm.style.overflow = 'hidden';
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
      {...props}>
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
          rows={'auto'}
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

TextArea.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  errorAutoHeight: PropTypes.bool,
  icon: PropTypes.node,
  input: PropTypes.node,
  inputClassName: PropTypes.string,
  insetIcon: PropTypes.node,
  label: PropTypes.string,
  message: PropTypes.string,
  meta: PropTypes.object,
  name: PropTypes.string,
  onClickIcon: PropTypes.func,
  onKeyUp: PropTypes.func,
  required: PropTypes.bool,
};

TextArea.defaultProps = {
  className: '',
  disabled: false,
  errorAutoHeight: false,
  icon: null,
  input: {},
  inputClassName: '',
  insetIcon: null,
  label: '',
  message: '',
  meta: {},
  name: '',
  onClickIcon: () => {},
  onKeyUp: () => {},
  required: '',
};

export default TextArea;
