import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

const AccordionItem = ({
  className,
  children = null,
  active = false,
  title = "",
  ...props
}) => {
  const [isActive, setIsActive] = useState(false);
  const content = React.createRef();

  useEffect(() => {
    active && openItem();
  }, []);

  const openItem = () => {
    content.current.style.maxHeight = content.current.scrollHeight + "px";
    setIsActive(true);
  };

  const closeItem = () => {
    content.current.style.maxHeight = null;
    setIsActive(false);
  };

  // const { className, children, active, title, ...props } = props;

  const classes = classNames(isActive && "is-active", className);

  return (
    <li {...props} className={classes}>
      <div
        className="accordion-header text-sm"
        onClick={isActive ? closeItem : openItem}
      >
        <span className="h6 m-0">{title}</span>
        <div className="accordion-icon"></div>
      </div>
      <div ref={content} className="accordion-content text-xs">
        <p>{children}</p>
      </div>
    </li>
  );
};

AccordionItem.propTypes = propTypes;

export default AccordionItem;
