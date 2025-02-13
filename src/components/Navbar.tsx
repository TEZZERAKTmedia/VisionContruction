import './navbar.css';
import VisionGif from '../assets/vision.gif';

const Navbar = () =>  {


    return (
        <div>
            <header className="header">
                
                <nav className="nav-bar">
                <img src={VisionGif} style={{width:'20%', height:'auto'}} />
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Contact</a>
                </nav>
                </header>

        </div>
    )

};

export default Navbar;