import React, { Fragment } from 'react';
import CustomNavbar  from '../Navbar';
import Footer  from '../Footer';

import "./index.css";

const Advantages = () => (
    <Fragment>
      <CustomNavbar />
      <div className='python-bg'>
        <h1>Advantages</h1>
        <h4>1.Data Sharing</h4>
        <p> In DBMS, the authorized users of an organization can share the data among multiple users.</p>
        <h4>2.Controls database redundancy</h4>
        <p> It can control data redundancy because it stores all the data in one single database file and that recorded data is placed in the database.</p>
        <h4>3.Easily Maintenance</h4>
        <p>It can be easily maintainable due to the centralized nature of the database system.</p>
        <h4>4.Reduce time</h4>
        <p> It reduces development time and maintenance need.</p>
        <h4>5.Backup</h4>
        <p>It provides backup and recovery subsystems which create automatic backup of data from hardware and software failures and restores the data if required.</p>
        <h4>6.multiple user interface</h4>
        <p>It provides different types of user interfaces like graphical user interfaces, application program interfaces
</p>

      </div>
  
      <Footer />
    </Fragment>
  );

  export default Advantages