import React from 'react';
import classNames from 'classnames';
interface Props {
  className?: string;
  children: React.ReactNode;
  status: string;
}

const FormHint: React.FC<Props> = ({
  className,
  children = null,
  status = false,
  ...props
}) => {
  const classes = classNames(
    'form-hint',
    status && `text-color-${status}`,
    className
  );
  return (
    <div {...props} className={classes}>
      {children}
    </div>
  );
};
export default FormHint;
