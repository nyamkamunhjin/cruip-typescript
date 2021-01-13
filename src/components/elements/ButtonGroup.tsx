import React from 'react';
import classNames from 'classnames';

interface Props {
  className: string;
  props: any;
}
const ButtonGroup: React.FC<Props> = ({ className, ...props }) => {
  const classes = classNames('button-group', className);
  return <div {...props} className={classes} />;
};
export default ButtonGroup;
