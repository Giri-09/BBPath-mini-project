import React, { Fragment } from 'react';
import CustomNavbar  from '../Navbar';
import Footer  from '../Footer';

import "./index.css";

const PythonChapter5 = () => (
    <Fragment>
      <CustomNavbar />
      <div className='content-bg'>
        <h2>Chapter 5: File Handling and Exception Handling</h2>
        <h2>Reading from and Writing to Files</h2>
<p><strong>File Handling:</strong> File handling is the process of reading data from files or writing data to files. Python provides built-in functions to work with files.</p>
<h4>Reading from a File:</h4>
<pre><code class="python">
		# Reading from a file
		with open("sample.txt", "r") as file:
		 content = file.read()
		 print(content)
		 </code></pre>
<h4>Writing to a File:</h4>
<pre><code class="python">
		# Writing to a file
		with open("output.txt", "w") as file:
		 file.write("Hello, this is a sample text.")
		 </code></pre>
<h2>File Modes (Read, Write, Append)</h2>
<p><strong>File Modes:</strong> File modes determine how the file is opened and accessed.</p>
<ul>
	<li><strong>"r":</strong> Read mode (default). It opens the file for reading.</li>
	<li><strong>"w":</strong> Write mode. It opens the file for writing, truncating the file if it already exists or creating a new file if it doesn't exist.</li>
	<li><strong>"a":</strong> Append mode. It opens the file for writing, but it appends data to the end of the file if it already exists.</li>
</ul>
<h2>Handling Errors and Exceptions using try-except blocks</h2>
<p><strong>Exceptions:</strong> Exceptions are errors that occur during the execution of a program. We can handle exceptions using try-except blocks to prevent the program from crashing.</p>
<pre><code class="python">
		{`# Handling exceptions
		try:
		 num1 = int(input("Enter a number: "))
		 num2 = int(input("Enter another number: "))
		 result = num1 / num2
		 print(f"The result is: {result}")
		except ValueError:
		 print("Invalid input. Please enter a valid number.")
		except ZeroDivisionError:
		 print("Error: Cannot divide by zero.")'`}
		 </code></pre>
<h2>Cleaning up Resources with finally</h2>
<p><strong>finally:</strong> The finally block is used to define a block of code that will be executed no matter what, whether an exception occurs or not.</p>
<pre><code class="python">
		{`# Using finally
		try:
		 # Code that may raise an exception
		 file = open("sample.txt", "r")
		 content = file.read()
		 print(content)
		except FileNotFoundError:
		 print("File not found.")
		finally:
		 file.close() # The file will be closed whether an exception occurs or not.`}
		 </code></pre>
      </div>
  
      <Footer />
    </Fragment>
  );

  export default PythonChapter5