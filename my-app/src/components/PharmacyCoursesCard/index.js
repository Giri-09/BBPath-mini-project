import CustomNavbar from "../Navbar";
import Footer from "../Footer";
import { Fragment } from "react";

import "./index.css";

export const courseList = [
  {
    cardTitle: "Pharmacovigilance",
    cardText:
      "Module will enable aspirants to understand issues surrounding the risks and benifits of drug use in humans including the cause,manifestations and consequences of adverse drug effects. ",
    image: "covigilance.png",
  },
  {
    cardTitle: "Medical Coding",
    cardText:
      " Medical coding is the process of describing medical diagnostics, treatments and other procedures using specific numerical codes. This process helps in easily identifying the various parameters involved in medical treatments.Medical Coding is an important technique used in capturing and maintaining medical records. ",
    image: "medicalcoding.png",
  },
  {
    cardTitle: "Clinical Research",
    cardText:
      "This course will provide you with the essentials of clinical research in a very summarized and concise manner to understand the process and to work towards building your qualifications for a job.",
    image: "clinicalResearch.png",
  },
  
  
  
];

const PharmacyCoursesCard = () => (
  <Fragment>
    <CustomNavbar />
    <div className="cse-courses-bg d-flex flex-column justify-content-center align-items-center">
      <div className="row">
        
            {courseList.map((each,index) => (
              <div className="col-sm-6"  key={index}>
              <div className="card">
              <div className="card-body">
                <img className="pharmacy-course-card-image" src={`images/pharmacy-courses-card-images/${each.image}`} alt={each.cardTitle} />

                <h5 className="cardTitle">{each.cardTitle}</h5>
                <p className="cardText">{each.cardText}</p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
              </div>
        </div>
            ))}
         
      </div>
    </div>

    <Footer />
  </Fragment>
);

export default PharmacyCoursesCard;
