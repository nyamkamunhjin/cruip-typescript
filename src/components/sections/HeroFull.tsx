import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
// const propTypes = {
//   ...SectionProps.types
// };
// const defaultProps = {
//   ...SectionProps.defaults
// };
// type HeroFullState = {
//   videoModalActive: boolean
// };

interface Props {
  className?: string;
  topOuterDivider?: boolean;
  bottomOuterDivider?: boolean;
  topDivider?: boolean;
  bottomDivider?: boolean;
  hasBgColor?: boolean;
  invertColor?: boolean;
}

const HeroFull: React.FC<Props> = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [videoModalActive, setVideoModalActive] = useState<boolean>(false);
  // state = {
  //   videoModalActive: false,
  // };
  const openModal = (e: any) => {
    e.preventDefault();
    setVideoModalActive(true);
    // this.setState({ videoModalActive: true });
  };
  const closeModal = (e: any) => {
    e.preventDefault();
    setVideoModalActive(false);

    // this.setState({ videoModalActive: false });
  };

  // const {
  //   className,
  //   topOuterDivider,
  //   bottomOuterDivider,
  //   topDivider,
  //   bottomDivider,
  //   hasBgColor,
  //   invertColor,
  //   ...props
  // } = this.props;
  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );
  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );
  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <div className="hero-content">
            <div className="container-xs">
              <h1 className="mt-0 reveal-from-top">
                Engage Your Visitors with a beautiful template
              </h1>
            </div>
          </div>
          <div
            className="hero-figure illustration-element-09 reveal-from-top"
            data-reveal-delay="200"
          >
            <a
              data-video="https://player.vimeo.com/video/174002812"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require('./../../assets/images/video-placeholder.svg')}
                alt="Video"
                width={712}
                height={400}
              />
            </a>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/174002812"
            videoTag="iframe"
          />
        </div>
      </div>
    </section>
  );
};
// HeroFull.defaultProps = defaultProps;
export default HeroFull;
