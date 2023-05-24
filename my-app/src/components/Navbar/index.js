import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './index.css';

const CustomNavbar = () => {
  const [isScrolled, setScrolled] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
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

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`custom-navbar ${isScrolled ? 'navbar-scroll' : ''}`}
    >
      <Container>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" onClick={handleMenuToggle} />
        <Navbar.Collapse id="navbar" className={`justify-content-end ${isMenuOpen ? 'show' : ''}`}>
          <Nav className="mr-auto">
            <Nav.Link href="#home" className="menu-item">Home</Nav.Link>
            <Nav.Link href="#about" className="menu-item">About</Nav.Link>
            <Nav.Link href="#services" className="menu-item">Services</Nav.Link>
            <Nav.Link href="#contact" className="menu-item">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
