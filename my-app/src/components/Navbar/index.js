import "./index.css"
const Navbar=()=>(
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top p-0 navbar-style">
    <div className="container">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse w-100 justify-content-end" id="navbarNav">
      
      <div className="navbar-nav ml-auto">
              <a className="nav-link active" id="navItem1" href="#wcuSection">
                Home
              </a>
              <a className="nav-link" href="#exploreMenuSection" id="navItem2">Explore Menu</a>
              <a className="nav-link" href="#deliveryPaymentSection" id="navItem3">Delivery & Payment</a>
              <a className="nav-link" href="#followUsSection" id="navItem4">Follow Us</a>
            </div>
      </div>
    </div>
  </nav>
)

export default Navbar