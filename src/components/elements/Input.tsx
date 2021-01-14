import React from 'react';
import classNames from 'classnames';
import FormLabel from './FormLabel';
import FormHint from './FormHint';

interface Props {
  className?: string;
  children?: React.ReactNode;
  label?: string;
  labelHidden?: boolean;
  type?:
    | 'textarea'
    | 'text'
    | 'email'
    | 'tel'
    | 'password'
    | 'number'
    | 'search'
    | 'color'
    | 'date'
    | 'time'
    | 'datetime-local';
  name?: string;
  status?: string;
  disabled?: boolean;
  value?: string;
  formGroup?: string;
  hasIcon?: string;
  size?: string;
  placeholder?: string;
  rows?: number;
  hint?: string;
  id?: string;
  onChange: ((event: React.ChangeEvent<HTMLTextAreaElement>) => void) &
    ((event: React.ChangeEvent<HTMLInputElement>) => void);
}

const Input: React.FC<Props> = ({
  className,
  id = '',
  children = null,
  label = '',
  labelHidden = false,
  type = 'text',
  name = undefined,
  status = '',
  disabled = false,
  value = undefined,
  formGroup = null,
  hasIcon = null,
  size = '',
  placeholder = '',
  rows = 3,
  hint = null,
  onChange,
  ...props
}) => {
  const wrapperClasses = classNames(
    formGroup &&
      formGroup !== '' &&
      (formGroup === 'desktop' ? 'form-group-desktop' : 'form-group'),
    hasIcon && hasIcon !== '' && 'has-icon-' + hasIcon
  );
  const classes = classNames(
    'form-input',
    size && `form-input-${size}`,
    status && `form-${status}`,
    className
  );
  const Component = type === 'textarea' ? 'textarea' : 'input';
  return (
    <React.Fragment>
      {label && (
        <FormLabel labelHidden={labelHidden} id={id}>
          {label}
        </FormLabel>
      )}
      <div className={wrapperClasses}>
        <Component
          {...props}
          type={type !== 'textarea' ? type : undefined}
          className={classes}
          name={name}
          disabled={disabled}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          rows={type === 'textarea' ? rows : undefined}
        />
        {children}
      </div>
      {hint && <FormHint status={status}>{hint}</FormHint>}
    </React.Fragment>
  );
};
// Input.defaultProps = defaultProps;
export default Input;
