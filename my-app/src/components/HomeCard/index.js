import { Link } from 'react-router-dom'

import "./index.css"

const homeCardsList=[
    {
        cardTitle:"COMPUTER SCIENCE COURSES",
        cardText:"Our BBPath COMPUTER SCIENCE courses will train you and help you to land on your dream job",
        image:"cse.png",
        link:"cse-courses"
    },
    {
        cardTitle:"Pharmacy Courses",
        cardText:"Pharmacy courses deal with subjects like biology, medicine, and chemistry that offer foundational knowledge to develop pharmaceutical drugs for their safe and effective use in healthcare.",
        image:"pharmacy.png",
        link:"pharmacy-courses"
    }
    ]
    

const HomeCard=()=>(
    
   <div className="row">
    {homeCardsList.map((each,index)=>(
        
        <div className="card custom-card col-sm-6" key={index}>
        {<img src={`images/homecard-images/${each.image}`} alt={each.cardTitle}  />}
        <div className="card-body" >

        <h5 className="card-title">{each.cardTitle}</h5>
        <p className="card-text">{each.cardText}</p>
        <Link to={`${each.link}`} > <button  className="btn btn-primary">Get Started</button></Link>
 
  </div>
      </div>
      
    )
    )}
    </div>


   
)

export default HomeCard
