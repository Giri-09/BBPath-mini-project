import "./index.css"

const homeCardsList=[
    {
        cardTitle:"COMPUTER SCIENCE COURSES",
        cardText:"Our BBPath COMPUTER SCIENCE courses will train you and help you to land on your dream job",
        image:"cse.png",
    },
    {
        cardTitle:"Pharmacy Courses",
        cardText:"Pharmacy courses deal with subjects like biology, medicine, and chemistry that offer foundational knowledge to develop pharmaceutical drugs for their safe and effective use in healthcare.",
        image:"pharmacy.png",
    }
    ]
    

const HomeCard=()=>(
    
   <div>
    {homeCardsList.map((each,index)=>(
        <div className="card custom-card mb-3">
        {/* <img src={`images/home-card-images/${each.image}`} alt={each.cardTitle}  /> */}
        <div className="card-body" key={index}>

        <h5 className="card-title">{each.cardTitle}</h5>
        <p className="card-text">{each.cardText}</p>
  <a href="" className="btn btn-primary">Get Started</a>
  </div>
      </div>
    )
    )}
    </div>


   
)

export default HomeCard
