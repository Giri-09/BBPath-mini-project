import React, { Fragment } from 'react';
import "./index.css"
// Write your code here
const HomePage=()=>{
    return(
        <Fragment>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid bg-light fixed-top">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        <div className='bg-primary home-bg'>
              <h1>This is our code</h1>
        </div>
        <footer class="bg-dark text-white">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h3>Company Name</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit dolor eget magna lobortis, id dignissim velit feugiat. Nunc eu mi lorem.</p>
      </div>
      <div class="col-md-3">
        <h4>Links</h4>
        <ul class="list-unstyled">
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
      <div class="col-md-3">
        <h4>Contact Us</h4>
        <ul class="list-unstyled">
          <li>123 Main St.</li>
          <li>City, State ZIP</li>
          <li>(123) 456-7890</li>
          <li>email@example.com</li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 text-center">
        <p>&copy; 2023 Company Name. All rights reserved.</p>
      </div>
    </div>
  </div>
</footer>

        </Fragment>
    ) 
}

export default HomePage