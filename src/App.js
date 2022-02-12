import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Map from './components/Map';
import Authenticate from './components/LogInp';
import Authenticat from './components/LogIne';
import Navbar from './components/Navbar';
import Footer from './components/Footer';





const App = () => {
  return <div>
  <Navbar />
    <Routes>
      <Route exact path="/header" element={<Header />} />
      <Route exact path="/map" element={<Map />} />
      <Route exact path="/logein" element={<Authenticat />} />
      <Route exact path="/logpin" element={<Authenticate />} />
      <Route exact path="/footer" element={<Footer />} />
    </Routes>
   
  </div>;
};

export default App;
