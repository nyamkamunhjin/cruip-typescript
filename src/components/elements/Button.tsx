import React from 'react';
import classNames from 'classnames';
interface Props {
  className?: string;
  tag?: string;
  color?: string;
  size?: string;
  loading?: boolean;
  wide?: boolean;
  wideMobile?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({
  className,
  tag = 'button',
  color = '',
  size = '',
  loading = false,
  wide = false,
  wideMobile = false,
  disabled = false,
  onClick,
  ...props
}) => {
  const classes = classNames(
    'button',
    color && `button-${color}`,
    size && `button-${size}`,
    loading && 'is-loading',
    wide && 'button-block',
    wideMobile && 'button-wide-mobile',
    className
  );

  // const Component = tag;
  return (
    <button
      {...props}
      className={classes}
      disabled={disabled}
      onClick={onClick}
    />
  );
};
// Button.defaultProps = defaultProps;
export default Button;
