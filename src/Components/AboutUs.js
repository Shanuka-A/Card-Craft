import React from 'react';
import "../Components/CSS/AboutUsStyle.css";
import offer from '../Assets/3286556.jpg';
import work from '../Assets/3857425.jpg';
import why from '../Assets/6134172.jpg';
import fit from '../Assets/3871751.jpg';

export default function AboutUs() {
  return (
    <div className='about-container'>
      <div className='tile left'>
        <img src={offer} alt="What We Offer" className='tile-image' />
        <div className='tile-content'>
          <h1>What We Offer....</h1>
          <p>Welcome to Xplore Info, where we transform traditional business cards into cutting-edge networking tools.
            Our NFC business cards combine sleek design with innovative technology, allowing you to share your contact information,
            social media profiles, websites, and more with just a tap.
          </p>
        </div>
      </div>

      <div className='tile right'>
        <img src={work} alt="How It Works" className='tile-image' />
        <div className='tile-content'>
          <h1>How It Works</h1>
          <p>Our NFC business cards are embedded with Near Field Communication (NFC) chips.
            When someone taps your card with their smartphone, your pre-programmed information is instantly shared,
            eliminating the need for manual data entry and ensuring you make a lasting impression.
          </p>
        </div>
      </div>

      <div className='tile left'>
        <img src={why} alt="Why Choose Us" className='tile-image' />
        <div className='tile-content'>
          <h1>Why Choose Our NFC Business Cards?</h1>
          <ul>
            <li>Convenient and Efficient</li>
            <li>Customizable</li>
            <li>Environmentally Friendly</li>
            <li>Update Anytime</li>
          </ul>
        </div>
      </div>

      <div className='tile right'>
        <img src={fit} alt="Perfect For" className='tile-image' />
        <div className='tile-content'>
          <h1>Perfect For</h1>
          <ul>
            <li>Professionals and Entrepreneurs</li>
            <li>Event Organizers</li>
            <li>Sales and Marketing Teams</li>
            <li>Anyone looking to modernize their networking strategy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
