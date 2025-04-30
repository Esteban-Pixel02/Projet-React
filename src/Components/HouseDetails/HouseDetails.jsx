
import React from 'react';
import './HouseDetails.scss';

const HouseDetails = ({ title, location }) => {
  return (
    <div className="house-details">
      <h1 className="house-title">{title}</h1>
      <h2 className="house-location">{location}</h2>
    </div>
  );
};

export default HouseDetails;
