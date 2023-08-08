import React, { Fragment } from 'react';
import CustomNavbar  from '../Navbar';
import Footer  from '../Footer';
import {Link } from 'react-router-dom'
import "./index.css";

export const STList=[
  
  {
    cardTitle:"Sotware Testing",
    cardText:"Software testing is a check activity to validate whether the actual results matches with expected results and to ensure that the software system is bug free. ",
    youTube:"https://youtube.com/playlist?list=PL9ooVrP1hQOHYamtWSSlt5jF52WvP0cHl",
    link:"testing",
  },
  {
    cardTitle:"Test Case Design",
    cardText:"A test case design is a document that includes the test's scope, the test strategy, the test environment, the software pieces for testing, the intended test actions within the project, the resources, and a schedule..",
    youTube:"https://youtube.com/playlist?list=PL9ooVrP1hQOHYamtWSSlt5jF52WvP0cHl",
    link:"testcasedesign",
  },
  {
    cardTitle:"Levels Of Testing",
    cardText:"There are 4 levels of testing - unit testing, integration testing, system testing and acceptance testing. These levels are based on the extent of module testing.",
    youTube:"https://youtube.com/playlist?list=PL9ooVrP1hQOHYamtWSSlt5jF52WvP0cHl",
    link:"levels",
  },
  {
    cardTitle:"Test Management",
    cardText:"Test management is the practice of closely managing and monitoring application testing to ensure that resources are being focused on high-risk or important areas of the software.",
    youTube:"https://youtube.com/playlist?list=PL9ooVrP1hQOHYamtWSSlt5jF52WvP0cHl",
    link:"management",
  },
  {
    cardTitle:"Test Automation",
    cardText:"Test automation is the process of using automation tools to maintain test data, execute tests, and analyze test results to improve software quality. Automated testing is also called test automation or automated QA testing",
    youTube:"https://youtube.com/playlist?list=PL9ooVrP1hQOHYamtWSSlt5jF52WvP0cHl",
    link:"automation",
  }
    
  ]
  
  


const CSECoursesST = () => (
  <Fragment>
    <CustomNavbar />
    <div className="inner-courses-card d-flex flex-column justify-content-center align-items-center">
      <div className="row width-100">
        <div className="d-flex  flex-column align-items-center col-lg-10 col-xl-8 col-sm-12"> {STList.map((each,index) => (
               
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

export default CSECoursesST;
