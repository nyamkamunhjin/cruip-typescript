import React from 'react';
import classNames from 'classnames';
interface Props {
  className?: string;
  children?: React.ReactNode;
  name?: string;
  value?: string;
  disabled?: boolean;
  checked: boolean;
  onClick: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
// const defaultProps = {
//   children: null,
//   name: undefined,
//   value: '',
//   disabled: false,
//   checked: false,
// };
const Radio: React.FC<Props> = ({
  className,
  children = null,
  name = undefined,
  value = '',
  disabled = false,
  checked = false,
  onChange,
  onClick,
  ...props
}) => {
  const classes = classNames('form-radio', className);
  return (
    <label className={classes}>
      <input
        {...props}
        onClick={onClick}
        onChange={onChange}
        type="radio"
        name={name}
        value={value}
        disabled={disabled}
        checked={checked}
      />
      {children}
    </label>
  );
};
// Radio.defaultProps = defaultProps;
export default Radio;
