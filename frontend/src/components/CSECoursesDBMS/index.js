import React, { Fragment } from 'react';
import CustomNavbar  from '../Navbar';
import Footer  from '../Footer';
import {Link } from 'react-router-dom'
import "./index.css";

export const DBMSList=[
  {
    cardTitle:"Introduction",
    cardText:"Database management system is software that is used to manage the database",
    link:"intro",
    youTube:"https://youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y",
  },
  {
    cardTitle:"Explanation",
    cardText:"The database is a collection of inter-related data which is used to retrieve, insert and delete the data efficiently. It is also used to organize the data in the form of a table, schema, views, and reports, etc.",
    youTube:"https://youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y",
    link:"explanation",
  },
  {
    cardTitle:"Characteristics",
    cardText:"Real World Entity,Self-explaining Nature,Atomicity of operations,Concurrent access,Integrity,Ease of Access,ACID Properties,Security. ",
    youTube:"https://youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y",
    link:"characteristics",
  },
  {
    cardTitle:"Adavantages",
    cardText:"Controls database redundancy,Data sharing,Easily Maintenance,Reduce time,Backup,multiple user interface",
    youTube:"https://youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y",
    link:"advantages",
  },
  {
    cardTitle:"Disadvantages",
    cardText:"Cost of Hardware and Software,Higher impact of failure,Size,Complexity",
    youTube:"https://youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y",
    link:"disadvantages",
  },
  
    
  ]
  
  


const CSECoursesDBMS = () => (
  <Fragment>
    <CustomNavbar />
    <div className="inner-courses-card d-flex flex-column justify-content-center align-items-center">
      <div className="row width-100">
        <div className="d-flex  flex-column align-items-center col-lg-10 col-xl-8 col-sm-12"> {DBMSList.map((each,index) => (
               
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

export default CSECoursesDBMS;
