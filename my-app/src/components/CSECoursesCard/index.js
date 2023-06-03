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
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
      </div>
   
<Footer />
</Fragment>

   
)

export default CSECoursesCard