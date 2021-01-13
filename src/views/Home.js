import React from 'react';
import HeroSplit from '../components/sections/HeroSplit';
import Clients from '../components/sections/Clients';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import Pricing from '../components/sections/Pricing';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HeroSplit invertMobile imageFill className="illustration-section-01" />
        <Clients topDivider bottomDivider />
        <FeaturesSplit bottomDivider imageFill />
        <FeaturesTiles />
        <Pricing pricingSwitcher hasBgColor className="illustration-section-07" />
        <Testimonial className="illustration-section-05" />
        <Cta topDivider bottomDivider split className="reveal-from-top" />
      </React.Fragment>
    );
  }
}

export default Home;