import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Homepage from './components/Homepage';




const App = () => {
  return <div>  
      <Routes>
        <Route exact path="/" element={<Homepage />} />
      </Routes>
  </div>;
};

export default App;
