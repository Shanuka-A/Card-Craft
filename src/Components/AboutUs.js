import React, { useState } from 'react';
import '../Components/CSS/AboutUsStyle.css';
import offer from '../Assets/3286556.jpg';
import work from '../Assets/3857425.jpg';
import why from '../Assets/6134172.jpg';
import fit from '../Assets/3871751.jpg';
import frame1 from '../Assets/Frame 1.png';
import frame2 from '../Assets/Frame 3.png';

export default function AboutUs() {
  const [currentFrame, setCurrentFrame] = useState(0);

  const frames = [frame1, frame2];

  const nextFrame = () => {
    setCurrentFrame((prevFrame) => (prevFrame + 1) % frames.length);
  };

  const prevFrame = () => {
    setCurrentFrame((prevFrame) => (prevFrame - 1 + frames.length) % frames.length);
  };

  return (
    <div className='about-container'>
      <h1>What Can Be Included In Your Profile ?</h1>

      {/* Swipeable Frame Images */}
      <div className='swipeable-images'>
        <button className='carousel-prev' onClick={prevFrame}>
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.29 16.29L10.29 11.29C10.11 11.11 10 10.84 10 10.57C10 10.3 10.11 10.03 10.29 9.76L15.29 4.76L16.71 6.18L12.42 10.5L16.71 14.82L15.29 16.29Z" />
          </svg>
        </button>
        <img src={frames[currentFrame]} alt={`Frame ${currentFrame + 1}`} className='frame-image' />
        <button className='carousel-next' onClick={nextFrame}>
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.71 16.29L13.71 11.29C13.89 11.11 14 10.84 14 10.57C14 10.3 13.89 10.03 13.71 9.76L8.71 4.76L7.29 6.18L11.58 10.5L7.29 14.82L8.71 16.29Z" />
          </svg>
        </button>
      </div>
      <br/>

      <a href="https://master--glistening-cactus-f7ae79.netlify.app/" className="link-button">
                <button className="cssbuttons-io-button">
                    See Demo Profile
                    <div className="icon">
                        <svg
                            height="24"
                            width="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path
                                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    </div>
                </button>
            </a>
            <br/>
      
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
