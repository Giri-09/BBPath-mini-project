import React, { Fragment, useEffect, useState } from 'react';
import CustomNavbar from '../Navbar';
import Footer from '../Footer';
import HomeCard from '../HomeCard';
import "./index.css"
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const [jwtToken, setJwtToken] = useState(Cookies.get('jwt_token'));

  const onClickLogout = () => {
    Cookies.remove('jwt_token');
    setJwtToken(undefined);
  };

  useEffect(() => {
    setJwtToken(Cookies.get('jwt_token'));
  }, []);

  return (
    <Fragment>
      <CustomNavbar onClickLogout={onClickLogout} />
      <div className='title-card'></div>
      <div className='home-bg d-flex flex-column justify-content-center align-items-center'>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='login-container d-flex flex-column justify-content-center'>
            <h1 className='mb-4 home-page-title'>Welcome to our site, let's explore more Computer Science Technologies and Pharmacy</h1>
            {jwtToken === undefined && <Link to="/login"><button className='login-button'>Login Now</button></Link>}
          </div>
          <video autoPlay loop muted playsInline className='home-page-vid-1'>
            <source src="videos/home-particle.mp4" type="video/mp4" />
          </video>
        </div>
        <h1 className='cards-header-home'>Our Streams</h1>
        <div className='w-100 d-flex justify-content-center align-items-center'><HomeCard /></div>
      </div>
      <Footer />
    </Fragment>
  )
}

export default HomePage;
