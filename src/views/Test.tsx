import React, { useState } from 'react';
import Accordion from '../components/elements/Accordion';
import AccordionItem from '../components/elements/AccordionItem';
import Button from '../components/elements/Button';
import Carousel from '../components/elements/Carousel';
import CarouselItem from '../components/elements/CarouselItem';
import Checkbox from '../components/elements/Checkbox';
import Image from '../components/elements/Image';
import Input from '../components/elements/Input';
import Modal from '../components/elements/Modal';
import Radio from '../components/elements/Radio';
import Select from '../components/elements/Select';
import Switch from '../components/elements/Switch';
import Timeline from '../components/elements/Timeline';
import TimelineItem from '../components/elements/TimelineItem';
import Clients from '../components/sections/Clients';

import TestPic from '../assets/images/clients-01.svg';
import Cta from '../components/sections/Cta';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import GenericSection from '../components/sections/GenericSection';

import PlaceHolderSvg from './../assets/images/image-placeholder.svg';
import HeroFull from '../components/sections/HeroFull';
import HeroSplit from '../components/sections/HeroSplit';
import News from '../components/sections/News';
import Pricing from '../components/sections/Pricing';
import Roadmap from '../components/sections/Roadmap';
import Testimonial from '../components/sections/Testimonial';

const Test = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [radioState, setRadioState] = useState<boolean>(false);
  const [switchChecked, setSwitchChecked] = useState<boolean>(false);
  const [input, setInput] = useState<string>('');

  const openModal = (e: any) => {
    e.preventDefault();
    setShowModal(true);
  };
  const closeModal = (e: any) => {
    e.preventDefault();
    setShowModal(false);
  };

  const toggleRadio = () => {
    setRadioState(!radioState);
  };

  return (
    <React.Fragment>
      <Accordion>
        <AccordionItem title="Nisi porta lorem mollis aliquam ut." active>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </AccordionItem>
        <AccordionItem title="Nisi porta lorem mollis aliquam ut.">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </AccordionItem>
        <AccordionItem title="Nisi porta lorem mollis aliquam ut.">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </AccordionItem>
      </Accordion>
      <Carousel>
        <CarouselItem>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </CarouselItem>
        <CarouselItem>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </CarouselItem>
        <CarouselItem>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form.
        </CarouselItem>
        <CarouselItem>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </CarouselItem>
      </Carousel>
      <Button
        color="primary"
        // className=""
        onClick={(event: any) => alert('button clicked')}
      >
        Primary color
      </Button>
      <Checkbox name="green" />
      <Image src={TestPic} width={200} height={200} alt="pic" />
      <Button color="primary" onClick={openModal}>
        Standard modal
      </Button>
      <Modal show={showModal} handleClose={closeModal}>
        <h2 className="mt-0">Title</h2>
        <p className="m-0">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
      </Modal>
      <div className="h-32">
        <Radio
          name="yellow"
          checked={radioState}
          onClick={(e) => toggleRadio()}
          onChange={(e) => console.log(e.target.checked)}
        />
      </div>
      <Select
        id="color"
        label="Pick a color"
        placeholder="Choose your favourite"
        onChange={(e) => console.log(e.target.value)}
      >
        <option>Red</option>
        <option>Yellow</option>
        <option>Blue</option>
      </Select>
      <Switch
        name="lights"
        rightLabel="Billed Annually"
        checked={switchChecked}
        onChange={(e) => console.log(e.target.checked)}
        onClick={(e) => {
          console.log('switch', !switchChecked);
          setSwitchChecked(!switchChecked);
        }}
      >
        Billed Monthly
      </Switch>
      <Timeline>
        <TimelineItem title="November 2019">
          Deployed a high-quality first release and conducted a market
          validation test
        </TimelineItem>
        <TimelineItem title="December 2019">
          Deployed a high-quality first release and conducted a market
          validation test
        </TimelineItem>
        <TimelineItem title="January 2020">
          Deployed a high-quality first release and conducted a market
          validation test
        </TimelineItem>
        <TimelineItem title="February 2020">
          Deployed a high-quality first release and conducted a market
          validation test
        </TimelineItem>
        <TimelineItem title="March 2020">
          Deployed a high-quality first release and conducted a market
          validation test
        </TimelineItem>
      </Timeline>
      <Input
        placeholder="Testing..."
        value={input}
        onChange={(e: any) => {
          console.log(e.target.value);
          setInput(e.target.value);
        }}
      />
      <Clients topDivider={true} bottomDivider={true} />
      <Cta />
      <FeaturesSplit bottomDivider imageFill />
      <FeaturesTiles />
      <GenericSection topDivider>
        <div className="container-xs">
          <h2 className="mt-0">
            Lorem ipsum is placeholder text commonly used in the graphic.
          </h2>
          <p>
            Lorem ipsum dolor sit amet,{' '}
            <a href="#0">consectetur adipiscing elit</a>, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <figure>
            <Image
              className="image-larger"
              src={PlaceHolderSvg}
              alt="Placeholder"
              width={712}
              height={400}
            />
            <figcaption className="text-color-low">
              A super-nice image{' '}
              <span role="img" aria-label="smile">
                😀
              </span>
            </figcaption>
          </figure>
          <h4>Flexibility</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur.</li>
            <li>Lorem ipsum dolor sit amet, consectetur.</li>
            <li>Lorem ipsum dolor sit amet, consectetur.</li>
          </ul>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </div>
      </GenericSection>
      <HeroFull className="illustration-section-02" />
      <HeroSplit invertMobile imageFill className="illustration-section-01" />
      <News />
      <Pricing />
      <Roadmap />
      <Testimonial />
    </React.Fragment>
  );
};
export default Test;
