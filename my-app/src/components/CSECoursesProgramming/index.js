import React, { Fragment } from 'react';
import CustomNavbar  from '../Navbar';
import Footer  from '../Footer';
import {Link } from 'react-router-dom'
import "./index.css";

export const languagesList=[
  {
    cardTitle:"Python",
    cardText:"Python is a very popular general-purpose interpreted, interactive, object-oriented, and high-level programming language. ",
    
    link:"python",
  },
  {
    cardTitle:"C",
    cardText:"C is a general-purpose programming language created by Dennis Ritchie at the Bell Laboratories in 1972. It is a very popular language, despite being old.",
    
    link:"clan",
  },
  {
    cardTitle:"Java",
    cardText:"Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible",
    
    link:"java",
  },
 
  
    
  ]
  
  


const CSECoursesProgramming = () => (
  <Fragment>
    <CustomNavbar />
    <div className="inner-courses-card d-flex flex-column justify-content-center align-items-center">
      <div className="row width-100">
        <div className="d-flex  flex-column align-items-center col-lg-8 col-xl-6 col-sm-12"> {languagesList.map((each,index) => (
               
               <div className=" width-100 m-2" key={index}  >
                <Link to={`${each.link}`}  className="link width-100">
               <div className="card width-100 card-Python">
               <div className="width-100 card-body">
                 <h5 className="head-Python p-0">{each.cardTitle}</h5>
                 <p className="cardText des-python m-0 p-0">{each.cardText}</p>
                 
               </div>
               </div>
               </Link>
         </div>
        
             ))}</div>
           
         
      </div>
    </div>

    <Footer />
  </Fragment>
);

export default CSECoursesProgramming;
