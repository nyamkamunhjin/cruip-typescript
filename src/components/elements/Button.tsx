import React from 'react';
import classNames from 'classnames';
interface Props {
  className?: string;
  tag?: 'button' | 'a';
  color?: string;
  size?: string;
  loading?: boolean;
  wide?: boolean;
  wideMobile?: boolean;
  onClick?:
    | (((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) &
        ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void))
    | undefined;
  disabled?: boolean;
  href?: string;
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
  href,
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

  const Component = tag;
  return (
    <Component
      {...props}
      href={href}
      className={classes}
      disabled={disabled}
      onClick={onClick}
    />
  );
};
// Button.defaultProps = defaultProps;
export default Button;
