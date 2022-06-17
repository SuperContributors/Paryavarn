import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Authenticate from './components/LogInp';
import Authenticat from './components/LogIne';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';




const App = () => {
  return <div>
  <Navbar />
    <Routes>
      <Route exact path="/logein" element={<Authenticat />} />
      <Route exact path="/logpin" element={<Authenticate />} />
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/nav" element={<Navbar />} />
    </Routes>
  </div>;
};

export default App;
