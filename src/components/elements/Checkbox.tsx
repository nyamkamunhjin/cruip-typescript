import React from 'react';
import classNames from 'classnames';
interface Props {
  className: string;
  children: React.ReactNode;
  name: string;
  value: string;
  disabled: boolean;
  checked: boolean;
}
// const defaultProps = {
//   children: null,
//   name: undefined,
//   value: undefined,
//   disabled: false,
//   checked: undefined,
// };

const Checkbox: React.FC<Props> = ({
  className,
  children = null,
  name = undefined,
  value = undefined,
  disabled = false,
  checked = undefined,
  ...props
}) => {
  const classes = classNames('form-checkbox', className);
  return (
    <label className={classes}>
      <input
        {...props}
        type="checkbox"
        name={name}
        value={value}
        disabled={disabled}
        checked={checked}
      />
      {children}
    </label>
  );
};

export default Checkbox;
