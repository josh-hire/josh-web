import styles from './styles.module.scss';
import PropTypes from 'prop-types';
import { Input, InputBase } from '@mantine/core';
import { Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

const WrapperController = ({
  name,
  component: Component,
  control,
  label,
  rules,
  placeholder,
  isOptional,
  leftIcon,
  rightIcon,
  isLoading,
  desc,
  type,
  visible = true,
  onChange,
  defaultError,
  ...rest
}) => {
  if (!visible) {
    return null;
  }

  return (
    <Controller
      control={control}
      defaultValue=""
      id="wrapController"
      name={name}
      render={({ field, formState: { errors }, fieldState: { error } }) => (
        <Input.Wrapper>
          {label && (<Input.Label className={styles.label} mb={2} mt="md">
            {label} {isOptional && <span className={styles.optional}>(Optional)</span>}
          </Input.Label>)}
          <Component
            disabled={isLoading}
            icon={leftIcon}
            placeholder={placeholder}
            rightSection={
              <div className={styles.iconRight}>
                {rightIcon}
              </div>
            }
            rightSectionWidth={rightIcon && field.value ? 64 : 36}
            size="md"
            type={type}
            {...field}
            classNames={{
              input: !!error && styles.errorWrapper,
            }}
            onChange={(e) => (onChange ? field.onChange(onChange(e)) : field.onChange(e))}
            {...rest}
          />
          <Input.Description className={desc}>{desc}</Input.Description>
          {defaultError && (
            <ErrorMessage
              errors={errors}
              name={name}
              render={({ message }) => (
                <Input.Error className={styles.error}>{message}</Input.Error>
              )}
            />
          )}
        </Input.Wrapper>
      )}
      rules={rules}
    />
  );
};

WrapperController.displayName = 'WrapperController';

WrapperController.defaultProps = {
  component: InputBase,
  defaultError: true,
  desc: '',
  isLoading: false,
  isOptional: false,
  label: '',
  leftIcon: null,
  onChange: (e) => e,
  placeholder: '',
  rightIcon: null,
  rules: {},
  type: 'text',
  visible: true,
};

WrapperController.propTypes = {
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.object, PropTypes.func]),
  control: PropTypes.object.isRequired,
  defaultError: PropTypes.bool,
  desc: PropTypes.string,
  isLoading: PropTypes.bool,
  isOptional: PropTypes.bool,
  label: PropTypes.string,
  leftIcon: PropTypes.node,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  rightIcon: PropTypes.node,
  rules: PropTypes.object,
  type: PropTypes.string,
  visible: PropTypes.bool,
};

export default WrapperController;
