import CustomNavbar from "../Navbar";
import Footer from "../Footer";
import { Fragment } from "react";
import { Link } from 'react-router-dom'


import "./index.css";

export const courseList = [
  {
    cardTitle: "Pharmacovigilance",
    cardText:
      "Module will enable aspirants to understand issues surrounding the risks and benifits of drug use in humans including the cause,manifestations and consequences of adverse drug effects. ",
    image: "covigilance.png",
    link:"pharmacovigilance-card"
  },
  {
    cardTitle: "Medical Coding",
    cardText:
      " Medical coding is the process of describing medical diagnostics, treatments and other procedures using specific numerical codes. This process helps in easily identifying the various parameters  in medical treatments. ",
    image: "medicalcoding.png",
    link:"medical-coding-card"
  },
  {
    cardTitle: "Clinical Research",
    cardText:
      "This course will provide you with the essentials of clinical research in a very summarized and concise manner to understand the process and to work towards building your qualifications for a job.",
    image: "clinicalResearch.png",
    link:"clinical-reasearch-card"
  },
  
  
  
];

const PharmacyCoursesCard = () => (
  <Fragment>
    <CustomNavbar />
    <div className="cse-courses-bg d-flex flex-column justify-content-center align-items-center">
      <div className="row">
      {courseList.map((each,index) => (
             <div className="col-sm-12 col-md-6 col-xl-4 mb-3"  key={index}>
               <Link to={`${each.link}`} className="link ">
              <div className="card m-2 min-height-450">
              <div className="card-body p-0 d-flex flex-column">
                <img className="cse-coursecard-image" src={`images/pharmacy-courses-card-images/${each.image}`} alt={each.cardTitle} />
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

export default PharmacyCoursesCard;


