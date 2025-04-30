import React from 'react';
import './HouseTagsRating.scss';

const HouseTagsRating = ({ tags }) => {
  return (
    <h3 className="house-tags">
      {tags.map((tag, index) => (
        <span key={index} className="tag">{tag}</span>
      ))}
    </h3>
  );
};

export default HouseTagsRating;
