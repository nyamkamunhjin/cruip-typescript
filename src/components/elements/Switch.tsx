import React from 'react';
import classNames from 'classnames';
interface Props {
  className?: string;
  children?: React.ReactNode;
  name?: string;
  value?: string;
  rightLabel?: string;
  disabled?: boolean;
  checked: boolean;
  onClick: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
}
// const defaultProps = {
//   children: null,
//   name: undefined,
//   value: undefined,
//   rightLabel: undefined,
//   disabled: false,
//   checked: undefined,
// };
const Switch: React.FC<Props> = ({
  className,
  children = null,
  name = undefined,
  value = undefined,
  rightLabel = undefined,
  disabled = false,
  checked = false,
  onClick,
  ...props
}) => {
  const classes = classNames('form-switch', className);
  return (
    <label className={classes}>
      <input
        {...props}
        onClick={onClick}
        type="checkbox"
        name={name}
        value={value}
        disabled={disabled}
        checked={checked}
      />
      <span className="form-switch-icon" />
      <span>{children}</span>
      {rightLabel && <span>{rightLabel}</span>}
    </label>
  );
};
export default Switch;
