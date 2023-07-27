import React, { Fragment } from 'react';
import CustomNavbar  from '../Navbar';
import Footer  from '../Footer';
import { Link } from 'react-router-dom'
import "./index.css";

const Python = () => (
    <Fragment>
      <CustomNavbar />
      <div className='python-bg'>
        <h2>Python</h2>
      <p>Introduction: Welcome to the world of Python programming! This comprehensive guide is designed for beginners who want to learn Python from scratch. Whether you're interested in web development, data analysis, artificial intelligence, or any other field, Python is a versatile and powerful programming language that can help you achieve your goals.</p>
<Link to="/cse-courses/programming/python/python-chapter-1" className="link-style"><p>Chapter 1: Getting Started with Python</p></Link>
<ul>
<li>What is Python?</li>
<li>Installing Python on different platforms (Windows, macOS, Linux)</li>
<li>Setting up a development environment (IDEs, text editors)</li>
<li>Running your first Python program (Hello World!)</li>
</ul>
<Link to="/cse-courses/programming/python/python-chapter-2" className="link-style"><p>Chapter 2:Python Basics</p></Link>
<ul>
<li>Variables, data types, and type conversion</li>
<li>Operators (arithmetic, assignment, comparison, logical)</li>
<li>Control flow statements (if, else, elif, loops)</li>
<li>Input and output (reading from and writing to the console)</li>
</ul>
<Link to="/cse-courses/programming/python/python-chapter-3" className="link-style"><p>Chapter 3: Data Structures and Collections</p></Link>
<ul>
<li>Lists: creating, accessing, and modifying elements</li>
<li>Tuples: immutable sequences</li>
<li>Dictionaries: key-value pairs</li>
<li>Sets: unordered collections of unique elements</li>
</ul>
<Link to="/cse-courses/programming/python/python-chapter-4" className="link-style"><p>Chapter 4: Functions and Modules</p></Link>
<ul>
<li>Defining and calling functions</li>
<li>Function parameters and return values</li>
<li>Built-in functions vs. user-defined functions</li>
<li>Organizing code into modules and importing them</li>
</ul>
<Link to="/cse-courses/programming/python/python-chapter-5" className="link-style"><p>Chapter 5: File Handling and Exception Handling</p></Link>
<ul>
<li>Reading from and writing to files</li>
<li>File modes (read, write, append)</li>
<li>Handling errors and exceptions using try-except blocks</li>
<li>Cleaning up resources with finally</li>
</ul>
<Link to="/cse-courses/programming/python/python-chapter-6" className="link-style"><p>Chapter 6: Object-Oriented Programming (OOP)</p></Link>
<ul>
<li>Understanding classes and objects</li>
<li>Creating and using classes in Python</li>
<li>Inheritance and polymorphism</li>
<li>Encapsulation and data hiding</li>
</ul>
<Link to="/cse-courses/programming/python/python-chapter-7" className="link-style"><p>Chapter 7: Working with Modules and Packages</p></Link>
<ul>
<li>Using built-in modules (math, random, datetime)</li>
<li>Installing and importing third-party packages using pip</li>
<li>Creating your own modules and packages</li>
<li>Managing dependencies with virtual environments</li>
</ul>
<Link to="/cse-courses/programming/python/python-chapter-8" className="link-style"><p>Chapter 8: Working with Files and Directories</p></Link>
<ul>
<li>Manipulating file paths and directories</li>
<li>Reading and writing text and binary files</li>
<li>File and directory management operations (deletion, renaming, copying)</li>
</ul>
<Link to="/cse-courses/programming/python/python-chapter-9" className="link-style"><p>Chapter 9: Introduction to Web Development with Python</p></Link>
<ul>
<li>Basics of HTML, CSS, and JavaScript</li>
<li>Web frameworks (Django, Flask)</li>
<li>Building a simple web application using Python</li>
</ul>
<Link to="/cse-courses/programming/python/python-chapter-10" className="link-style"><p>Chapter 10: Introduction to Data Science with Python</p></Link>
<ul>
<li>Libraries for data manipulation and analysis (NumPy, Pandas)</li>
<li>Data visualization with Matplotlib and Seaborn</li>
<li>Introduction to machine learning with scikit-learn</li>
</ul>

      </div>
  
      <Footer />
    </Fragment>
  );

  export default Python