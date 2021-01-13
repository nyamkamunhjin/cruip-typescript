import React, { useEffect, useState } from "react";
import classNames from "classnames";
interface Props {
  className: string;
  children: React.ReactNode;
  active: boolean;
  title: string;
}
const AccordionItem: React.FC<Props> = ({
  className,
  children = null,
  active = false,
  title = "",
  ...props
}) => {
  const [isActive, setIsActive] = useState(false);
  const content = React.createRef<HTMLDivElement>();
  useEffect(() => {
    active && openItem();
  }, []);
  const openItem = () => {
    if (content.current)
      content.current.style.maxHeight = content.current.scrollHeight + "px";
    setIsActive(true);
  };
  const closeItem = () => {
    console.log(content.current);
    if (content.current) content.current.style.maxHeight = "";
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
        <div className="accordion-icon" />
      </div>
      <div ref={content} className="accordion-content text-xs">
        <p>{children}</p>
      </div>
    </li>
  );
};
export default AccordionItem;
