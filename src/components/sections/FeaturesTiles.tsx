import React from 'react';
import classNames from 'classnames';
// import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import FeatureTileIcon01 from './../../assets/images/feature-tile-icon-01.svg';
import FeatureTileIcon02 from './../../assets/images/feature-tile-icon-02.svg';
import FeatureTileIcon03 from './../../assets/images/feature-tile-icon-03.svg';
import FeatureTileIcon04 from './../../assets/images/feature-tile-icon-04.svg';
import FeatureTileIcon05 from './../../assets/images/feature-tile-icon-05.svg';
import FeatureTileIcon06 from './../../assets/images/feature-tile-icon-06.svg';
// const propTypes = {
//   ...SectionTilesProps.types,
// };
// const defaultProps = {
//   ...SectionTilesProps.defaults,
// };

interface Props {
  className?: string;
  topOuterDivider?: boolean;
  bottomOuterDivider?: boolean;
  topDivider?: boolean;
  bottomDivider?: boolean;
  hasBgColor?: boolean;
  invertColor?: boolean;
  pushLeft?: boolean;
}

const FeaturesTiles: React.FC<Props> = ({
  className,
  topOuterDivider = false,
  bottomOuterDivider = false,
  topDivider = false,
  bottomDivider = false,
  hasBgColor = false,
  invertColor = false,
  pushLeft = false,
  ...props
}) => {
  // const {
  //   className,
  //   topOuterDivider,
  //   bottomOuterDivider,
  //   topDivider,
  //   bottomDivider,
  //   hasBgColor,
  //   invertColor,
  //   pushLeft,
  //   ...props
  // } = this.props;
  const outerClasses = classNames(
    'features-tiles section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );
  const innerClasses = classNames(
    'features-tiles-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );
  const tilesClasses = classNames('tiles-wrap', pushLeft && 'push-left');
  const sectionHeader = {
    title: 'Optimized for fast answers',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  };
  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader
            data={sectionHeader}
            className="center-content"
            width={72}
            height={72}
          />
          <div className={tilesClasses}>
            <div className="tiles-item">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div
                    className="features-tiles-item-image mb-16 reveal-from-top"
                    data-reveal-container=".tiles-item"
                  >
                    <Image
                      src={FeatureTileIcon01}
                      alt="Features tile icon 01"
                      width={72}
                      height={72}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4
                    className="mt-0 mb-8 reveal-from-top"
                    data-reveal-container=".tiles-item"
                    data-reveal-delay="100"
                  >
                    High-Quality Service
                  </h4>
                  <p
                    className="m-0 text-sm reveal-from-top"
                    data-reveal-container=".tiles-item"
                    data-reveal-delay="200"
                  >
                    A pseudo-Latin text used in web design, layout, and printing
                    in place of things to emphasise design for previewing
                    layouts.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div
                    className="features-tiles-item-image mb-16 reveal-from-top"
                    data-reveal-container=".tiles-item"
                    data-reveal-delay="100"
                  >
                    <Image
                      src={FeatureTileIcon02}
                      alt="Features tile icon 02"
                      width={72}
                      height={72}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4
                    className="mt-0 mb-8 reveal-from-top"
                    data-reveal-container=".tiles-item"
                    data-reveal-delay="200"
                  >
                    High-Quality Service
                  </h4>
                  <p
                    className="m-0 text-sm reveal-from-top"
                    data-reveal-container=".tiles-item"
                    data-reveal-delay="300"
                  >
                    A pseudo-Latin text used in web design, layout, and printing
                    in place of things to emphasise design for previewing
                    layouts.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div
                    className="features-tiles-item-image mb-16 reveal-from-top"
                    data-reveal-container=".tiles-item"
                    data-reveal-delay="200"
                  >
                    <Image
                      src={FeatureTileIcon03}
                      alt="Features tile icon 03"
                      width={72}
                      height={72}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4
                    className="mt-0 mb-8 reveal-from-top"
                    data-reveal-container=".tiles-item"
                    data-reveal-delay="300"
                  >
                    High-Quality Service
                  </h4>
                  <p
                    className="m-0 text-sm reveal-from-top"
                    data-reveal-container=".tiles-item"
                    data-reveal-delay="400"
                  >
                    A pseudo-Latin text used in web design, layout, and printing
                    in place of things to emphasise design for previewing
                    layouts.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div
                    className="features-tiles-item-image mb-16 reveal-from-top"
                    data-reveal-container=".tiles-item"
                  >
                    <Image
                      src={FeatureTileIcon04}
                      alt="Features tile icon 04"
                      width={72}
                      height={72}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4
                    className="mt-0 mb-8 reveal-from-top"
                    data-reveal-container=".tiles-item"
                    data-reveal-delay="100"
                  >
                    High-Quality Service
                  </h4>
                  <p
                    className="m-0 text-sm reveal-from-top"
                    data-reveal-container=".tiles-item"
                    data-reveal-delay="200"
                  >
                    A pseudo-Latin text used in web design, layout, and printing
                    in place of things to emphasise design for previewing
                    layouts.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div
                    className="features-tiles-item-image mb-16 reveal-from-top"
                    data-reveal-container=".tiles-item"
                    data-reveal-delay="100"
                  >
                    <Image
                      src={FeatureTileIcon05}
                      alt="Features tile icon 05"
                      width={72}
                      height={72}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4
                    className="mt-0 mb-8 reveal-from-top"
                    data-reveal-container=".tiles-item"
                    data-reveal-delay="200"
                  >
                    High-Quality Service
                  </h4>
                  <p
                    className="m-0 text-sm reveal-from-top"
                    data-reveal-container=".tiles-item"
                    data-reveal-delay="300"
                  >
                    A pseudo-Latin text used in web design, layout, and printing
                    in place of things to emphasise design for previewing
                    layouts.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div
                    className="features-tiles-item-image mb-16 reveal-from-top"
                    data-reveal-container=".tiles-item"
                    data-reveal-delay="200"
                  >
                    <Image
                      src={FeatureTileIcon06}
                      alt="Features tile icon 06"
                      width={72}
                      height={72}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4
                    className="mt-0 mb-8 reveal-from-top"
                    data-reveal-container=".tiles-item"
                    data-reveal-delay="300"
                  >
                    High-Quality Service
                  </h4>
                  <p
                    className="m-0 text-sm reveal-from-top"
                    data-reveal-container=".tiles-item"
                    data-reveal-delay="400"
                  >
                    A pseudo-Latin text used in web design, layout, and printing
                    in place of things to emphasise design for previewing
                    layouts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
// FeaturesTiles.defaultProps = defaultProps;
export default FeaturesTiles;
