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
        <img src = "https://media.geeksforgeeks.org/wp-content/uploads/20220712172013/Singlelinkedlist.png" /> <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <h6>Node Structure: </h6><p>A node in a linked list typically consists of two components:</p>
        <h6>Data:</h6> <p>It holds the actual value or data associated with the node.</p>
        <h6>Next Pointer:</h6> <p>It stores the memory address (reference) of the next node in the sequence.</p>
        <h6>Head and Tail:</h6><p> The linked list is accessed through the head node, which points to the first node in the list. The last node in the list points to NULL or nullptr, indicating the end of the list. This node is known as the tail node.</p>
      <h4>Why LinkedList is needed?</h4>
      <p>Why linked list data structure needed?
Here are a few advantages of a linked list that is listed below, it will help you understand why it is necessary to know.</p>
<p>Dynamic Data structure: The size of memory can be allocated or de-allocated at run time based on the operation
insertion or deletion.</p>
<p>Ease of Insertion/Deletion: The insertion and deletion of elements are simpler than arrays since no elements need to be 
shifted after insertion and deletion, Just the address needed to be updated.</p>
<p>Efficient Memory Utilization: As we know Linked List is a dynamic data structure the size increases or decreases as per 
the requirement so this avoids the wastage of memory. </p>
<p>Implementation: Various advanced data structures can be implemented using a linked list like a stack, queue, graph, 
hash maps, etc.</p>
<h4>Types of LinkedList</h4>
<pre>
  {`
  1.Singlelinkedlist
  2.Doubly LinkedList
  3.Circular LinkedList`}
</pre>
<h6>Singlelinkedlist</h6>
<div><p>In a singly linked list, each node contains a reference to the next node in the sequence. Traversing a singly linked list is done in a forward direction.</p></div>
<div><img src = "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200922124319/Singly-Linked-List1.png" />    </div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<h6>Doubly LinkedList</h6><div>
<div><p>In a doubly linked list, each node contains references to both the next and previous nodes. This allows for traversal in both forward and backward directions, but it requires additional memory for the backward reference.</p></div>
<div><img src = "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200922124412/Doubly-Linked-List.png" /> </div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<h6>Circular LinkedList</h6><div>
  
<p> In a circular linked list, the last node points back to the head node, creating a circular structure. It can be either singly or doubly linked.</p></div>
<div><img src = "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200922124456/Circular-Linked-List.png" /> </div></div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

<h4>Operations on Linked Lists</h4>
<p>Insertion: Adding a new node to a linked list involves adjusting the pointers of the existing nodes to maintain the proper sequence. Insertion can be performed at the beginning, end, or any position within the list</p>
<p>Deletion: Removing a node from a linked list requires adjusting the pointers of the neighboring nodes to bridge the gap left by the deleted node. Deletion can be performed at the beginning, end, or any position within the list.</p>
<p>Searching: Searching for a specific value in a linked list involves traversing the list from the head node until the value is found or the end of the list is reached.</p>
<h4>Conclusion</h4>
<p>
Linked lists are versatile data structures that provide dynamic memory allocation and efficient insertion and deletion operations. Understanding the basics of linked lists is essential for any programmer or computer science enthusiast. With this knowledge, you can implement linked lists to solve various problems and expand your understanding of data structures and algorithms.</p>


      </div>
  
      <Footer />
    </Fragment>
  );

  export default LinkedList