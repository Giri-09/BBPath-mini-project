import React, { useState, useEffect } from 'react';
import {Link,useNavigate} from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap';
import Cookies from 'js-cookie'
import './index.css';

const CustomNavbar = (props) => {
  const [isScrolled, setScrolled] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const navigate=useNavigate();

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };


  const onClickLogout = () => {
    Cookies.remove('jwt_token');
    navigate("/");
  };
  
    
  

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const jwtToken = Cookies.get('jwt_token')

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`custom-navbar ${isScrolled ? 'navbar-scroll' : ''}`}
    >
      <Container>
        <Link to="/"><Navbar.Brand >
            <img src="/images/logo.png" alt="BBPath" className='logo'/>
          </Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="navbar" onClick={handleMenuToggle} />
        <Navbar.Collapse id="navbar" className={`justify-content-end ${isMenuOpen ? 'show' : ''}`}>
          <Nav className="mr-auto">
            <Link to="/" className="menu-item">Home</Link>
            <Link to="/about-us" className="menu-item">About us</Link>
            <Link to="/contact-us" className="menu-item">Contact us</Link>
            {!(jwtToken === undefined) &&   <button className='logout-button' onClick={onClickLogout}>Logout</button>}
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;

