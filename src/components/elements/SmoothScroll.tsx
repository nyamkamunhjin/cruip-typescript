import React from 'react';
import classNames from 'classnames';
interface Props {
  className?: string;
  children: React.ReactNode;
  to: string;
  duration: number;
  onLinkClick(): any;
}
const SmoothScroll: React.FC<Props> = ({
  className,
  children,
  to,
  duration,
  onLinkClick,
  ...props
}) => {
  const classes = classNames(className);

  const easeInOutQuad = (t: number) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  const scrollToEl = (
    startTime: number,
    currentTime: number,
    duration: number,
    scrollEndElemTop: any,
    startScrollOffset: number
  ) => {
    const runtime = currentTime - startTime;
    let progress = runtime / duration;
    progress = Math.min(progress, 1);
    const ease = easeInOutQuad(progress);
    window.scroll(0, startScrollOffset + scrollEndElemTop * ease);
    if (runtime < duration) {
      window.requestAnimationFrame((timestamp) => {
        const currentTime = timestamp || new Date().getTime();
        scrollToEl(
          startTime,
          currentTime,
          duration,
          scrollEndElemTop,
          startScrollOffset
        );
      });
    }
  };
  const smoothScroll = (event: React.MouseEvent) => {
    event.preventDefault();
    const targetId = to;
    const target = document.getElementById(targetId);
    const duration1 = duration || 1000;
    if (!target) return;
    onLinkClick && onLinkClick();
    window.requestAnimationFrame((timestamp) => {
      const stamp = timestamp || new Date().getTime();
      const start = stamp;
      const startScrollOffset = window.pageYOffset;
      const scrollEndElemTop = target.getBoundingClientRect().top;
      scrollToEl(start, stamp, duration1, scrollEndElemTop, startScrollOffset);
    });
  };

  return (
    <a {...props} className={classes} href={'#' + to} onClick={smoothScroll}>
      {children}
    </a>
  );
};
export default SmoothScroll;
