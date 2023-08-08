import React, { useState, useEffect } from 'react';
import {Link } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap';
import Cookies from 'js-cookie'
import './index.css';

const CustomNav2 = (props) => {
  const [isScrolled, setScrolled] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };


  const onClickLogout = () => {
    Cookies.remove('jwt_token', { path: '/' });
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
            <Link to="/" className="menu-item"><button className='btn btn-outline-secondary'>Home</button></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNav2;

