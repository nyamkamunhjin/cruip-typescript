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
        onClick={(event) => alert('button clicked')}
      >
        Primary color
      </Button>
      <Checkbox name="green" />
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg"
        width={100}
        height={100}
        alt="pic"
      />
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
    </React.Fragment>
  );
};
export default Test;
