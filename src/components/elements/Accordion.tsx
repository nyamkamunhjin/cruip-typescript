import React from "react";
import classNames from "classnames";

interface Props {
  className: "string";
  props: any;
}

const Accordion = ({ className, ...props }: Props) => {
  const classes = classNames("accordion list-reset mb-0", className);
  return <ul {...props} className={classes} />;
};
export default Accordion;
