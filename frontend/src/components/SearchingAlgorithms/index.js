
import React, { Fragment } from 'react';
import CustomNavbar  from '../Navbar';
import Footer  from '../Footer';

import "./index.css";

const SearchingAlgorithms = () => (
    <Fragment>
      <CustomNavbar />
      <div className='python-bg'>
        <h2>Searching Algorithms</h2><br></br><br></br><br></br>
      <h6>What is Searching algorithm?</h6>
      <br></br>
      <p>Searching Algorithms are designed to check for an element or retrieve an element from any data structure where it is stored.</p>
      <h4>Two types of search</h4>
      <p>1.Linear Search<br></br>
      2.Binary Search</p>


      <br></br><br></br>

      <h4>Linear search</h4>
      <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230104154936/Linear-Search1.png"/>
      <br></br>In this, the list or array is traversed sequentially and every element is checked. For example: Linear Search.<br></br><br></br>
      <p>In this, the list or array is traversed sequentially and every element is checked.</p>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      
      <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221121132716/BinarySearch.png"/><br></br><br></br><h4>Binary Search</h4><br></br>
      <p>These algorithms are specifically designed for searching in sorted data-structures. These type of searching algorithms are much more efficient than Linear Search as they repeatedly target the center of the search structure and divide the search space in half. For Example: Binary Search.
Binary Search to find the element “23” in a given list of numbers

</p>
      <br></br><br></br><br></br><br></br>
      </div>
  
      <Footer />
    </Fragment>
  );

  export default SearchingAlgorithms