import React, { useEffect } from 'react';
import classNames from 'classnames';
// import { SectionSplitProps } from '../../utils/SectionProps';
import Button from '../elements/Button';
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
const HeroSplit: React.FC<Props> = ({
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
  useEffect(() => {
    // window.onresize = function () {}.bind(this);
  }, []);
  // componentDidMount() {
  //   // this is only to handle inline style on window resize
  //   window.onresize = function() {
  //     this.forceUpdate();
  //   }.bind(this);
  // }
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
    'hero section',
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
  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );
  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <div className={splitClasses}>
            <div className="split-item" style={inlineStyle()}>
              <div className="hero-content split-item-content center-content-mobile">
                <h1
                  className="mt-0 mb-16 reveal-from-top"
                  data-reveal-delay="150"
                >
                  Landing template for startups
                </h1>
                <p
                  className="mt-0 mb-32 reveal-from-top"
                  data-reveal-delay="300"
                >
                  Our landing page template works on all devices, so you only
                  have to set it up once, and get beautiful results forever.
                </p>
                <div className="reveal-from-top" data-reveal-delay="450">
                  <Button
                    tag="a"
                    color="primary"
                    href="https://cruip.com/"
                    wideMobile
                  >
                    Pricing and plans
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
// inline style
const inlineCss = {
  alignItems: 'flex-start',
  minHeight: '492px',
};
const inlineStyle = function () {
  if (window.innerWidth > 641) {
    return inlineCss;
  }
};
// HeroSplit.defaultProps = defaultProps;
export default HeroSplit;
