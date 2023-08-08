import React, { Fragment } from 'react';
import CustomNavbar  from '../Navbar';
import Footer  from '../Footer';

import "./index.css";

const Introduction = () => (
    <Fragment>
      <CustomNavbar />
      <div className='python-bg'>
        <h1>Introduction</h1>
        <div className='display'>
     <div><p> DBMS Tutorial provides basic and advanced concepts of Database. Our DBMS Tutorial is designed for beginners and professionals both.</p>
<p>The database is a collection of inter-related data which is used to retrieve, insert and delete the data efficiently. It is also used to organize the data in the form of a table, schema, views, and reports, etc.</p></div>
<div><img className='introduction'src={'https://static.javatpoint.com/dbms/images/dbms-tutorial.jpg'} /></div></div>
<h3> What is Database Management System?</h3>
<p>Database Management Systems (DBMS) are software systems used to store, retrieve, and run queries on data. A DBMS serves as an interface between an end-user and a database, allowing users to create, read, update, and delete data in the database.</p>
<p>Database management system is a software which is used to manage the database. For example: MySQL, Oracle, etc are a very popular commercial database which is used in different applications.
DBMS provides an interface to perform various operations like database creation, storing data in it, updating data, creating a table in the database and a lot more.
It provides protection and security to the database. In the case of multiple users, it also maintains data consistency.</p>
<h4>DBMS allows users the following tasks:</h4>
<ul>
<li><h6>Data Definition:</h6> It is used for creation, modification, and removal of definition that defines the organization of data in the database.</li>
<li><h6>Data Updation: </h6>It is used for the insertion, modification, and deletion of the actual data in the database.</li>
<li><h6>Data Retrieval: </h6>It is used to retrieve the data from the database which can be used by applications for various purposes.</li>
<li><h6>User Administration: </h6>It is used for registering and monitoring users, maintain data integrity, enforcing data security, dealing with concurrency control, monitoring performance and recovering information corrupted by unexpected failure.</li>
</ul>
      </div>
  
      <Footer />
    </Fragment>
  );

  export default Introduction