import React from 'react';
import classNames from 'classnames';
interface Props {
  className?: string;
  children?: React.ReactNode;
}

const Timeline: React.FC<Props> = ({ className, children, ...props }) => {
  const classes = classNames('timeline', className);
  return (
    <div {...props} className={classes}>
      <div className="timeline-wrap">{children}</div>
    </div>
  );
};
export default Timeline;
