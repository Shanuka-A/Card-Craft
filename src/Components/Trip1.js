import React from 'react';
import "../Components/CSS/TripStyle1.css";
import Tripdata from "./Tripdata1";
import consentImage from '../Assets/XI_logo2.jpg'; // Adjust the path as per your file structure

export default function Trip1() {
  return (
    <div className='privacy-container'>
      <div>
        <div>
          <h1>Privacy Policy for Xplore Info</h1>
          <p>
            At Xplore Info, accessible from <a href="https://www.xploreinfo.com" target="_blank" rel="noopener noreferrer">https://www.xploreinfo.com</a>, the privacy of our visitors is of utmost importance to us.
            This Privacy Policy outlines the types of information we collect and record and how we utilize this information.
          </p>
          <p>
            If you have any questions or require further details about our Privacy Policy, please feel free to contact us.
            This Privacy Policy applies solely to our online activities and is valid for visitors to our website in regard to the information they share and/or collect on Xplore Info.
            This policy does not apply to information collected offline or through other channels.
          </p>
        </div>
      </div>

      <div className='row'>
        <div className='tile1'>
          <div className='tile-content'>
            <h2>Consent</h2>
            <img src={consentImage} alt="Consent" className='consent-image' />
            <p>By using our website, you consent to our Privacy Policy and agree to its terms.</p>
          </div>
        </div>

        <div className='tile1'>
          <div className='tile-content'>
            <h2>Information We Collect</h2>
            <ul>
              <li>The types of personal information you are asked to provide, and the reasons for asking for it, will be made clear at the point of collection.</li>
              <li>If you contact us directly, we may receive additional details about you such as your name, email address, phone number, the contents of your message and/or attachments you send us, and any other information you choose to provide.</li>
              <li>When you register for an account, we may request contact information including your name, company name, address, email address, and phone number.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='tile1'>
          <div className='tile1-content'>
            <h2>How We Use Your Information</h2>
            <ul>
              <li>Operate and maintain our website.</li>
              <li>Improve, personalize, and expand our website.</li>
              <li>Understand and analyze how you use our website.</li>
              <li>Develop new products, services, features, and functionality.</li>
              <li>Communicate with you, directly or through our partners, for customer service, updates, and marketing and promotional purposes.</li>
              <li>Send you emails.</li>
              <li>Detect and prevent fraud.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='tile1'>
          <div className='tile1-content'>
            <h2>Log Files</h2>
            <p>Xplore Info follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and it is part of hosting services’ analytics. The information collected by log files includes:</p>
            <ul>
              <li>Internet protocol (IP) addresses</li>
              <li>Browser type</li>
              <li>Internet Service Provider (ISP)</li>
              <li>Date and time stamp</li>
              <li>Referring/exit pages</li>
              <li>Number of clicks</li>
            </ul>
            <p>This information is not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users’ movement on the website, and gathering demographic information.</p>
          </div>
        </div>

        <div className='tile1'>
          <div className='tile1-content'>
            <h2>Advertising Partners Privacy Policies</h2>
            <p>Third-party ad servers or ad networks use technologies such as cookies, JavaScript, or web beacons in their advertisements and links that appear on Xplore Info. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content you see on websites you visit.</p>
            <p>Please note that Xplore Info has no access to or control over these cookies used by third-party advertisers.</p>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='tile1'>
          <div className='tile1-content'>
            <h2>Third-Party Privacy Policies</h2>
            <p>Xplore Info's Privacy Policy does not apply to other advertisers or websites. We advise you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. These third-party ad servers may include their practices and instructions about how to opt-out of certain options.</p>
            <p>You can choose to disable cookies through your browser options. For more detailed information about cookie management with specific web browsers, it can be found on the browsers’ respective websites.</p>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='tile1'>
          <div className='tile1-content'>
            <h2>Children's Information</h2>
            <p>Protecting children while using the internet is another part of our priority. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>
            <p>Xplore Info does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately, and we will do our best efforts to promptly remove such information from our records.</p>
          </div>
        </div>

        <div className='tile1'>
          <div className='tile1-content'>
            <h2>CCPA Privacy Rights</h2>
            <p>Under the CCPA, California consumers have the right to:</p>
            <ul>
              <li>Request that a business disclose the categories and specific pieces of personal data it has collected.</li>
              <li>Request that a business delete any personal data about the consumer that it has collected.</li>
              <li>Request that a business that sells a consumer’s personal data not sell the consumer’s personal data.</li>
            </ul>
            <p>If you make a request, we have one month to respond. If you would like to exercise any of these rights, please contact us.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
