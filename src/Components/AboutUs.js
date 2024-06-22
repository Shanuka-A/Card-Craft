import React from 'react';
import '../Components/CSS/AboutUsStyle.css';
import offer from '../Assets/3286556.jpg';
import work from '../Assets/3857425.jpg';
import why from '../Assets/6134172.jpg';
import fit from '../Assets/3871751.jpg';

export default function AboutUs() {
  return (
    <div className='about-container'>
      {/* First Content */}
      <div className='content'>
        <img src={offer} alt="What We Offer" className='content-image' />
        <div className='content-text'>
          <h1>What We Offer....</h1>
          <p>Welcome to Xplore Info, where we transform traditional business cards into cutting-edge networking tools.</p>
        </div>
      </div>

      {/* Second Content */}
      <div className='content'>
        <img src={work} alt="How It Works" className='content-image' />
        <div className='content-text'>
          <h1>How It Works</h1>
          <p>Our NFC business cards are embedded with NFC chips. When someone taps your card with their smartphone, your information is shared instantly.</p>
        </div>
      </div>

      {/* Third Content */}
      <div className='content'>
        <img src={why} alt="Why Choose Us" className='content-image' />
        <div className='content-text'>
          <h1>Why Choose Our NFC Business Cards?</h1>
          <ul>
            <li>Convenient and Efficient</li>
            <li>Customizable</li>
            <li>Environmentally Friendly</li>
            <li>Update Anytime</li>
          </ul>
        </div>
      </div>

      {/* Fourth Content */}
      <div className='content'>
        <img src={fit} alt="Perfect For" className='content-image' />
        <div className='content-text'>
          <h1>Perfect For</h1>
          <ul>
            <li>Professionals and Entrepreneurs</li>
            <li>Event Organizers</li>
            <li>Sales and Marketing Teams</li>
            <li>Modern networking strategy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
