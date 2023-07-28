
import React, { Fragment } from 'react';
import CustomNavbar  from '../Navbar';
import Footer  from '../Footer';

import "./index.css";

const GreedyAlgorithms = () => (
    <Fragment>
      <CustomNavbar />
      <div className='python-bg'>
        <h2>Greedy Algorithms</h2>
<br></br>
<br></br>
<br></br>        <h4>What is Greedy Algorithm?</h4>
        <p>Greedy is an algorithmic paradigm that builds up a solution piece by piece, always choosing the next piece that offers the most obvious and immediate benefit. So the problems where choosing locally optimal also leads to global solution are the best fit for Greedy.</p><br></br>
        <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/Fractional-Knapsackexample-min-1024x512.png"/><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
     <p>For example consider the Fractional Knapsack Problem. The local optimal strategy is to choose the item that has maximum value vs weight ratio. This strategy also leads to a globally optimal solution because we are allowed to take fractions of an item.</p>
<h4>Characteristics of Greedy algorithm</h4>
<p>1.For a problem to be solved using the Greedy approach, it must follow a few major characteristics:<br></br>

2..There is an ordered list of resources(profit, cost, value, etc.) <br></br>
3.Maximum of all the resources(max profit, max value, etc.) are taken. <br></br>
For example, in the fractional knapsack problem, the maximum value/weight is taken first according to available capacity. <br></br>
</p>

      </div>
  
      <Footer />
    </Fragment>
  );

  export default GreedyAlgorithms