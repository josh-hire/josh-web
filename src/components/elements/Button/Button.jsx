import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({
  className,
  link,
  label,
  icon,
  iconPos = 'left',
  badge,
  badgeClassName,
  disabled,
  loading,
  loadingIcon,
  children,
  nostyle,
  type,
  ...rest
}) => {
  const _className = clsx(
    className,
    !nostyle && styles['td-button'],
    link && styles['td-button-link'],
    (icon || (loading && loadingIcon)) && !label && styles['td-button-icon-only'],
    (iconPos === 'top' || iconPos === 'bottom') && label && styles['td-button-vertical'],
    disabled && styles['td-disabled'],
    loading && styles['td-button-loading'],
    loading && !icon && label && styles['td-button-loading-label-only'],
    loading && loadingIcon && label && styles[`td-button-loading-${iconPos}`],
  );

  const renderIcon = () => {
    const currentIcon = loading ? loadingIcon : icon;
    const classNameIcon = clsx(
      styles['td-button-icon'],
      loading && styles['td-button-loading-icon'],
      label && styles[`td-button-icon-${iconPos}"`],
    );
    return <span className={classNameIcon}>{currentIcon}</span>;
  };

  const renderBadge = () => {
    if (badge) {
      return <span className={clsx(styles['td-badge'], badgeClassName)}>{badge}</span>;
    }
    return null;
  };

  return (
    <button
      className={_className}
      disabled={disabled}
      type={type}
      {...rest}
    >
      {renderIcon()}
      {children}
      {renderBadge()}
    </button>
  );
};

Button.propTypes={
  badge: PropTypes.string,
  badgeClassName: PropTypes.string,
  buttonProps: PropTypes.object,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.node,
  iconPos: PropTypes.string,
  label: PropTypes.string,
  link: PropTypes.bool,
  loading: PropTypes.bool,
  loadingIcon: PropTypes.node,
  nostyle: PropTypes.bool,
  tooltip: PropTypes.string,
  tooltipOptions: PropTypes.object,
  type:PropTypes.string,
};

Button.defaultProps = {
  badge: '',
  badgeClassName: '',
  buttonProps: {},
  children: null,
  className: '',
  disabled: false,
  icon: null,
  iconPos: null,
  label: '',
  link: false,
  loading: false,
  loadingIcon: null,
  nostyle: false,
  tooltip: '',
  tooltipOptions: {},
  type:'',
};

export default Button;
