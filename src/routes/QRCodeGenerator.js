import React, { useState, useRef } from 'react';
import QRCode from 'qrcode.react';
import { jsPDF } from 'jspdf';
import Navbar from "../Components/Navbar";
import Hero from '../Components/Hero';
import ContactImg from '../Assets/6340.jpg';

const QRCodeGenerator = () => {
  const [text, setText] = useState('');
  const qrCodeRef = useRef(null);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const downloadQRCode = (format) => {
    const canvas = qrCodeRef.current.querySelector('canvas');
    const url = canvas.toDataURL(`image/${format}`);
    const a = document.createElement('a');
    a.href = url;
    a.download = `qrcode.${format}`;
    a.click();
  };

  const downloadPDF = () => {
    const canvas = qrCodeRef.current.querySelector('canvas');
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    pdf.addImage(imgData, 'PNG', 15, 40, 180, 160);
    pdf.save('qrcode.pdf');
  };

  const storeInputData = async () => {
    try {
      const response = await fetch('/api/store-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });
      if (response.ok) {
        alert('Data stored successfully!');
      } else {
        alert('Failed to store data.');
      }
    } catch (error) {
      console.error('Error storing data:', error);
      alert('An error occurred while storing the data.');
    }
  };

  const handleDownload = (format) => {
    storeInputData(); // Store data before download
    if (format === 'pdf') {
      downloadPDF();
    } else {
      downloadQRCode(format);
    }
  };

  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ContactImg}
        title="QR Code Generator"
      />
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Enter text or URL"
          style={{ padding: '10px', width: '300px' }}
        />
        <div style={{ marginTop: '20px' }} ref={qrCodeRef}>
          <QRCode value={text} />
        </div>
        <div style={{ marginTop: '20px' }}>
          <button onClick={() => handleDownload('png')} style={{ marginRight: '10px' }}>Download PNG</button>
          <button onClick={() => handleDownload('jpeg')} style={{ marginRight: '10px' }}>Download JPEG</button>
          <button onClick={() => handleDownload('jpg')} style={{ marginRight: '10px' }}>Download JPG</button>
          <button onClick={() => handleDownload('pdf')} style={{ marginRight: '10px' }}>Download PDF</button>
        </div>
      </div>
    </>
  );
};

export default QRCodeGenerator;
