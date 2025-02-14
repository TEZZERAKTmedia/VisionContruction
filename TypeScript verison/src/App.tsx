import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './Landing';
import Navbar from './components/Navbar';
import { ThemeProvider } from './ThemeContext';
import About from './pages/About/About';
import Services from './pages/Service/Services';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <ThemeProvider>
      <Router> {/* React Router Wrapper */}
        <Navbar /> {/* Navbar remains visible across all pages */}
        <div className="app">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
