import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import heroImg from '../Assets/1.jpg';
import Destination from '../Components/Destination';
import Trip from '../Components/Trip';
import '../App.css'; // Ensure this file is imported where the global styles are defined

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero typewriter"  // Apply typewriter class here if it's relevant
        heroImg={heroImg}
        title={<h1 className="line-1 anim-typewriter">Welcome to XMART NFC Business Card</h1>}  // Apply the typewriter class to h1
        text={
          <p style={{fontSize:'2rem', fontFamily: 'Arial, sans-serif', color: '' }}>  {/* Set the color property to a valid value */}
            From First Glance To Lasting Impression
          </p>
        }
        buttonText="Explore"
       
        btnClass="show"
      />
      <Destination />
      <Trip />
    </>
  );
}
