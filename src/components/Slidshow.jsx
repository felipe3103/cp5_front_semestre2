import React from 'react';
import { Carousel } from 'react-bootstrap';

function Slideshow() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./public/assets/homem_aranha1.jpg"
          alt="Spider-Man 1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./public/assets/homem_aranha2.jpg"
          alt="Spider-Man 2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./public/assets/homem_aranha3.jpg"
          alt="Spider-Man 3"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./public/assets/homem_aranha4.jpg"
          alt="Spider-Man 4"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./public/assets/homem_aranha5.jpg"
          alt="Spider-Man 5"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./public/assets/homem_aranha6.jpg"
          alt="Spider-Man 6"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
         src="./public/assets/homem_aranha7.jpg"
          alt="Spider-Man 7"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./public/assets/homem_aranha8.jpg"
          alt="Spider-Man 8"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slideshow;
