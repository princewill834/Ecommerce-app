"use client";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import hero from "../../public/assets/images/heroxtwo.png";
import Image from "next/image";


function CarouselSlider() {
  const [index, setIndex] = useState<number>(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      indicators={false}
      controls={false}
    >
      <Carousel.Item>
        <Image  src={hero} alt="First slide" layout="responsive"/>
      </Carousel.Item>
      <Carousel.Item>
        <Image  src={hero} alt="Second slide"layout="responsive" />
      </Carousel.Item>
      <Carousel.Item>
        <Image  src={hero} alt="Third slide" layout="responsive"/>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSlider;
