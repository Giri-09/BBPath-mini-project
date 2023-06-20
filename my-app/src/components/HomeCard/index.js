import "./index.css"

const homeCardsList=[
    {cardTitle:"Number 1",
cardText:"hello hello",
imageUrl:"nameOfImage"},
{cardTitle:"Number 1",
cardText:"hello hello",
imageUrl:"nameOfImage"},
]

const HomeCard=()=>(
    <div className="card custom-card mb-3">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLFg8KkVkt7DDILJTVA7Y195YclMprz-6qog&usqp=CAU" className="card-img-top" alt="..." />
    {homeCardsList.map((each,index)=>(
        <div className="card-body" key={index}>
        <h5 className="card-title">{each.cardTitle}</h5>
        <p className="card-text">{each.cardText}</p>
  <a href="" className="btn btn-primary">Get Started</a>
      </div>
    )
    )}
    </div>


   
)

export default HomeCard