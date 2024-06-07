import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../Components/CSS/ContactFormStyle.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    const serviceId = 'service_ee3bzj9';
    const templateId = 'template_4flq1ou';
    const userId = 'hcYiQch9B79qRqokn';

    try {
      const response = await emailjs.send(serviceId, templateId, formData, userId);
      console.log('Email sent successfully:', response);
      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
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
          <i className="fas fa-phone" style={iconStyle}></i> +94 (71) 0533285 / +94 (75) 0561541
        </p>
        <p style={textStyle}>
          <i className="fas fa-map-marker-alt" style={iconStyle}></i> Muhandiram Road, Gamage Place, Bulathsinghala, 12300
        </p>

        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <h1>Send a Message to us!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
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
