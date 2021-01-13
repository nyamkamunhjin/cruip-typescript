import React from 'react';
import classNames from 'classnames';
interface Props {
  className?: string;
  children?: React.ReactNode;
  labelHidden: boolean;
  id: string;
}

const FormLabel: React.FC<Props> = ({
  className,
  children,
  labelHidden,
  id,
  ...props
}) => {
  const classes = classNames(
    'form-label',
    labelHidden && 'screen-reader',
    className
  );
  return (
    <label {...props} className={classes} htmlFor={id}>
      {children}
    </label>
  );
};

export default FormLabel;
