import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './Pages/Home/Home.jsx';
import Propos from './Pages/About/About.jsx';
import Error from './Pages/Error/Error.jsx'; 
import House from './Pages/House/House.jsx';
import './assets/Style/App.scss';

function App() {
  return (
    <Router basename="/Projet-React">  {/* Ajout du basename */}
      <Routes>
        <Route index element={<Accueil />} />
        <Route path="/propos" element={<Propos />} />
        <Route path="/house/:id" element={<House />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
