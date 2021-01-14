import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
// import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Switch from '../elements/Switch';
import Button from '../elements/Button';
// const propTypes = {
//   ...SectionTilesProps.types,
//   pricingSwitcher: PropTypes.bool,
//   pricingSlider: PropTypes.bool
// };
// const defaultProps = {
//   ...SectionTilesProps.defaults,
//   pricingSwitcher: false,
//   pricingSlider: false
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
  pricingSwitcher?: boolean;
  pricingSlider?: boolean;
}

interface IPriceOutput {
  [plan: string]: {
    0: string[];
    1: string[];
  };
}

type PricingState = {
  priceChangerValue: string;
  priceInput: {};
  priceOutput: {
    plan1: { 0: string[]; 1: string[] };
    plan2: { 0: string[]; 1: string[] };
    plan3: { 0: string[]; 1: string[] };
  };
};
const Pricing: React.FC<Props> = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  pricingSwitcher,
  pricingSlider,
  ...props
}) => {
  const [priceChangerValue, setPriceChangerValue] = useState<string>();
  const [priceInput, setPriceInput] = useState({});
  const [thumbSize, setThumbSize] = useState<number>(0);

  const [priceOutput, setPriceOutput] = useState<IPriceOutput>({
    plan1: {
      0: ['$', '35', 'monthly'],
      1: ['$', '27', 'annually'],
    },
    plan2: {
      0: ['$', '55', 'monthly'],
      1: ['$', '47', 'annually'],
    },
    plan3: {
      0: ['$', '75', 'monthly'],
      1: ['$', '67', 'annually'],
    },
  });
  // state = {
  //   priceChangerValue: '1',
  //   priceInput: {},
  //   priceOutput: {
  //     plan1: {
  //       0: ['$', '35', 'monthly'],
  //       1: ['$', '27', 'annually'],
  //     },
  //     plan2: {
  //       0: ['$', '55', 'monthly'],
  //       1: ['$', '47', 'annually'],
  //     },
  //     plan3: {
  //       0: ['$', '75', 'monthly'],
  //       1: ['$', '67', 'annually'],
  //     },
  //   },
  // };
  const slider = React.createRef<HTMLInputElement>();
  const sliderValue = React.createRef<HTMLDivElement>();

  useEffect(() => {
    if (pricingSlider) {
      if (slider && slider.current) {
        slider.current.setAttribute('min', '0');
        slider.current.setAttribute(
          'max',
          (Object.keys(priceInput).length - 1).toString()
        );
        // thumbSize = parseInt(
        //   window
        //     .getComputedStyle(sliderValue.current)
        //     .getPropertyValue('--thumb-size'),
        //   10
        // );
        setThumbSize(
          parseInt(
            window
              .getComputedStyle(sliderValue.current as Element)
              .getPropertyValue('--thumb-size'),
            10
          )
        );
      }
      handleSliderValuePosition(slider.current);
    }
  }, []);

  // componentDidMount() {
  //   if (props.pricingSlider) {
  //     slider.current.setAttribute('min', 0);
  //     this.slider.current.setAttribute(
  //       'max',
  //       Object.keys(priceInput).length - 1
  //     );
  //     this.thumbSize = parseInt(
  //       window
  //         .getComputedStyle(this.sliderValue.current)
  //         .getPropertyValue('--thumb-size'),
  //       10
  //     );
  //     this.handleSliderValuePosition(this.slider.current);
  //   }
  // }
  const handlePricingSwitch = (e: any) => {
    setPriceChangerValue(e.target.checked ? '1' : '0');
    // this.setState({ priceChangerValue: e.target.checked ? '1' : '0' });
  };
  const handlePricingSlide = (e: any) => {
    setPriceChangerValue(e.target.value);
    // this.setState({ priceChangerValue: e.target.value });
    handleSliderValuePosition(e.target);
  };
  const handleSliderValuePosition = (input: any) => {
    const multiplier = input.value / input.max;
    const thumbOffset = thumbSize * multiplier;

    if (sliderValue && sliderValue.current) {
      const priceInputOffset =
        (thumbSize - sliderValue.current.clientWidth) / 2;
      sliderValue.current.style.left =
        input.clientWidth * multiplier - thumbOffset + priceInputOffset + 'px';
    }
  };
  const getPricingData = (values: any, set: any) => {
    if (priceChangerValue) {
      return set !== undefined
        ? values[priceChangerValue][set]
        : values[priceChangerValue];
    }
  };
  // const {
  //   className,
  //   topOuterDivider,
  //   bottomOuterDivider,
  //   topDivider,
  //   bottomDivider,
  //   hasBgColor,
  //   invertColor,
  //   pushLeft,
  //   pricingSwitcher,
  //   pricingSlider,
  //   ...props
  // } = this.props;
  const outerClasses = classNames(
    'pricing section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );
  const innerClasses = classNames(
    'pricing-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );
  const tilesClasses = classNames('tiles-wrap', pushLeft && 'push-left');
  const sectionHeader = {
    title: 'Simple pricing',
    paragraph:
      'Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.',
  };
  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader
            data={sectionHeader}
            className="center-content invert-color"
          />
          {pricingSwitcher && (
            <div className="pricing-switcher center-content invert-color">
              <Switch
                checked={priceChangerValue === '1' ? true : false}
                onChange={handlePricingSwitch}
                rightLabel="Billed Annually"
              >
                Billed Monthly
              </Switch>
            </div>
          )}
          {pricingSlider && (
            <div className="pricing-slider center-content invert-color">
              <label className="form-slider">
                <span className="mb-16">How many users do you have?</span>
                <input
                  type="range"
                  ref={slider}
                  defaultValue={priceChangerValue}
                  onChange={handlePricingSlide}
                />
              </label>
              <div ref={sliderValue} className="pricing-slider-value">
                {getPricingData(priceInput, undefined)}
              </div>
            </div>
          )}
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-top">
              <div className="tiles-item-inner has-shadow">
                <div className="pricing-item-content">
                  <div className="pricing-item-header pb-16 mb-24">
                    <div className="pricing-item-price mb-4">
                      <span className="pricing-item-price-currency h2 text-color-mid">
                        {getPricingData(priceOutput.plan1, 0)}
                      </span>
                      <span className="pricing-item-price-amount h1">
                        {getPricingData(priceOutput.plan1, 1)}
                      </span>
                    </div>
                    <div className="text-color-low text-xs">
                      /month, billed {getPricingData(priceOutput.plan1, 2)}
                    </div>
                  </div>
                  <div className="pricing-item-features mb-40">
                    <div className="pricing-item-features-title fw-500 text-xs text-color-high mb-24">
                      What's included
                    </div>
                    <ul className="pricing-item-features-list list-reset text-xs mb-32">
                      <li className="is-checked">
                        Excepteur sint occaecat velit
                      </li>
                      <li className="is-checked">
                        Excepteur sint occaecat velit
                      </li>
                      <li className="is-checked">
                        Excepteur sint occaecat velit
                      </li>
                      <li>Excepteur sint occaecat velit</li>
                      <li>Excepteur sint occaecat velit</li>
                    </ul>
                  </div>
                </div>
                <div className="pricing-item-cta mb-8">
                  <Button tag="a" color="primary" wide href="http://cruip.com/">
                    Start free trial
                  </Button>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-top" data-reveal-delay="200">
              <div className="tiles-item-inner has-shadow">
                <div className="pricing-item-content">
                  <div className="pricing-item-header pb-16 mb-24">
                    <div className="pricing-item-price mb-4">
                      <span className="pricing-item-price-currency h2 text-color-mid">
                        {getPricingData(priceOutput.plan2, 0)}
                      </span>
                      <span className="pricing-item-price-amount h1">
                        {getPricingData(priceOutput.plan2, 1)}
                      </span>
                    </div>
                    <div className="text-color-low text-xs">
                      /month, billed {getPricingData(priceOutput.plan2, 2)}
                    </div>
                  </div>
                  <div className="pricing-item-features mb-40">
                    <div className="pricing-item-features-title fw-500 text-xs text-color-high mb-24">
                      What's included
                    </div>
                    <ul className="pricing-item-features-list list-reset text-xs mb-32">
                      <li className="is-checked">
                        Excepteur sint occaecat velit
                      </li>
                      <li className="is-checked">
                        Excepteur sint occaecat velit
                      </li>
                      <li className="is-checked">
                        Excepteur sint occaecat velit
                      </li>
                      <li className="is-checked">
                        Excepteur sint occaecat velit
                      </li>
                      <li>Excepteur sint occaecat velit</li>
                    </ul>
                  </div>
                </div>
                <div className="pricing-item-cta mb-8">
                  <Button tag="a" color="primary" wide href="http://cruip.com/">
                    Start free trial
                  </Button>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-top" data-reveal-delay="200">
              <div className="tiles-item-inner has-shadow">
                <div className="pricing-item-content">
                  <div className="pricing-item-header pb-16 mb-24">
                    <div className="pricing-item-price mb-4">
                      <span className="pricing-item-price-currency h2 text-color-mid">
                        {getPricingData(priceOutput.plan3, 0)}
                      </span>
                      <span className="pricing-item-price-amount h1">
                        {getPricingData(priceOutput.plan3, 1)}
                      </span>
                    </div>
                    <div className="text-color-low text-xs">
                      /month, billed {getPricingData(priceOutput.plan3, 2)}
                    </div>
                  </div>
                  <div className="pricing-item-features mb-40">
                    <div className="pricing-item-features-title fw-500 text-xs text-color-high mb-24">
                      What's included
                    </div>
                    <ul className="pricing-item-features-list list-reset text-xs mb-32">
                      <li className="is-checked">
                        Excepteur sint occaecat velit
                      </li>
                      <li className="is-checked">
                        Excepteur sint occaecat velit
                      </li>
                      <li className="is-checked">
                        Excepteur sint occaecat velit
                      </li>
                      <li className="is-checked">
                        Excepteur sint occaecat velit
                      </li>
                      <li className="is-checked">
                        Excepteur sint occaecat velit
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="pricing-item-cta mb-8">
                  <Button tag="a" color="primary" wide href="http://cruip.com/">
                    Start free trial
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
// Pricing.defaultProps = defaultProps;
export default Pricing;
