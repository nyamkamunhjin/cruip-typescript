import React from 'react';
import classNames from 'classnames';
interface Props {
  className?: string;
  children?: React.ReactNode;
  title: string;
}
// const defaultProps = {
//   children: null,
//   title: '',
// };
const TimelineItem: React.FC<Props> = ({
  className,
  children = null,
  title = '',
  ...props
}) => {
  const classes = classNames('timeline-item', className);
  return (
    <div {...props} className={classes}>
      <div className="timeline-item-inner">
        <div className="timeline-item-header tt-u mb-4 reveal-fade">
          {title}
        </div>
        <div className="timeline-item-content h4 m-0 reveal-from-side">
          {children}
        </div>
      </div>
    </div>
  );
};
// TimelineItem.defaultProps = defaultProps;
export default TimelineItem;
