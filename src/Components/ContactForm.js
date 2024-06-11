import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../Components/CSS/ContactFormStyle.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone:'',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Email.js logic
    const serviceId = 'service_pl9duzd';
    const templateId = 'template_9r3k4ii';
    const userId = 'oMInH_7NB2x4B5k6N';

    try {
      const response = await emailjs.send(serviceId, templateId, formData, userId);
      console.log('Email sent successfully:', response);
      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        phone:'',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending message. Please try again.');
    }
  };

  const iconStyle = {
    fontSize: '26px',
  };

  const textStyle = {
    fontSize: '22px',
  };

  return (
    <div className="form-container">
      <div className="contact-info">
        <p style={textStyle}>
          <i className="fas fa-phone" style={iconStyle}></i> +94 (75) 9702992 / +94 (75) 0561541
        </p>
        <p style={textStyle}>
          <i className="fas fa-map-marker-alt" style={iconStyle}></i> Malabe,Sri Lanka, 10115
        </p>

        <div className="social-icons">
          <a href="https://www.facebook.com/share/ZAetxTqMtLjvh9Wq/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://x.com/Xplore_Info" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="hhttps://www.instagram.com/xplore_info/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <h1>Send a Message to us!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
         <input
          type="phone"
          name="phone"
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
