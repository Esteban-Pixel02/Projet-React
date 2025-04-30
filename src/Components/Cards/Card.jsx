import React from 'react';
import { Link } from 'react-router-dom';
import '../Cards/Card.scss'; 

const Card = ({ id, title, cover }) => {
  return (
    <Link to={`/house/${id}`} className="card" style={{ backgroundImage: `url(${cover})` }}>
      <h2 className="card-title">{title}</h2>
    </Link>
  );
};

export default Card;
