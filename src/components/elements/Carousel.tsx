import React, { Children, useEffect, useState } from 'react';
import classNames from 'classnames';

const swipeThreshold = 40;

interface Props {
  className: string;
  children?: React.ReactNode;
  active: number;
  autorotate: boolean;
  autorotateTiming: number;
}

const Carousel: React.FC<Props> = ({
  className,
  children = null,
  active = null,
  autorotate = false,
  autorotateTiming = 7000,
  ...props
}) => {
  // console.log("refreshing");
  // alert('refreshing');
  const [items, setItems] = useState<any[]>([]);
  const [activeItem, setActiveItem] = useState(active || 0);
  const [autorotateInterval, setAutorotateInterval] = useState(
    null as NodeJS.Timeout | null
  );
  const [touchStartX, setTouchStartX] = useState(0);

  const carousel = React.createRef<HTMLDivElement>();

  useEffect(() => {
    console.log('useEffect');
    setItems([...Array.prototype.slice.call(carousel.current?.childNodes)]);
    heightFix();
    playAutorotate();
    window.addEventListener('resize', heightFix);

    return () => {
      window.removeEventListener('resize', heightFix);
      stopAutorotate();
      if (autorotateInterval) {
        clearInterval(autorotateInterval);
        setAutorotateInterval(null);
      }
    };
  }, []);

  const goTo = (n: number, stop = false) => {
    setActiveItem((prevActiveItem) => {
      // console.log('setState', { prevActiveItem, n });
      return n;
    });
    stop && stopAutorotate();
    // stop && console.log('goto', { nextItem: n, stop });

    // this.setState({ activeItem: n });
  };

  const goToNext = (stop = false) => {
    // let nextItem: number;
    if (children && Array.isArray(children)) {
      let nextItem = activeItem + 1 >= children?.length ? 0 : activeItem + 1;
      // console.log('gotoNext', { stop: stop, nextItem });
      goTo(nextItem, stop);
    }
  };

  const goToPrev = (stop = false) => {
    if (children && Array.isArray(children)) {
      let prevItem = activeItem - 1 < 0 ? children?.length - 1 : activeItem - 1;
      goTo(prevItem, stop);
    }
  };

  const playAutorotate = () => {
    if (!autorotateInterval && autorotate) {
      setAutorotateInterval(
        setInterval(() => {
          // console.log('playAutorotate', activeItem, '-', children.length);
          goToNext();
        }, autorotateTiming)
      );
    }
  };

  const stopAutorotate = () => {
    autorotateInterval && clearInterval(autorotateInterval);
    setAutorotateInterval(null);
    // setState({ autorotateInterval: null });
  };

  const heightFix = () => {
    let taller = 0;
    let height;
    items.map((item) => {
      item.classList.add('is-loading');
      height = item.offsetHeight;
      item.classList.remove('is-loading');
      return (taller = height > taller ? height : taller);
    });
    if (carousel.current) carousel.current.style.minHeight = `${taller} px`;
    // carousel.current?.style.minHeight = `${taller} px`;
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.changedTouches[0].screenX);
    // setState({ touchStartX: e.changedTouches[0].screenX });
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    // If swipe is under the threshold, don't do anything.
    if (Math.abs(e.changedTouches[0].screenX - touchStartX) < swipeThreshold)
      return;
    e.changedTouches[0].screenX < touchStartX ? goToNext(true) : goToPrev(true);
  };

  const classes = classNames('carousel-items', className);

  return (
    <React.Fragment>
      <div
        {...props}
        ref={carousel}
        className={classes}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {Children.map(children, (child, n) => {
          if (child) {
            return React.cloneElement(child as React.ReactElement<any>, {
              key: n,
              className: classNames(
                child.props.className,
                activeItem === n && 'is-active'
              ),
            });
          }
        })}
      </div>
      <div className="carousel-bullets">
        {Children.map(children, (child, n) => (
          <button
            key={n}
            className={classNames(
              'carousel-bullet',
              activeItem === n && 'is-active'
            )}
            onClick={() => goTo(n, true)}
          ></button>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Carousel;
