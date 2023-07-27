import React, { Fragment } from 'react';
import CustomNavbar  from '../Navbar';
import Footer  from '../Footer';

import "./index.css";

const PythonChapter3 = () => (
    <Fragment>
      <CustomNavbar />
      <div className='content-bg'>
        <h2>Chapter 3: Data Structures and Collections</h2>
        <h3>Lists</h3>
<p><strong>Lists:</strong> Lists are ordered, mutable collections in Python that can hold items of different data types. They are defined using square brackets [] and can be created empty or with initial elements.</p>
<pre><code class="python">
		{`# Creating a list
		fruits = ["apple", "banana", "orange", "grape"]
		# Accessing elements
		print(fruits[0]) # Output: "apple"
		print(fruits[2]) # Output: "orange"
		# Modifying elements
		fruits[1] = "kiwi"
		print(fruits) # Output: ["apple", "kiwi", "orange", "grape"]`}
		 </code></pre>
<h2>Tuples</h2>
<p><strong>Tuples:</strong> Tuples are ordered, immutable collections in Python that can hold items of different data types. They are defined using parentheses () and can be created with or without initial elements.</p>
<pre><code class="python">
		{`
        # Creating a tuple
		person = ("John Doe", 30, "New York")
		# Accessing elements
		print(person[0]) # Output: "John Doe"
		print(person[2]) # Output: "New York"
		# Tuples are immutable, so you cannot modify elements
		# person[1] = 35 # This will raise an error`}
		 </code></pre>
<h2>Dictionaries</h2>
<p><strong>Dictionaries:</strong> Dictionaries are unordered, mutable collections in Python that store items in key-value pairs. They are defined using curly braces {} and can be created empty or with initial key-value pairs.</p>
<pre><code class="python">
		# Creating a dictionary
		person = {`
		 "name": "John Doe",
		 "age": 30,
		 "city": "New York"
		`}
		# Accessing elements using keys
		{`print(person["name"]) # Output: "John Doe"
		print(person["age"]) # Output: 30
		# Modifying elements
		person["city"] = "San Francisco" `}
		print(person) # Output: {`'name': 'John Doe', 'age': 30, 'city': 'San Francisco'`}
		 </code></pre>
<h2>Sets</h2>
<p><strong>Sets:</strong> Sets are unordered collections in Python that store unique elements. They are defined using curly braces {} or the built-in set() function.</p>
<pre><code class="python">
		{`# Creating a set`}
		fruits = {`"apple", "banana", "orange", "banana"`} # Note: "banana" appears only once in the set`
		{`# Accessing elements (since sets are unordered, there is no specific index for elements)`}
		{`for fruit in fruits:
		 print(fruit)`}
		{`# Modifying elements (you can add or remove elements from a set)
		fruits.add("kiwi")
		fruits.remove("banana")`}
		`print(fruits) # Output: {`'orange', 'apple', 'kiwi'`}`
        
		 </code></pre>
      </div>
  
      <Footer />
    </Fragment>
  );

  export default PythonChapter3