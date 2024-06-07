import React from 'react';
import Navbar from "../Components/Navbar";
import Hero from '../Components/Hero';
import ServiceImg from '../Assets/9.jpg';
import Trip from '../Components/Trip';
import Trip1 from '../Components/Trip1';

export default function Service() {
  return (
    <>
    <Navbar/>
    <Hero
        cName="hero-mid"
        heroImg={ServiceImg}  // Pass the imported image directly
        title="Services"
        
      />
      <Trip1/>
    <div></div>
    </>
  )
}
