import React from 'react';
import Navbar from "../Components/Navbar";
import Hero from '../Components/Hero';
import AboutImg from '../Assets/abt.jpg';
import AboutUs from '../Components/AboutUs';

export default function About() {
  return (
    <>
    <Navbar/>
    <Hero
        cName="hero-mid"
        heroImg={AboutImg}  // Pass the imported image directly
        title=""
        
      />
    <AboutUs/>
    <div>

    </div>
    </>
  )
}
