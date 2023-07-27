
import React, { Fragment } from 'react';
import CustomNavbar  from '../Navbar';
import Footer  from '../Footer';

import "./index.css";

const DynamicProgramming = () => (
    <Fragment>
      <CustomNavbar />
      <div className='python-bg'>
        <h2>Dynamic Programming</h2>
      <br></br>
<br></br>
<h4>What is DynamicProgramming</h4>
<p>Dynamic Programming is mainly an optimization over plain recursion. Wherever we see a recursive solution that has repeated calls for same inputs, we can optimize it using Dynamic Programming. The idea is to simply store the results of subproblems, so that we do not have to re-compute them when needed later. This simple optimization reduces time complexities from exponential to polynomial.</p><br></br>
<img src="https://www.geeksforgeeks.org/wp-content/uploads/Dynamic-Programming-1-768x384.png"/><br></br>
<p>For example, if we write simple recursive solution for Fibonacci Numbers, we get exponential time complexity and if we optimize it by storing solutions of subproblems, time complexity reduces to linear.</p><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<p>Dynamic Programming is mainly an optimization over plain recursion. Wherever we see a recursive solution that has repeated calls for the same inputs, we can optimize it using Dynamic Programming. The idea is to simply store the results of subproblems so that we do not have to re-compute them when needed later. This simple optimization reduces time complexities from exponential to polynomial.</p>
<br></br>
<h4>Techniques to solve Dynamic Programming problems</h4>
<img src="https://media.geeksforgeeks.org/wp-content/uploads/20220914114911/DynamicProgramming1.jpg"/><br></br><br></br>

<h6>1. Top-Down(Memoization):</h6>
<p>Break down the given problem in order to begin solving it. If you see that the problem has already been solved, return the saved answer. If it hasn’t been solved, solve it and save it. This is usually easy to think of and very intuitive, This is referred to as Memoization.</p>
<h6> Bottom-Up(Dynamic Programming):</h6>
<p>Analyze the problem and see in what order the subproblems are solved, and work your way up from the trivial subproblem to the given problem. This process ensures that the subproblems are solved before the main problem. This is referred to as Dynamic Programming.</p><br></br><br></br><br></br><br></br><br></br><br></br>
<h6>Steps to solve a Dynamic programming problem:</h6>
<p>
1.Identify if it is a Dynamic programming problem.<br></br>
2.Decide a state expression with the Least parameters.<br></br>
3.Formulate state and transition relationships.<br></br>
4.Do tabulation (or memorization).
</p>

<p>Time Complexity: O(n),<br></br>
   As we just need to make 3n function calls and there will be no repetitive calculations as we are returning previously calculated results.<br></br>
Auxiliary Space: O(n),<br></br>
 The extra space is used due to the recursion call stack.</p><br></br>
      </div>
  
      <Footer />
    </Fragment>
  );

  export default DynamicProgramming