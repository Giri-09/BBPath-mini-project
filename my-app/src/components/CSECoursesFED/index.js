import React, { Fragment } from 'react';
import CustomNavbar  from '../Navbar';
import Footer  from '../Footer';
import {Link } from 'react-router-dom'
import "./index.css";

export const FEDList=[
  {
    cardTitle:"HTML",
    cardText:"HTML stands for Hyper Text Markup Language. HTML is the standard markup language for creating Web pages. HTML describes the structure of a Web page. HTML consists of a series of elements",
    link:"html",
  },
  {
    cardTitle:"CSS",
    cardText:"CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen size",
    link:"css",
  },
  {
    cardTitle:"JavaScript",
    cardText:"JavaScript is a dynamic programming language that's used for web development, in web applications, for game development, and lots more.",
    
    link:"javascript",
  },
  
  
    
  ]
  
  


const CSECoursesFED = () => (
  <Fragment>
    <CustomNavbar />
    <div className="inner-courses-card d-flex flex-column justify-content-center align-items-center">
      <div className="row width-100">
        <div className="d-flex  flex-column align-items-center col-lg-8 col-xl-6 col-sm-12"> {FEDList.map((each,index) => (
               
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

export default CSECoursesFED;
