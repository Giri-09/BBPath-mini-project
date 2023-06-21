import React, { Fragment } from 'react';
import CustomNavbar  from '../Navbar';
import Footer  from '../Footer';
import HomeCard from '../HomeCard';
import "./index.css"
// Write your code here
const HomePage=()=>{


    return(
        <Fragment>
      <CustomNavbar />
        <div className='title-card'> 

        </div>
        <div className='home-bg d-flex flex-column justify-content-center align-items-center'>
             <div className='d-flex  justify-content-between align-items-center'>
                <div className='login-container'>
                  <h1 className='mb-3 home-page-title'>Welcome to our site,let's explore more Computer Science Technologies and Pharmacy</h1>
                <button className='login-button'>Login Now</button></div>
                <video autoPlay loop muted playsInline className='home-page-vid-1'>
          <source src="videos/home-particle.mp4" type="video/mp4" />
        </video>
             </div>
              <h1 className='cards-header-home'>Our Streams</h1>
              <div className='w-100'> <HomeCard /></div>
              
        </div>  
       <Footer/>

        </Fragment>
    ) 
}

export default HomePage