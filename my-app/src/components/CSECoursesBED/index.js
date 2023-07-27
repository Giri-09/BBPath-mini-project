import React, { Fragment } from 'react';
import CustomNavbar  from '../Navbar';
import Footer  from '../Footer';
import {Link } from 'react-router-dom'
import "./index.css";

export const BEDList=[
  {
    cardTitle:"SQL",
    cardText:"Structured query language (SQL) is a standard language for database creation and manipulation",
    link:"sql",
  },
  {
    cardTitle:"MongoDB",
    cardText:"MongoDB is a document database with the scalability and flexibility that you want with the querying and indexing that you need",
    
    link:"mongodb",
  },
  {
    cardTitle:"NodeJS",
    cardText:"Node.js is an open source server environment; Node.js is free; Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)",
    link:"nodejs",
  },
  
  
    
  ]
  
  


const CSECoursesBED= () => (
  <Fragment>
    <CustomNavbar />
    <div className="inner-courses-card d-flex flex-column justify-content-center align-items-center">
      <div className="row width-100">
        <div className="d-flex  flex-column align-items-center col-lg-8 col-xl-6 col-sm-12"> {BEDList.map((each,index) => (
               
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

export default CSECoursesBED;
