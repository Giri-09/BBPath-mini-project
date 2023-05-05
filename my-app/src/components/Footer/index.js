const Footer=()=>(
    <footer className="bg-dark text-white">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <h3>Company Name</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit dolor eget magna lobortis, id dignissim velit feugiat. Nunc eu mi lorem.</p>
      </div>
      <div className="col-md-3">
        <h4>Links</h4>
        <ul className="list-unstyled">
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
      <div className="col-md-3">
        <h4>Contact Us</h4>
        <ul className="list-unstyled">
          <li>123 Main St.</li>
          <li>City, State ZIP</li>
          <li>(123) 456-7890</li>
          <li>email@example.com</li>
        </ul>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 text-center">
        <p>&copy; 2023 Company Name. All rights reserved.</p>
      </div>
    </div>
  </div>
</footer>
)

export default Footer