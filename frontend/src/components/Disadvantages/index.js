import React, { Fragment } from 'react';
import CustomNavbar  from '../Navbar';
import Footer  from '../Footer';

import "./index.css";

const Disadvantages = () => (
    <Fragment>
      <CustomNavbar />
      <div className='python-bg'>
        <h1>Disadvantages</h1>
        <ul>
          <h6>1.Cost of Hardware and Software</h6>
          <p>It requires a high speed of data processor and large memory size to run DBMS software.</p>
          <h6>2.size</h6>
          <p> It occupies a large space of disks and large memory to run them efficiently.</p>
          <h6>3.Complexity</h6>
          <p>Database system creates additional complexity and requirements.</p>
          <h6>4.Higher impact of failure: </h6>
          <p>Failure is highly impacted the database because in most of the organization, all the data stored in a single database and if the database is damaged due to electric failure or database corruption then the data may be lost forever.</p>

        </ul>

      </div>
  
      <Footer />
    </Fragment>
  );

  export default Disadvantages