import React, { useState } from 'react';
import './Accordion.scss';  

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false); // Gérer l'état ouvert/fermé

  const toggleAccordion = () => {
    setIsOpen(!isOpen); 
  };

  

  return (
    <div className="accordion">
      <button className="accordion-header" onClick={toggleAccordion}>
        <span className="accordion-title">{title}</span>
        <span className={`accordion-arrow ${isOpen ? 'open' : ''}`}></span>
      </button>
      {isOpen && (
        <div className="accordion-content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
