
import React from 'react';
import Carousel from '../Carousel/Carousel';
import './HouseImage.scss';

const HouseImage = ({ pictures }) => {
  return (
    <div className="house-image-container">
      <Carousel images={pictures} />
    </div>
  );
};

export default HouseImage;