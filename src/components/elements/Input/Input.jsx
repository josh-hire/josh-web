/* eslint-disable sonarjs/cognitive-complexity */
import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

const Input = ({
  className,
  disabled,
  label,
  name,
  meta,
  icon: Icon,
  inputClassName,
  input,
  required,
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

Input.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  errorAutoHeight: PropTypes.bool,
  icon: PropTypes.node,
  input: PropTypes.node,
  inputClassName: PropTypes.string,
  insetIcon: PropTypes.node,
  label: PropTypes.string,
  meta: PropTypes.object,
  name: PropTypes.string,
  onClickIcon: PropTypes.func,
  onKeyUp: PropTypes.func,
  required: PropTypes.bool,
};

Input.defaultProps = {
  className: '',
  disabled: false,
  errorAutoHeight: false,
  icon: null,
  input: {},
  inputClassName: '',
  insetIcon: null,
  label: '',
  meta: {},
  name: '',
  onClickIcon: () => {},
  onKeyUp: () => {},
  required: '',
};

export default Input;
