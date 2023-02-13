import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import Aboutus from './pages/Aboutus';
import App from './App';
import Contactus from './pages/Contactus';
import Tours from './pages/Tours';
import Footer from './pages/Footer';
import Navigation from './pages/Navigation';
import Login from './pages/Login';
import Registation from './pages/Registration';
import './App.css';


const App2 = () => {
  

  return (
    <div>
          <Navigation />
          <Routes>
            <Route path='Home' element={<Home />} />
            <Route path='Aboutus' element={<Aboutus />} />
            <Route path='Task List' element={<App />} />
            <Route path='Contactus' element={<Contactus />} />
            <Route path='Tours' element={<Tours />} />
            <Route path='/' element={<Login />} />
            <Route path='Registration' element={<Registation />} />
          </Routes>
          <Footer />
      

     
    </div>
  );
};

export default App2;
