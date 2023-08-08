import React, { Fragment } from 'react';
import CustomNavbar  from '../Navbar';
import Footer  from '../Footer';
import {Link } from 'react-router-dom'
import "./index.css";

export const DSAList=[
  {
    cardTitle:"Arrays",
    cardText:"An array is a container object that holds a fixed number of values of a single type. The length of an array is established when the array is created. After creation, its length is fixed.",
    link:"arrays",
    youTube:"https://youtube.com/playlist?list=PLrk5tgtnMN6TYBW0-U4YhIRyYEVpqVEnJ",
  },
  {
    cardTitle:"Strings",
    cardText:"A string is a data type used in programming, that is used to represent text rather than numbers. A string is a sequence of characters and can contain letters, numbers, symbols and even spaces.",
    youTube:"https://youtube.com/playlist?list=PLrk5tgtnMN6TYBW0-U4YhIRyYEVpqVEnJ",
    link:"strings",
  },
  {
    cardTitle:"LinkedList",
    cardText:"A linked list is a linear collection of data elements whose order is not given by their physical placement in memory.",
    youTube:"https://youtube.com/playlist?list=PLrk5tgtnMN6TYBW0-U4YhIRyYEVpqVEnJ",
    link:"linkedlist",
  },
  {
    cardTitle:"Stacks",
    cardText:"Stack is a linear data structure that follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out)",
    youTube:"https://youtube.com/playlist?list=PLrk5tgtnMN6TYBW0-U4YhIRyYEVpqVEnJ",
    link:"stack",
  },
  {
    cardTitle:"Queue",
    cardText:" A Queue is defined as a linear data structure that is open at both ends and the operations are performed in First In First Out (FIFO) order.",
    youTube:"https://youtube.com/playlist?list=PLrk5tgtnMN6TYBW0-U4YhIRyYEVpqVEnJ",
    link:"queue",
  },
  {
    cardTitle:"Tree",
    cardText:"A tree data structure is defined as a collection of objects or entities known as nodes that are linked together to represent or simulate hierarchy.",
    youTube:"https://youtube.com/playlist?list=PLrk5tgtnMN6TYBW0-U4YhIRyYEVpqVEnJ",
    link:"tree",
  },
  {
    cardTitle:"Graph",
    cardText:"A graph can be defined as group of vertices and edges that are used to connect these vertices. ",
    youTube:"https://youtube.com/playlist?list=PLrk5tgtnMN6TYBW0-U4YhIRyYEVpqVEnJ",
    link:"graph",
  },
  {
    cardTitle:"Searching Algorithms",
    cardText:" Searching Algorithms are designed to check for an element or retrieve an element from any data structure where it is stored. ",
    youTube:"https://youtube.com/playlist?list=PLrk5tgtnMN6TYBW0-U4YhIRyYEVpqVEnJ",
    link:"searching",
  },
  {
    cardTitle:"SortingAlgorithms",
    cardText:" A Sorting Algorithm is used to rearrange a given array or list of elements according to a comparison operator on the elements.",
    youTube:"https://youtube.com/playlist?list=PLrk5tgtnMN6TYBW0-U4YhIRyYEVpqVEnJ",
    link:"sorting",
    },
  {
    cardTitle:"GreedyAlgorithms",
    cardText:"A greedy algorithm is an algorithm that finds a solution to problems in the shortest time possible. ",
    youTube:"https://youtube.com/playlist?list=PLrk5tgtnMN6TYBW0-U4YhIRyYEVpqVEnJ",
    link:"greedy",
  },
  {
    cardTitle:"DynamicProgramming",
    cardText:"Dynamic programming is used where we have problems, which can be divided into similar sub-problems, so that their results can be re-used.",
    youTube:"https://youtube.com/playlist?list=PLrk5tgtnMN6TYBW0-U4YhIRyYEVpqVEnJ",
    link:"dp",
  },
  
    
  ]
  
  


const CSECoursesDSA = () => (
  <Fragment>
    <CustomNavbar />
    <div className="inner-courses-card d-flex flex-column justify-content-center align-items-center">
      <div className="row width-100">
        <div className="d-flex  flex-column align-items-center col-lg-10 col-xl-8 col-sm-12"> {DSAList.map((each,index) => (
               
               <div className=" width-100 m-2 d-flex flex-row" key={index}  >
                <div  className="link width-100 ">
               <div className="card width-100 card-Python d-flex flex-row">
               <Link to={`${each.link}`} className="width-100 card-body">
                 <h5 className="head-Python p-0">{each.cardTitle}</h5>
                 <p className="cardText des-python m-0 p-0">{each.cardText}</p>
                 
               </Link>
               <a href={each.youTube} target='_blank'><img src="/images/youtube.png" className='youtube-image'/></a>
               </div>
               </div>
               
         </div>
        
             ))}</div>
           
         
      </div>
    </div>

    <Footer />
  </Fragment>
);

export default CSECoursesDSA;
