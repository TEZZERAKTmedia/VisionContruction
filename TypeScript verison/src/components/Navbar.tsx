import { Link } from 'react-router-dom';
import './navbar.css';
import VisionGif from '../assets/vision.gif';

const Navbar: React.FC = () => {
  return (
    <header className="header">
      <nav className="nav-bar">
        
        <Link to="/" >
        <img src={VisionGif} style={{ width: '20%', height: 'auto', transform: 'translateY(35%)', }} alt="Vision Logo" />
        </Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Navbar;
