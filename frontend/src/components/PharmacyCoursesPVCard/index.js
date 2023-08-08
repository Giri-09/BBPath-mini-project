import React, { Fragment } from 'react';
import CustomNavbar  from '../Navbar';
import Footer  from '../Footer';
import {Link } from 'react-router-dom'
import "./index.css";

export const pharmacyCoursesPVList=[
  {
    cardTitle:"Pharmacovigilance",
    cardText:"Pharmacovigilance involves monitoring, detecting, assessing, and preventing adverse effects and other drug-related issues to ensure the safety and efficacy of pharmaceutical products.",
    link:"pharmacovigilance",
    youTube:"https://youtube.com/playlist?list=PLwijlZe7Cz3XlNydRqwWAxMOo8m3Jogk2"
  },
    
  ]
  
  


const PharmacyCoursesPVCard = () => (
  <Fragment>
    <CustomNavbar />
    <div className="inner-courses-card d-flex flex-column justify-content-center align-items-center">
      <div className="row width-100">
        <div className="d-flex  flex-column align-items-center col-lg-10 col-xl-8 col-sm-12"> {pharmacyCoursesPVList.map((each,index) => (
               
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

export default PharmacyCoursesPVCard;
