import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './modals/Home';
import About from './modals/About';
import Area from './modals/Area';
import Service from './modals/Contact';
import Form from './modals/Form';

const Paginated = () => (
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/area" element={<Area />} />
    <Route path="/service" element={<Service />} />
    <Route path="/contact" element={<Form />} />
  </Routes>
);

export default Paginated;