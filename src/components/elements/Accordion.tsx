import React from "react";
import classNames from "classnames";

interface Props {
  className?: string;
  children?: any[];
  // props: any;
}

const Accordion: React.FC<Props> = ({ className, ...props }) => {
  const classes = classNames("accordion list-reset mb-0", className);
  return <ul {...props} className={classes} />;
};
export default Accordion;
