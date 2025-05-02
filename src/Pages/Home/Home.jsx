import React, { useEffect, useState } from 'react';
import { useLogements } from '../../Hooks/useLogements';
import Header from '../../Components/Header/Header'; 
import Footer from '../../Components/Footer/Footer';
import Banner from '../../Components/Banner/Banner'; 
import Card from '../../Components/Cards/Card'; 
import './Home.scss'; 


import bannerImage from '../../assets/Image/banner.png'; 

const Accueil = () => {
  const { logements } = useLogements(); 

  return (
    <div>
      
      <Header /> 

    <div className='banner-top'>
      <Banner image={bannerImage} text="" />
    </div>

      
      <div className="cards-container">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>

      
      <Footer />
    </div>
  );
};

export default Accueil;
