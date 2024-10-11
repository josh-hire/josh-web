import { useState } from 'react';
import FeatherIcon from 'feather-icons-react';
import { Progress, Text, Popover, Box } from '@mantine/core';
import styles from './InputPassword.module.scss';
import clsx from 'clsx';

interface Meta {
  dirty?: boolean;
  error?: string;
  touched?: boolean;
  submitError?: string;
}

interface InputPasswordProps extends React.InputHTMLAttributes<HTMLInputElement> {
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

interface PasswordRequirementProps {
  meets: boolean;
  label: string;
}

function PasswordRequirement({ meets, label }: PasswordRequirementProps) {
  return (
    <Text
      color={meets ? 'teal' : 'red'}
      style={{ display: 'flex', alignItems: 'center' }}
      mt={7}
      size="sm">
      {meets ? <FeatherIcon icon="check" /> : <FeatherIcon icon="x" />} <Box ml={10}>{label}</Box>
    </Text>
  );
}

interface Requirement {
  re: RegExp;
  label: string;
}

const requirements: Requirement[] = [
  { re: /[0-9]/, label: 'Includes number' },
  { re: /[a-z]/, label: 'Includes lowercase letter' },
  { re: /[A-Z]/, label: 'Includes uppercase letter' },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Includes special symbol' },
];

function getStrength(password: string): number {
  let multiplier = password.length > 5 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
}

const InputPassword: React.FC<InputPasswordProps> = ({
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
  const [popoverOpened, setPopoverOpened] = useState(false);
  const [value, setValue] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement key={index} label={requirement.label} meets={requirement.re.test(value)} />
  ));

  const strength = getStrength(value);
  const color = strength === 100 ? 'teal' : strength > 50 ? 'yellow' : 'red';
  const { dirty, error, touched, submitError } = meta;

  return (
    <Popover opened={popoverOpened} position="bottom" width="target">
      <Popover.Target>
        <div
          onFocusCapture={() => setPopoverOpened(true)}
          onBlurCapture={() => setPopoverOpened(false)}
          className={clsx(
            className,
            Icon && styles['container-icon'],
            InsetIcon && styles['container-inset-icon'],
          )}
          {...props}>
          <div className={styles['input-box']}>
            <div className={styles.insetIcon}>
              {InsetIcon && (
                <span className={styles.insetIcon} onClick={onClickIcon}>
                  {InsetIcon}
                </span>
              )}
            </div>
            <label className={clsx(styles.label, disabled && styles.disabledLabel)}>
              {label}
              {required && <span className={styles.required}>*</span>}
            </label>
            <input
              autoComplete="off"
              {...input}
              type={showPassword ? 'text' : 'password'}
              className={clsx(
                inputClassName,
                styles.input,
                !!input.value && styles.empty,
                (!!error || !!submitError) && (dirty || touched) && styles.errorInput,
              )}
              onChange={(e) => {
                setValue(e.currentTarget.value);
                input.onChange(e);
              }}
              id={name}
              {...props}
              onKeyUp={onKeyUp}
            />
            <div onClick={() => setShowPassword(!showPassword)} className={styles.icon}>
              <FeatherIcon size={18} icon={showPassword ? 'eye' : 'eye-off'} />
            </div>
          </div>
        </div>
      </Popover.Target>
      <Popover.Dropdown>
        <Progress color={color} value={strength} size={5} mb="xs" />
        <PasswordRequirement label="Includes at least 6 characters" meets={value.length > 5} />
        {checks}
      </Popover.Dropdown>
    </Popover>
  );
};

export default InputPassword;
