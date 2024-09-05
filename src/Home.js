import React from 'react';
import Banner from './Banner';
import Navbar from './Navbar';
import Cards from './Cards';
import Footer from './Footer';
import Women from './Women';
import Video from './Video';

function Home() {
  return (
    <>
        <Navbar />
        <Banner />
        <Cards />
        <Women />
        <Video />
        <Footer />
    </>
  )
}

export default Home;
