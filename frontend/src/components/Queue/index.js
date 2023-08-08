
import React, { Fragment } from 'react';
import CustomNavbar  from '../Navbar';
import Footer  from '../Footer';

import "./index.css";

const Queue = () => (
    <Fragment>
      <CustomNavbar />
      <div className='python-bg'>
        <h2>Queue</h2>
        <br></br><br></br><br></br>
        <h4>What is Queue DataStructure?</h4>
        <p>A Queue is defined as a linear data structure that is open at both ends and the operations are performed in First In First Out (FIFO) order.</p>
      
<p>We define a queue to be a list in which all additions to the list are made at one end, and all deletions from the list are made at the other end.  The element which is first pushed into the order, the operation is first performed on that.

</p><br></br><br></br><br></br><br></br>
<h4>FIFO principle of Queue</h4>
<img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221213111946/fifo-property-in-Queue.png"/>
      <p>A Queue is like a line waiting to purchase tickets, where the first person in line is the first person served. (i.e. First come first serve).</p><br></br>
<p>Position of the entry in a queue ready to be served, that is, the first entry that will be removed from the queue, is called the front of the queue(sometimes, head of the queue), similarly, the position of the last entry in the queue, that is, the one most recently added, is called the rear (or the tail) of the queue. See the below figure.
</p><br></br><br></br><br></br><br></br>
<h6>Characteristics of Queue DataStructure</h6>
<p>1.Queue can handle multiple data.

</p>
<p>2.We can access both ends.</p>
<p>3.They are fast and flexible. </p>
<h4>Queue Representation</h4><br></br>
<img src= "data:image/png;base64,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"/>
<pre>{`Like stacks, Queues can also be represented in an array:
 In this representation, the Queue is implemented using the array.
  Variables used in this case are
Queue: the name of the array storing queue elements.
Front: the index where the first element is stored in the array representing the queue.
Rear: the index where the last element is stored in an array representing the queue.
`}</pre>



      </div>
  
      <Footer />
    </Fragment>
  );

  export default Queue