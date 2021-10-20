import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className="col-12">
            <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/dWVsh7m/Pics-Art-10-18-12-42-35.jpg"
      alt="First slide"
      style={{height: "600px"}}
    />
    <Carousel.Caption>
      <h3>The best multi-national medical center</h3>
      <p>We try to provide proper care, about your body</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/vYq9sH0/photo-1600959907703-125ba1374a12.jpg"
      alt="Second slide"
      style={{height: "600px"}}
    />

    <Carousel.Caption>
      <h3>The best multi-national medical center</h3>
      <p>We try to provide proper care, about your body</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/K7mSHqf/Pics-Art-10-18-12-49-18.jpg"
      alt="Third slide"
      style={{height: "600px"}}
    />

    <Carousel.Caption>
      <h3>The best multi-national medical center</h3>
      <p>We try to provide proper care, about your body.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;