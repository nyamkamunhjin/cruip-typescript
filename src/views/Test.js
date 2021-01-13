import React, { useState } from 'react';
import Accordion from '../components/elements/Accordion';
import AccordionItem from '../components/elements/AccordionItem';
import Button from '../components/elements/Button';
import Carousel from '../components/elements/Carousel';
import CarouselItem from '../components/elements/CarouselItem';
import Checkbox from '../components/elements/Checkbox';
import Image from '../components/elements/Image';
import Modal from '../components/elements/Modal';
import Radio from '../components/elements/Radio';
import Select from '../components/elements/Select';

function Test() {
  const [showModal, setShowModal] = useState(false);
  const openModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setShowModal(false);
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
        onClick={() => alert('button clicked')}
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
        <h2 class="mt-0">Title</h2>
        <p class="m-0">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
      </Modal>
      <Radio name="yellow" />
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
    </React.Fragment>
  );
}

export default Test;
