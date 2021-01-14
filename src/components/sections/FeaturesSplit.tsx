import React, { CSSProperties } from 'react';
import classNames from 'classnames';
// import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import SplitIconSvg from './../../assets/images/features-split-icon.svg';
import SplitImageSvg from './../../assets/images/features-split-image.svg';
import FeaturesSplitTop01 from './../../assets/images/features-split-top-01.png';
import FeaturesSplitTop02 from './../../assets/images/features-split-top-02.png';
import FeaturesSplitTop03 from './../../assets/images/features-split-top-03.png';
// const propTypes = {
//   ...SectionSplitProps.types
// };
// const defaultProps = {
//   ...SectionSplitProps.defaults
// };

interface Props {
  className?: string;
  topOuterDivider?: boolean;
  bottomOuterDivider?: boolean;
  topDivider?: boolean;
  bottomDivider?: boolean;
  hasBgColor?: boolean;
  invertColor?: boolean;
  invertMobile?: boolean;
  invertDesktop?: boolean;
  alignTop?: boolean;
  imageFill?: boolean;
}

const FeaturesSplit: React.FC<Props> = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
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
  //   invertMobile,
  //   invertDesktop,
  //   alignTop,
  //   imageFill,
  //   ...props
  // } = this.props;

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );
  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );
  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );
  const sectionHeader = {
    title: 'Making your work easier',
    paragraph:
      'Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.',
  };
  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader
            data={sectionHeader}
            className="center-content reveal-from-top"
          >
            <Image
              className="mb-24"
              src={SplitIconSvg}
              alt="Features split icon"
              width={80}
              height={80}
            />
          </SectionHeader>
          <div className={splitClasses}>
            <div className="split-item reveal-from-top">
              <div className="split-item-content center-content-mobile">
                <h3 className="mt-0 mb-16">Seamless collaboration</h3>
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
              </div>
              <div
                className={classNames(
                  'split-item-image center-content-mobile illustration-element-01',
                  imageFill && 'split-item-image-fill'
                )}
              >
                <Image
                  src={SplitImageSvg}
                  alt="Features split 01"
                  width={528}
                  height={396}
                />
                <div style={imgOddStyle}>
                  <Image
                    src={FeaturesSplitTop01}
                    alt="Features split top 01"
                    width={624}
                    height={512}
                  />
                </div>
              </div>
            </div>

            <div className="split-item reveal-from-top">
              <div className="split-item-content center-content-mobile">
                <h3 className="mt-0 mb-16">Seamless collaboration</h3>
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
              </div>
              <div
                className={classNames(
                  'split-item-image center-content-mobile illustration-element-02',
                  imageFill && 'split-item-image-fill'
                )}
              >
                <Image
                  src={SplitImageSvg}
                  alt="Features split 02"
                  width={528}
                  height={396}
                />
                <div style={imgEvenStyle}>
                  <Image
                    src={FeaturesSplitTop02}
                    alt="Features split top 02"
                    width={624}
                    height={512}
                  />
                </div>
              </div>
            </div>

            <div className="split-item reveal-from-top">
              <div className="split-item-content center-content-mobile">
                <h3 className="mt-0 mb-16">Seamless collaboration</h3>
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
              </div>
              <div
                className={classNames(
                  'split-item-image center-content-mobile illustration-element-01',
                  imageFill && 'split-item-image-fill'
                )}
              >
                <Image
                  src={SplitImageSvg}
                  alt="Features split 03"
                  width={528}
                  height={396}
                />
                <div style={imgOddStyle}>
                  <Image
                    src={FeaturesSplitTop03}
                    alt="Features split top 03"
                    width={624}
                    height={512}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const imgOddStyle: CSSProperties = {
  position: 'absolute',
  width: '118.18%',
  maxWidth: '118.18%',
  top: '-6.31%',
  left: '-16.48%',
};
const imgEvenStyle: CSSProperties = {
  position: 'absolute',
  width: '118.18%',
  maxWidth: '118.18%',
  top: '-6.31%',
  left: '-1.51%',
};
// FeaturesSplit.defaultProps = defaultProps;
export default FeaturesSplit;
