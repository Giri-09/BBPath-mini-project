import React, { Fragment } from 'react';
import CustomNavbar  from '../Navbar';
import Footer  from '../Footer';

import "./index.css";

const LinkedList = () => (
    <Fragment>
      <CustomNavbar />
      <div className='python-bg'>
        <h2>Linked List in C</h2>
        <p>Linked List is a linear data structure, in which elements are not stored at a contiguous location, rather they are linked using pointers. Linked List forms a series of connected nodes, where each node stores the data and the address of the next node.</p>
        <img src = "https://media.geeksforgeeks.org/wp-content/uploads/20220712172013/Singlelinkedlist.png" /> 
      
      </div>
  
      <Footer />
    </Fragment>
  );

  export default LinkedList