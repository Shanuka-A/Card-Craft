import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Service from './routes/Service';
import Contact from './routes/Contact';
import Footer from './Components/Footer';
import QRCodeGenerator from './routes/QRCodeGenerator';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/QR' element={<QRCodeGenerator/>}/>
        
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
