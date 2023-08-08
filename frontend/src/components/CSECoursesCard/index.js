import CustomNavbar from "../Navbar";
import Footer from "../Footer";
import { Link } from 'react-router-dom'
import { Fragment } from "react";

import "./index.css";

export const courseList = [
  {
    cardTitle: "Programming",
    cardText:
      "Learn programming from basics in this online training.Programming course is taught hands-on by experts.Best for beginners.Start now!",
    image: "programming.png",
    link:"programming"
  },
  {
    cardTitle: "DataStructures and Algorithms",
    cardText:
      "In this session we'll be understanding the concept of DataStructures and implementation of algorithms along with their analysis based on time and space complexity",
    image: "dsa.png",
    link:"dsa"
  },
  {
    cardTitle: "Database Management System",
    cardText:
      "Learn database management system.This DBMS course taught hands-on by experts.Learn key concepts in relational database management system in detail with examples",
    image: "dbms.png",
    link:"dbms"
  },
  {
    cardTitle: "Front-End Development",
    cardText:
      "With this online course you can understand how websites work and how HTML,CSS and JavaScript contribute.Learn fundamentals of implementing responsive web design,How to use bootstrap.",
    image: "frontend.png",
    link:"frontend"
  },
  {
    cardTitle: "Back-End Development",
    cardText:
      "Hi and welcome to Complete backend web developer with nodeJS with projects. A complete course that starts with Javascript basics and move towards advance part of javascript. After that we will move to nodejs part. ",
    image: "backend.png",
    link:"backend"
  },
  {
    cardTitle: "Software-Testing",
    cardText:
      "Course objective is to provide you with all required knowledge that you need in order to land your first software testing 	job whether it is a full-time or a freelancing job.",
    image: "st.png",
    link:"st"
  },
];

const CSECoursesCard = () => (
  <Fragment>
    <CustomNavbar />
    <div className="cse-courses-bg d-flex flex-column justify-content-center align-items-center">
      <h1 className="w-100 mt-5 cse-courses-heading">CSE Courses</h1>
      <div className="row">
        
            {courseList.map((each,index) => (
             <div className="col-sm-12 col-md-6 col-xl-4 mb-3"  key={index}>
               <Link to={`${each.link}`} className="link ">
              <div className="card m-2 min-height-450">
              <div className="card-body p-0 d-flex flex-column">
                <img className="cse-coursecard-image" src={`images/cse-courses-card-images/${each.image}`} alt={each.cardTitle} />
                <div className="p-3">                <h1 className="card-title-cse p-0">{each.cardTitle}</h1>
                <p className="cardText">{each.cardText}</p></div>
              
               
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

export default CSECoursesCard;
