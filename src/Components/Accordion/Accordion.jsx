import React, { useState } from 'react';
import './Accordion.scss';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <button
        className="accordion-header"
        onClick={toggleAccordion}
        aria-expanded={isOpen}
      >
        <span className="accordion-title">{title}</span>
        <span className={`accordion-arrow ${isOpen ? 'open' : ''}`}></span>
      </button>
      {isOpen && (
        <div className="accordion-content">
          <div>{content}</div>
        </div>
      )}
    </div>
  );
};

export default Accordion;
