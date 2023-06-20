import CustomNavbar  from '../Navbar';
import Footer  from '../Footer';
import { Fragment } from 'react';

import "./index.css"

const CSECoursesCard=()=>(
    <Fragment>
      <CustomNavbar />
      <div className='cse-courses-bg d-flex flex-column justify-content-center align-items-center'>
         <div className="row" >
  <div className="col-sm-6">
    <div className="card cse-course-card">
    <img src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1644827956714-6.%20Programming%20Languages.png" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Programming</h5>
        <p className="card-text">Learn programming from basics in this online training.Programming course is taught hands-on by experts.Best for beginners.Start now!</p>
        <a href="#" className="btn btn-primary">Get Started</a>
      </div>
    </div>
  </div>

      </div>
    </div>
  

   
<Footer />
</Fragment>

   
)

export default CSECoursesCard