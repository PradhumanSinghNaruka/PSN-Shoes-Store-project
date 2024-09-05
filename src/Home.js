import React from 'react';
import Banner from './Banner';
import Navbar from './Navbar';
import Cards from './Cards';
import Footer from './Footer';
import Women from './Women';
import Video from './Video';
import Cards2 from './Cards2';

function Home() {
  return (
    <>
        <Navbar />
        <Banner />
        <Cards />
        <Cards2 />
        <Women />
        <Video />
        <Footer />
    </>
  )
}

export default Home;
