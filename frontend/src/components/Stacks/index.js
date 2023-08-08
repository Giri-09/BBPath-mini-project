
import React, { Fragment } from 'react';
import CustomNavbar  from '../Navbar';
import Footer  from '../Footer';

import "./index.css";

const Stack = () => (
    <Fragment>
      <CustomNavbar />
      <div className='python-bg'>
        <h2>Stacks </h2>
        <h4>What is Stack?</h4>
        <p>A stack is a linear data structure in which the insertion of a new element and removal of an existing element takes place at the same end represented as the top of the stack.</p>
  <p>To implement the stack, it is required to maintain the pointer to the top of the stack, which is the last element to be inserted because we can access the elements only on the top of the stack.</p>
  <div><img className = "center" src="https://media.geeksforgeeks.org/wp-content/uploads/20220714004311/Stack-660x566.png"/></div>
<pre>{`
Basic Operations on Stack
In order to make manipulations in a stack,
 there are certain operations provided to us.

1.push() to insert an element into the stack
2.pop() to remove an element from the stack
3.top() Returns the top element of the stack.
4.isEmpty() returns true if stack is empty else false.
5.size() returns the size of stack.
`}
</pre>
<h4>Push:</h4>
<p>Adds an item to the stack. If the stack is full, then it is said to be an Overflow condition.</p>

<h6>Algorithm for push:</h6>

<pre>{`begin
 if stack is full
    return
 endif
else  
 increment top
 stack[top] assign value
end else
end procedure
`}
</pre>

<h4>Pop:</h4>
<p>Removes an item from the stack. The items are popped in the reversed order in which they are pushed. If the stack is empty, then it is said to be an Underflow condition.</p>

<h6>Algorithm for pop:</h6>
<pre>
  {`begin
 if stack is empty
    return
 endif
else
 store value of stack[top]
 decrement top
 return value
end else
end procedure`}
</pre>
<h4>
Top:</h4>
<p>Returns the top element of the stack.</p>
<h6>Algorithm for Top</h6>
<pre>{`begin 
  return stack[top]
end procedure`}</pre>




<h4>isEmpty:</h4>
<p>Returns true if the stack is empty, else false.</p>

<h6>Algorithm for isEmpty:</h6>
<pre>{`
begin
 if top < 1
    return true
 else
    return false
end procedure`}</pre>
<h3>Applications of Stack</h3>
<pre>{`1.Infix to Postfix /Prefix conversion
2.Redo-undo features at many places like editors, photoshop.
3.Forward and backward features in web browsers
4.Used in many algorithms like Tower of Hanoi, tree traversals, stock span problems,
 and histogram problems.
5.Backtracking is one of the algorithm designing techniques. Some examples of 
backtracking are the Knight-Tour problem, N-Queen problem, find your way through 
a maze, and game-like chess or checkers in all these problems we dive into someway 
if that way is not efficient we come back to the previous state and go into some 
another path. To get back from a current state we need to store the previous state
 for that purpose we need a stack.
6.In Graph Algorithms like Topological Sorting and Strongly Connected Components
7.In Memory management, any modern computer uses a stack as the primary management
 for a running purpose. Each program that is running in a computer system has its 
 own memory allocations
8.String reversal is also another application of stack. Here one by one each character
 gets inserted into the stack. So the first character of the string is on the bottom of 
 the stack and the last element of a string is on the top of the stack. After Performing
  the pop operations on the stack we get a string in reverse order.
9.Stack also helps in implementing function call in computers. The last called function
 is always completed first.
10.Stacks are also used to implement the undo/redo operation in text editor.`}</pre>
      </div>
  
      <Footer />
    </Fragment>
  );

  export default Stack