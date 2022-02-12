import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Header from './components/header';
import Cards from './components/Cards';
import CardsUi from './components/CardsUi';

const App = () => {
  return <div>
   <Routes>
     <Route exact path="/header" element={<Header />} />
      <Route exact path="/cards" element={<Cards />} />
        <Route exact path="/cardsui" element={<CardsUi />} />
   </Routes>
   
  </div>;
};

export default App;
