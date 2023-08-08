import React, { Fragment } from 'react';
import CustomNavbar  from '../Navbar';
import Footer  from '../Footer';
import {Link } from 'react-router-dom'
import "./index.css";


export const pharmacyCoursesMCList=[
  {
    cardTitle:"Medical Coding",
    cardText:"Medical coding: Translating medical procedures and diagnoses into standardized codes for billing and administrative purposes.",
    link:"medical-coding",
    youTube:"https://youtube.com/playlist?list=PLaKD1ZIZH2LtUZCxq3pSgG253-6Q4n9dj"
  },
    
  ]
  
  


const PharmacyCoursesMCCard = () => (
  <Fragment>
    <CustomNavbar />
    <div className="inner-courses-card d-flex flex-column justify-content-center align-items-center">
      <div className="row width-100">
        <div className="d-flex  flex-column align-items-center col-lg-10 col-xl-8 col-sm-12"> {pharmacyCoursesMCList.map((each,index) => (
               
               <div className=" width-100 m-2 d-flex flex-row" key={index}  >
                <div  className="link width-100 ">
               <div className="card width-100 card-Python d-flex flex-row">
               <Link to={`${each.link}`} className="width-100 card-body">
                 <h5 className="head-Python p-0">{each.cardTitle}</h5>
                 <p className="cardText des-python m-0 p-0">{each.cardText}</p>
                 
               </Link>
               <a href={each.youTube} target='_blank'><img src="/images/youtube.png" className='youtube-image'/></a>
               </div>
               </div>
               
         </div>
        
             ))}</div>
           
         
      </div>
    </div>

    <Footer />
  </Fragment>
);

export default PharmacyCoursesMCCard;
