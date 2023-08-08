import React, { Fragment } from 'react';
import CustomNavbar  from '../Navbar';
import Footer  from '../Footer';

import "./index.css";

const PythonChapter2 = () => (
    <Fragment>
      <CustomNavbar />
      <div className='content-bg'>
        <h2>Chapter 2:Python Basics</h2>
        <h2>Variables, Data Types, and Type Conversion</h2>
<p><strong>Variables:</strong> In programming, a variable is a named storage location used to hold data during the program's execution. Variables allow us to store and manipulate data dynamically. They can represent different types of data, such as numbers, text, and more complex structures. In Python, variables are created when you assign a value to them.</p>
<pre><code class="python">
		# Creating a variable named 'age' and assigning it a value of 25
		age = 25
		 </code></pre>
<p><strong>Data Types:</strong> Data types define the type of data that a variable can hold. Python is a dynamically-typed language, which means you don't need to explicitly declare the data type of a variable. Instead, Python automatically infers the data type based on the value assigned to the variable.</p>
<pre><code class="python">
		{`# Integer variable
		age = 25
		# Float variable
		pi = 3.14
		# String variable
		name = "John Doe"
		# Boolean variable
		is_student = True`}
		 </code></pre>
<p><strong>Type Conversion:</strong> Type conversion (also known as type casting) is the process of changing the data type of a variable from one type to another. Python provides built-in functions to convert between different data types.</p>
<pre><code class="python">
		{`# Integer to float conversion
		num_int = 42
		num_float = float(num_int) # Result: 42.0
		# Float to integer conversion
		pi = 3.14
		approx_pi = int(pi) # Result: 3
		# String to integer conversion
		num_str = "123"
		num_int = int(num_str) # Result: 123
		# Integer to string conversion
		num_int = 456
		num_str = str(num_int) # Result: "456"`}
		 </code></pre>
<h2>Operators</h2>
<p>Operators are symbols that perform operations on variables and values.</p>
<h4>Arithmetic Operators:</h4>
<pre><code class="python">
		{`a = 10
		b = 3
		add_result = a + b # Result: 13
		sub_result = a - b # Result: 7
		mul_result = a * b # Result: 30
		div_result = a / b # Result: 3.333...
		mod_result = a % b # Result: 1
		exp_result = a ** b # Result: 1000
		floor_div_result = a // b # Result: 3`}
		 </code></pre>
<h4>Assignment Operators:</h4>
<pre><code class="python">
		{`x = 10
		x += 5 # Equivalent to: x = x + 5, Result: 15
		x -= 3 # Equivalent to: x = x - 3, Result: 12
		x *= 2 # Equivalent to: x = x * 2, Result: 24
		x /= 6 # Equivalent to: x = x / 6, Result: 4.0
		x %= 3 # Equivalent to: x = x % 3, Result: 1
		x **= 2 # Equivalent to: x = x ** 2, Result: 1
		x //= 2 # Equivalent to: x = x // 2, Result: 0`}
		 </code></pre>
<h4>Comparison Operators:</h4>
<pre><code class="python">
		{`a = 10
		b = 5
		equals_result = a == b # Result: False
		not_equals_result = a != b # Result: True
		greater_than_result = a &gt; b # Result: True
		less_than_result = a &lt; b # Result: False
		greater_or_equal_result = a &gt;= b # Result: True
		less_or_equal_result = a &lt;= b # Result: False`}
		 </code></pre>
<h4>Logical Operators:</h4>
<pre><code class="python">
		{`x = 5
		y = 10
		result1 = (x &gt; 0) and (y &gt; 0) # Result: True
		result2 = (x &gt; 0) or (y &gt; 0) # Result: True
		result3 = not (x &gt; 0) # Result: False`}
		 </code></pre>
<h2>Control Flow Statements</h2>
<p>Control flow statements allow you to control the execution flow of a program based on certain conditions.</p>
<h4>If, Else, and Elif:</h4>
<pre><code class="python">
		{`x = 10
		if x &gt; 5:
		 print("x is greater than 5")
		age = 18
		if age &gt;= 18:
		 print("You are an adult")
		else:
		 print("You are a minor")
		score = 75
		if score &gt;= 90:
		 print("Excellent")
		elif score &gt;= 70:
		 print("Good")
		else:
		 print("Keep it up")`}
		 </code></pre>
<h4>Loops:</h4>
<p>Loops are used to execute a block of code repeatedly as long as a specified condition is true.</p>
<h6>While Loop:</h6>
<pre>
		{`count = 1
		while count &lt;= 5:
		 print(f"Count: {count}")
		 count += 1`}
		</pre>
<h6>For Loop:</h6>
<pre><code class="python">
		{`fruits = ["apple", "banana", "orange"]
		for fruit in fruits:
		 print(f"Current fruit: {fruit}")`}
		 </code></pre>
<h2>Input and Output (Reading from and Writing to the Console)</h2>
<p>Python provides built-in functions to read input from the user and display output to the console.</p>
<h6>Reading Input:</h6>
<pre><code class="python">
		{`# Reading user input
		name = input("Enter your name: ")
		age = int(input("Enter your age: ")) # Converting input to an integer
		print(f"Hello, {name}! You`}
	</code></pre>
      </div>
  
      <Footer />
    </Fragment>
  );

  export default PythonChapter2