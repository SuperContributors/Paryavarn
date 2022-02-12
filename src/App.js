import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Header from './components/header';

const App = () => {
  return <div>
   <Routes>
     <Route exact path="/header" element={<Header />} />
   </Routes>
   
  </div>;
};

export default App;
