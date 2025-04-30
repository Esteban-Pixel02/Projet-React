

import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header/Header'; 
import Footer from '../../Components/Footer/Footer'; 
import './Error.scss'; 


const Error = () => {
  return (
    <div className="error-page">
      <Header /> 

      <div className="error-content">
        <h1 className="error-code">404</h1>
        <p className="error-message">Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="error-link">Retourner sur la page d’accueil</Link>
      </div>

      <Footer /> 
    </div>
  );
};

export default Error;
