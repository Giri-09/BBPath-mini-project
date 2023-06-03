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
        <div className='bg-light home-bg d-flex flex-cloumn justify-content-center align-items-center'>
               <HomeCard />
        </div>  
       <Footer/>

        </Fragment>
    ) 
}

export default HomePage