import React from 'react';
import classNames from 'classnames';
// import { SectionProps } from '../../utils/SectionProps';
import Button from '../elements/Button';

interface Props {
  className?: string;
  topOuterDivider?: boolean;
  bottomOuterDivider?: boolean;
  topDivider?: boolean;
  bottomDivider?: boolean;
  hasBgColor?: boolean;
  invertColor?: boolean;
  split?: boolean;
}

const Cta: React.FC<Props> = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
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
  //   split,
  //   ...props
  // } = this.props;
  const outerClasses = classNames(
    'cta section center-content-mobile',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );
  const innerClasses = classNames(
    'cta-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  );
  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <div className="cta-slogan">
            <h3 className="m-0">Nisi porta lorem mollis aliquam ut.</h3>
          </div>
          <div className="cta-action">
            <Button
              tag="a"
              color="primary"
              wideMobile
              href="#"
              onClick={undefined}
            >
              Pricing and plans
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Cta;
