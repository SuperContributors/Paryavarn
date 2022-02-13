import React from 'react'
import Header from './Header';
import Footer from './Footer';
import CardsUi from './Cards';
import Feature from './Featured';
import Blog from './Blogs';
import Template from './Templates';

const Homepage = () => {
  return (
    <div>
      <Header />
      <Template />
      <CardsUi />
      <Feature />
      <Blog />
      <Footer />
    </div>
  )
}

export default Homepage