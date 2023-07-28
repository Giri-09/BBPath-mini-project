import {Link } from 'react-router-dom'
import "./index.css"

const Footer=()=>(
    <footer className="bg-dark text-white">
  <div className="container p-4 display-inherit">
    <div className="row">
      <div className="col-md-6">
        <h3>BALAJI'S BRIGTH PATH</h3>
        <p>Lets Learn and Grow with us</p>
      </div>
      <div className="col-md-3">
        <h4>Links</h4>
        <ul className="list-unstyled">
          <li><Link to="/" className="link-style-footer">Home</Link></li>
          <li><Link to="about-us" className="link-style-footer">About us</Link></li>
          <li><Link to="contact-us" className="link-style-footer">Contact us</Link></li>
        </ul>
      </div>
      <div className="col-md-3">
        <h4>Contact Us</h4>
        <ul className="list-unstyled">
          <li>Nandikotkur.</li>
          <li>Kurnool, Andhra Pradesh 518401</li>
          <li>(+91) 9494595901</li>
          <li>balajisbrightpath@gmail.com</li>
        </ul>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 text-center">
        <p>&copy; 2023 BALAJI'S BRIGTH PATH. All rights reserved.</p>
      </div>
    </div>
  </div>
</footer>
)

export default Footer