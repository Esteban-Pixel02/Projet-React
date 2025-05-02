import React from 'react';
import { useLogements } from '../../Hooks/useLogements';
import { useParams } from 'react-router-dom';
import '../House/House.scss';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Accordion from '../../Components/Accordion/Accordion';
import HouseImage from '../../Components/HouseImage/HouseImage';
import HouseDetails from '../../Components/HouseDetails/HouseDetails';
import Error from '../Error/Error';
import HouseTagsRating from '../../Components/HouseTagsRating/HouseTagsRating';

import redStar from '../../assets/Logo/Vector-red.svg';
import greyStar from '../../assets/Logo/Vector-grey.svg';

function House() {
  const { id } = useParams();
  const { logements } = useLogements(); 

  const logement = logements.find(item => item.id === id);

  if (!logement) {
    return <Error />;
  }

  return (
    <div className="house-container">
      <Header />

      <HouseImage pictures={logement.pictures} />

      <div className="house-details-container">
        <div className="house-left">
          <HouseDetails 
            title={logement.title} 
            location={logement.location} 
          />
          <HouseTagsRating tags={logement.tags} />
        </div>

        <div className="house-right">
          <div className="house-rating">
            {Array.from({ length: 5 }, (_, i) => (
              <img
                key={i}
                src={i < logement.rating ? redStar : greyStar}
                alt={i < logement.rating ? "Étoile rouge" : "Étoile grise"}
                className="rating-star"
              />
            ))}
          </div>
          <div className="host-info">
            <div className="host-name">
              {logement.host.name.split(' ').map((part, index) => (
                <span key={index}>{part}</span>
              ))}
            </div>
            <img src={logement.host.picture} alt={logement.host.name} className="host-picture" />
          </div>
        </div>
      </div>

      <div className="accordion-container">
        <Accordion title="Description" content={logement.description} />
        <Accordion
          title="Équipements"
          content={
            <ul className="equipments-list">
              {logement.equipments.map((equipment, index) => (
                <li key={index} className="equipment-item">{equipment}</li>
              ))}
            </ul>
          }
        />
      </div>

      <Footer />
    </div>
  );
}

export default House;
