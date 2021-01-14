import React from 'react';
import classNames from 'classnames';
// import { SectionProps } from '../../utils/SectionProps';
import Image from '../elements/Image';

import Client01Svg from './../../assets/images/clients-01.svg';
import Client02Svg from './../../assets/images/clients-02.svg';
import Client03Svg from './../../assets/images/clients-03.svg';
import Client04Svg from './../../assets/images/clients-04.svg';
import Client05Svg from './../../assets/images/clients-05.svg';

interface Props {
  className?: string;
  topOuterDivider?: boolean;
  bottomOuterDivider?: boolean;
  topDivider?: boolean;
  bottomDivider?: boolean;
  hasBgColor?: boolean;
  invertColor?: boolean;
}

const Clients: React.FC<Props> = ({
  className,
  topOuterDivider = false,
  bottomOuterDivider = false,
  topDivider = false,
  bottomDivider = false,
  hasBgColor = false,
  invertColor = false,
  ...props
}) => {
  const outerClasses = classNames(
    'clients section reveal-fade',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );
  const innerClasses = classNames(
    'clients-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );
  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <ul className="list-reset">
            <li className="reveal-rotate-from-left">
              <Image
                src={Client01Svg}
                alt="Client 01"
                width={124}
                height={24}
              />
            </li>
            <li className="reveal-rotate-from-left" data-reveal-delay="150">
              <Image src={Client02Svg} alt="Client 02" width={83} height={30} />
            </li>
            <li className="reveal-rotate-from-left" data-reveal-delay="300">
              <Image
                src={Client03Svg}
                alt="Client 03"
                width={125}
                height={39}
              />
            </li>
            <li className="reveal-rotate-from-left" data-reveal-delay="450">
              <Image
                alt="Client 04"
                src={Client04Svg}
                width={150}
                height={31}
              />
            </li>
            <li className="reveal-rotate-from-left" data-reveal-delay="600">
              <Image
                src={Client05Svg}
                alt="Client 05"
                width={113}
                height={30}
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
// Clients.defaultProps = defaultProps;
export default Clients;
