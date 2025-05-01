import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Accordion from '../../Components/Accordion/Accordion';
import '../About/About.scss';
import Banner from '../../Components/Banner/Banner';
import AboutBannerImage from '../../assets/Image/banner2.png';


function Propos() {
  return (
    <div className="propos-container">
      <Header />
      <div className='banner-top-about'>
      <Banner image={AboutBannerImage} text="" className="no-overlay" />
      </div>
      
      <div className="main-content">
        
        <Accordion title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." />
        <Accordion title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
        <Accordion title="Service" content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." />
        <Accordion title="Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
      </div>
      
      <Footer />
    </div>
  );
}

export default Propos;