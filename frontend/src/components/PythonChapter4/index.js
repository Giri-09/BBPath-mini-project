import React, { Fragment } from 'react';
import CustomNavbar  from '../Navbar';
import Footer  from '../Footer';

import "./index.css";

const PythonChapter4 = () => (
    <Fragment>
      <CustomNavbar />
      <div className='content-bg'>
        <h2>Chapter 4: Functions and Modules</h2>
        <h2>
	Defining and Calling Functions
</h2>
<p>
	<strong>
		Functions:
	</strong>
	 Functions are blocks of code that perform a specific task or a set of tasks. They allow us to break our program into smaller and reusable parts. In Python, functions are defined using the
	<code>
		{`def`}
	</code>
	 keyword.
</p>
<pre>
	<code class="python">
{`# Defining a function
def greet():
 print("Hello, there!")
# Calling the function
greet() # Output: "Hello, there!"`}
	</code>
</pre>
<h2>
	Function Parameters and Return Values
</h2>
<p>
	<strong>
		Function Parameters:
	</strong>
	 Parameters are variables that are used to pass data into a function. They allow functions to work with different inputs.
</p>
<pre>
	<code class="python">
{`# Function with parameters
def greet(name):
 print(f"Hello, {name}!")
# Calling the function with an argument
greet("John") # Output: "Hello, John!"
# Function with return value
def add(a, b):
 return a + b
# Calling the function and storing the result
result = add(3, 5)
print(result) # Output: 8`}
	</code>
</pre>
<h2>
	Built-in Functions vs. User-defined Functions
</h2>
<p>
	<strong>
		Built-in Functions:
	</strong>
	 Python provides a set of built-in functions that are available for use without the need for explicit definition. Examples of built-in functions include
	<code>
		print()
	</code>
	,
	<code>
		len()
	</code>
	, and
	<code>
		input()
	</code>
	.
</p>
<pre>
	<code class="python">
{`# Built-in function example
length = len("Hello, World!")
print(length) # Output: 13
# User-defined function example (from the previous section)
def add(a, b):
 return a + b
result = add(3, 5)
print(result) # Output: 8`}
	</code>
</pre>
<h2>
	Organizing Code into Modules and Importing them
</h2>
<p>
	<strong>
		Modules:
	</strong>
	 Modules are separate files that contain Python code. They allow us to organize our code into logical units and promote reusability.
</p>
<pre>
	<code class="python">
{`# File: math_operations.py (user-defined module)
def add(a, b):
 return a + b
def subtract(a, b):
 return a - b
# File: main.py
# Importing the user-defined module
import math_operations
result_add = math_operations.add(3, 5)
result_subtract = math_operations.subtract(10, 4)
print(result_add) # Output: 8
print(result_subtract) # Output: 6 `}
	</code>
</pre>

      </div>
  
      <Footer />
    </Fragment>
  );

  export default PythonChapter4