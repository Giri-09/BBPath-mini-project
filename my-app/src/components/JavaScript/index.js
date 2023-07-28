import React, { Fragment } from 'react';
import CustomNavbar  from '../Navbar';
import Footer  from '../Footer';

import "./index.css";

const JavaScript = () => (
    <Fragment>
      <CustomNavbar />
      <div className='python-bg'>
      <h2>
	Introduction to JavaScript
</h2>
<p>
	<strong>
		JavaScript:
	</strong>
	 JavaScript is a high-level, interpreted scripting language used to add interactivity and dynamic functionality to web pages. It is widely used for client-side web development.
</p>
<h2>
	JavaScript Variables and Data Types
</h2>
<p>
	<strong>
		Example 1:
	</strong>
	 Declare and use variables with different data types.
</p>
<pre>
	<code class="language-javascript">
	{`// Declare variables
		let name = "John";
		const age = 30;
		var isStudent = true;
	// Data types
		let salary = 50000;
		let hobbies = ["Reading", "Painting", "Cooking"];
		let address = {
		 street: "123 Main St",
		 city: "New York",
		 zip: "10001"
		};
		console.log(name, age, isStudent, salary, hobbies, address);`}
	</code>
</pre>
<h2>
	JavaScript Functions
</h2>
<p>
	<strong>
		Example 2:
	</strong>
	 Define and call functions in JavaScript.
</p>
<pre>
	<code class="language-javascript">
	{`// Function declaration
		function greet(name) {
		 return "Hello, " + name + "!";
		}
	// Function expression (using arrow function)
		const multiply = (a, b) =&gt; a * b;
	// Call functions
		let greeting = greet("Alice");
		let result = multiply(5, 3);
		console.log(greeting);
		console.log(result);`}
	</code>
</pre>
<h2>
	JavaScript Events and Event Handling
</h2>
<p>
	<strong>
		Example 3:
	</strong>
	 Handle a button click event using JavaScript.
</p>
<pre>
	<code class="language-html">
		 Button Click Event Example
		<button id="myButton">
			Click Me
		</button>
	</code>
</pre>
<h2>
	JavaScript DOM Manipulation
</h2>
<p>
	<strong>
		Example 4:
	</strong>
	 Manipulate the Document Object Model (DOM) using JavaScript.
</p>
<pre>
	<code class="language-html">
		 DOM Manipulation Example
	</code>
</pre>
{`<div id="myDiv">
	<p>
		Hello, DOM!
	</p>
</div>`}


	<h2>
		JavaScript Conditional Statements
	</h2>
	<p>
		<strong>
			Example 5:
		</strong>
		 Use if-else statements to perform conditional logic in JavaScript.
	</p>
	<pre>
		<code class="language-javascript">
			{`let age = 18;
			if (age &gt;= 18) {
			 console.log("You are an adult.");
			} else {
			 console.log("You are a minor.");
			}`}
		</code>
	</pre>
	<h2>
		JavaScript Loops
	</h2>
	<p>
		<strong>
			Example 6:
		</strong>
		 Use for and while loops to iterate over arrays and perform repetitive tasks.
	</p>
	<pre>
		<code class="language-javascript">
		{`// For loop
			let numbers = [1, 2, 3, 4, 5];
			for (let i = 0; i &lt; numbers.length; i++) {
			 console.log(numbers[i]);
			}
		// While loop
			let count = 0;
			while (count &lt; 5) {
			 console.log("Count: " + count);
			 count++;
			}`}
		</code>
	</pre>
	<h2>
		JavaScript Error Handling
	</h2>
	<p>
		<strong>
			Example 7:
		</strong>
		 Use try-catch blocks to handle errors in JavaScript.
	</p>
	<pre>
		<code class="language-javascript">
			{`try {
			 // Code that may cause an error
			 let result = someFunction();
			 console.log(result);
			} catch (error) {
			 console.error("An error occurred: " + error.message);
			}`}
		</code>
	</pre>
	<h2>
		JavaScript Asynchronous Programming
	</h2>
	<p>
		<strong>
			Example 8:
		</strong>
		 Use setTimeout to perform asynchronous tasks.
	</p>
	<pre>
		<code class="language-javascript">
			{`console.log("Start");
			setTimeout(() =&gt; {
			 console.log("Asynchronous task executed after 2 seconds.");
			}, 2000);
			console.log("End");`}
		</code>
	</pre>


      </div>
  
      <Footer />
    </Fragment>
  );

  export default JavaScript