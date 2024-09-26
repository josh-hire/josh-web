import clsx from 'clsx';
import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  badge?: string;
  badgeClassName?: string;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPos?: 'left' | 'right' | 'top' | 'bottom';
  label?: string;
  link?: boolean;
  loading?: boolean;
  loadingIcon?: React.ReactNode;
  nostyle?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
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
  type = 'button',
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
      label && styles[`td-button-icon-${iconPos}`],
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

export default Button;
