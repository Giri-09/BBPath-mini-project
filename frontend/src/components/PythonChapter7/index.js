import React, { Fragment } from 'react';
import CustomNavbar  from '../Navbar';
import Footer  from '../Footer';

import "./index.css";

const PythonChapter7 = () => (
    <Fragment>
      <CustomNavbar />
      <div className='content-bg'>
        <h1>Chapter 7: Working with Modules and Packages</h1>
        <h2>Using Built-in Modules (math, random, datetime)</h2>
<p><strong>Built-in Modules:</strong> Python comes with a collection of built-in modules that provide additional functionality. Some commonly used built-in modules are math, random, and datetime.</p>
<h3>Math Module</h3>
<pre><code class="python">
		{`import math
		# Using math module functions
		x = 3.7
		print(math.ceil(x)) # Output: 4
		print(math.floor(x)) # Output: 3
		print(math.sqrt(x)) # Output: 1.9235384061671346`}
		 </code></pre>
<h3>Random Module</h3>
<pre><code class="python">
		{`import random
		# Using random module functions
		random_num = random.randint(1, 10)
		print(random_num) # Output: Random integer between 1 and 10 (inclusive)`}
		 </code></pre>
<h3>Datetime Module</h3>
<pre><code class="python">
		{`import datetime
		# Using datetime module functions
		current_time = datetime.datetime.now()
		print(current_time) # Output: Current date and time`}
		 </code></pre>
<h2>Installing and Importing Third-Party Packages using pip</h2>
<p><strong>Third-Party Packages:</strong> Python community provides a vast collection of third-party packages that extend Python's capabilities. You can install these packages using pip, the package manager for Python.</p>
<pre><code class="python">
		{`# Installing a third-party package using pip (e.g., requests)
		# Open your command prompt (terminal) and run the following command:
		# pip install requests`}
	</code></pre>
<pre><code class="python">
		{`# Importing a third-party package in your Python code
		import requests
		# Using requests to make a GET request to a URL
		response = requests.get("https://api.github.com/users/octocat")
		print(response.status_code) # Output: 200 (OK)
		print(response.json()["name"]) # Output: Octocat`}
		 </code></pre>
<h2>Creating Your Own Modules and Packages</h2>
<p><strong>Modules:</strong> You can create your own Python modules by defining functions and classes in separate .py files.</p>
<p><strong>Packages:</strong> Packages are directories containing multiple Python modules, and they require an empty file named __init__.py in the directory to be considered a package.</p>
<pre><code class="python">
		{`# Example of creating a module (file: my_module.py)
		def greeting(name):
		 return f"Hello, {name}!"`}
	</code></pre>
<pre><code class="python">
		{`# Example of creating a package (directory: my_package)
		# In my_package directory, create __init__.py and my_submodule.py files
		# Content of my_submodule.py
		def add(a, b):
		 return a + b`}
	</code></pre>
<pre><code class="python">
		{`# Using the created module and package
		import my_module
		from my_package import my_submodule
		print(my_module.greeting("John")) # Output: "Hello, John!"
		print(my_submodule.add(3, 5)) # Output: 8`}
		 </code></pre>
<h2>Managing Dependencies with Virtual Environments</h2>
<p><strong>Virtual Environments:</strong> Virtual environments help manage dependencies for different Python projects. They keep project-specific dependencies isolated, avoiding conflicts between different projects.</p>
<pre><code class="python">
		{`# Creating a virtual environment
		# Open your command prompt (terminal) and run the following command:
		# Windows:
		# python -m venv myenv
		# macOS/Linux:
		# python3 -m venv myenv
		# Activating the virtual environment
		# Windows:
		# myenv\Scripts\activate
		# macOS/Linux:
		# source myenv/bin/activate
		# Deactivating the virtual environment
		# deactivate`}
	</code></pre>
      </div>
  
      <Footer />
    </Fragment>
  );

  export default PythonChapter7