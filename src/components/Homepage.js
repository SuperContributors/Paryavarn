import React from 'react'
import Header from './Header';
import Cards from './Cards';
import Blog from './Blog';
import Feature from './Featured';
import Footer from './Footer';
import Template from './Templates';
import Know from './Know';
import NavBar from './Navbar';


const Homepage = () => {

  return (
    <div>
      <NavBar />
      <Header />
      <Know />
      <Template />
      <Cards />
      <Feature />
      <Blog />
      <Footer />
    </div>
  )
}

export default Homepage