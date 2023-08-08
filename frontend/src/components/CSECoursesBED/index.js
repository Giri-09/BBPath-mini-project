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
    youTube:"https://youtube.com/playlist?list=PLsjUcU8CQXGFFAhJI6qTA8owv3z9jBbpd",
  },
  {
    cardTitle:"MongoDB",
    cardText:"MongoDB is a document database with the scalability and flexibility that you want with the querying and indexing that you need",
    youTube:"https://youtube.com/playlist?list=PL4cUxeGkcC9h77dJ-QJlwGlZlTd4ecZOA",
    link:"mongodb",
  },
  {
    cardTitle:"NodeJS",
    cardText:"Node.js is an open source server environment; Node.js is free; Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)",
    link:"nodejs",
    youTube:"https://youtube.com/playlist?list=PL1BztTYDF-QPdTvgsjf8HOwO4ZVl_LhxS",
  },
  
  
    
  ]
  
  


const CSECoursesBED= () => (
  <Fragment>
    <CustomNavbar />
    <div className="inner-courses-card d-flex flex-column justify-content-center align-items-center">
      <div className="row width-100">
        <div className="d-flex  flex-column align-items-center col-lg-10 col-xl-8 col-sm-12"> {BEDList.map((each,index) => (
               
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

export default CSECoursesBED;
