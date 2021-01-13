import React from 'react';
import classNames from 'classnames';

interface Props {
  className: 'string';
  props: any;
}

const CarouselItem: React.FC<Props> = ({ className, ...props }) => {
  const classes = classNames('carousel-item', className);
  return <div {...props} className={classes} />;
};
export default CarouselItem;
