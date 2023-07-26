import React, { Fragment } from 'react';
import CustomNavbar  from '../Navbar';
import Footer  from '../Footer';
import {Link } from 'react-router-dom'
import "./index.css";

export const languagesList=[
  {
    cardTitle:"Python",
    cardText:"Learn Python",
    image:"python.png",
    link:"cse-courses/programming/python",
  },
  {
    cardTitle:"C",
    cardText:"Learn C",
    image:"c.png",
    link:"cse-courses/programming/C",
  },
  {
    cardTitle:"Java",
    cardText:"Learn Java",
    image:"java.png",
    link:"cse-courses/programming/java",
  },
  {
    cardTitle:"JavaScript",
    cardText:"Learn JavaScript",
    image:"javascript.png",
    link:"cse-courses/programming/JavaScript",
  },
  
    
  ]
  
  


const CSECoursesProgramming = () => (
  <Fragment>
    <CustomNavbar />
    <div className="cse-courses-bg d-flex flex-column justify-content-center align-items-center">
      <div className="row">
        
            {languagesList.map((each,index) => (
               
              <div className="col-sm-6 m-2" key={index}  >
               <Link to={`${each.link}`}  className="link">
              <div className="card">
              <div className="card-body">
                <img className="pharmacy-course-card-image" src={`cse-courses-card-images/${each.image}`} alt={each.cardTitle} />

                <h5 className="cardTitle">{each.cardTitle}</h5>
                <p className="cardText">{each.cardText}</p>
                
              </div>
              </div>
              </Link>
        </div>
       
            ))}
         
      </div>
    </div>

    <Footer />
  </Fragment>
);

export default CSECoursesProgramming;
