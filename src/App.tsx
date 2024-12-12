import './App.css';
import Home from './pages/home';
import { Routes, Route, Navigate } from 'react-router-dom';
import Services from './pages/services';
import Contact from './pages/contact';
import Navbar from '../src/components/navbar';
import Footer from '../src/components/footer';

function App() {
  return (
    <div className="App">
      <div className="navbar-wrapper">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <div className="footer-wrapper">
        <Footer />
      </div>
    </div>
  );
}

export default App;
