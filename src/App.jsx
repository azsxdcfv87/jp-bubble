import React from 'react';
import NavHeader from './components/NavHeader';
import BodyContent from './components/BodyContent';
import Paginated from './components/Paginated';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => (
<Router>
  <div className="container">
    <NavHeader />
    <div className="main-content">
      <BodyContent />
    </div>
    <div className='paginated-content'>
        <Paginated />
    </div>
    <Footer />
  </div>
</Router>
);

export default App;