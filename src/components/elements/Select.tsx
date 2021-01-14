import React from 'react';
import classNames from 'classnames';
import FormLabel from './FormLabel';
import FormHint from './FormHint';

interface Props {
  className?: string;
  children?: React.ReactNode;
  label?: string;
  labelHidden?: boolean;
  name?: string;
  status?: string;
  disabled?: boolean;
  value?: string | number;
  size?: string;
  id?: any;
  placeholder?: string;
  hint?: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<Props> = ({
  className,
  children = null,
  label = '',
  labelHidden = false,
  name = undefined,
  status = '',
  disabled = false,
  value = undefined,
  size = '',
  id = '',
  placeholder = null,
  hint = null,
  onChange,
  ...props
}) => {
  const classes = classNames(
    'form-select',
    size && `form-select-${size}`,
    status && `form-${status}`,
    className
  );
  return (
    <React.Fragment>
      {label && (
        <FormLabel labelHidden={labelHidden} id={id}>
          {label}
        </FormLabel>
      )}
      <select
        {...props}
        onChange={onChange}
        className={classes}
        name={name}
        disabled={disabled}
        value={value}
      >
        {placeholder && (
          <option hidden value="">
            {placeholder}
          </option>
        )}
        {children}
      </select>
      {hint && <FormHint status={status}>{hint}</FormHint>}
    </React.Fragment>
  );
};
export default Select;
