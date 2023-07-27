import { Link } from 'react-router-dom'

import "./index.css"

const homeCardsList=[
    {
        cardTitle:"Computer Science Courses",
        cardText:"Embrace the world of cutting-edge technology and programming, as you delve into the realm of software development, artificial intelligence, and computer systems, empowering you to shape the future with innovative solutions.",
        image:"cse.png",
        link:"cse-courses"
    },
    {
        cardTitle:"Pharmacy Courses",
        cardText:"Step into the realm of pharmaceutical sciences, where you'll explore the intricate world of drugs, patient care, and healthcare systems, gaining expertise in medicinal chemistry, drug interactions, and patient counseling.",
        image:"pharmacy.png",
        link:"pharmacy-courses"
    }
    ]
    

const HomeCard=()=>(
    
   <div className="row">
    {homeCardsList.map((each,index)=>(
        
        <div className="card custom-card col-sm-6" key={index}>
        {<img src={`images/homecard-images/${each.image}`} alt={each.cardTitle} className='custom-card-image' />}
        <div className="card-body p-4" >

        <h5 className="card-title p-0">{each.cardTitle}</h5>
        <p className="card-text des-home-page">{each.cardText}</p>
        <Link to={`${each.link}`} > <button  className="button-style-home">Get Started</button></Link>
 
  </div>
      </div>
      
    )
    )}
    </div>


   
)

export default HomeCard
