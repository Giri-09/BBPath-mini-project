import React, { Fragment } from 'react';
import CustomNavbar  from '../Navbar';
import Footer  from '../Footer';

import "./index.css";

const PythonChapter9 = () => (
    <Fragment>
      <CustomNavbar />
      <div className='content-bg'>
        <h2>Chapter 9: Introduction to Web Development with Python</h2>
        <h2>Basics of HTML, CSS, and JavaScript</h2>
<p><strong>HTML:</strong> HTML (HyperText Markup Language) is the standard markup language for creating web pages. It defines the structure and content of a web page using tags.</p>
<pre><code class="html">
		{`&lt;!DOCTYPE html&gt;
		&lt;html&gt;
		&lt;head&gt;
		 &lt;title&gt;My Web Page&lt;/title&gt;
		&lt;/head&gt;
		&lt;body&gt;
		 &lt;h1&gt;Hello, World!&lt;/h1&gt;
		 &lt;p&gt;This is a paragraph.&lt;/p&gt;
		&lt;/body&gt;
		&lt;/html&gt;`}
		 </code></pre>
<p><strong>CSS:</strong> CSS (Cascading Style Sheets) is used to style the HTML content and define how the web page elements should be displayed.</p>
<pre><code class="css">
		/* styles.css */
		body {`
		 font-family: Arial, sans-serif;
		`}
		h1 {`
		 color: blue;
		`}
		p {`
		 font-size: 16px;
		`}
		 </code></pre>
<p><strong>JavaScript:</strong> JavaScript is a scripting language that enables interactivity on web pages and can be used to add dynamic behavior to the HTML elements.</p>
<pre><code class="javascript">
	// script.js
		function showMessage() {`
		 alert("Hello, this is a JavaScript alert!");
		`}
		 </code></pre>
<h2>Web Frameworks (Django, Flask)</h2>
<p><strong>Django:</strong> Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. It provides a built-in admin interface, ORM, and follows the Model-View-Controller (MVC) architectural pattern.</p>
<pre><code class="python">
		# views.py (Django)
		from django.http import HttpResponse
		def hello(request):
		 return HttpResponse("Hello, Django!")
		 </code></pre>
<p><strong>Flask:</strong> Flask is a micro web framework written in Python. It is lightweight and easy to use, providing the basic tools needed to build a web application.</p>
<pre><code class="python">
		# app.py (Flask)
		from flask import Flask
		app = Flask(__name__)
		@app.route('/')
		def hello():
		 return "Hello, Flask!"
		 </code></pre>
<h2>Building a Simple Web Application using Python</h2>
<p>To build a simple web application using Python, we'll use Flask as an example. First, create a new directory for your project and create a virtual environment inside it.</p>
<pre><code class="shell">
		# Terminal commands
		mkdir my_project
		cd my_project
		python -m venv venv
	</code></pre>
<p>Activate the virtual environment and install Flask.</p>
<pre><code class="shell">
		# Terminal commands
		# Windows
		venv\Scripts\activate
		# macOS/Linux
		source venv/bin/activate
		pip install flask
	</code></pre>
<p>Create the app.py file in the project directory with the Flask code above.</p>
<pre><code class="python">
		# app.py
		from flask import Flask
		app = Flask(__name__)
		@app.route('/')
		def hello():
		 return "Hello, Flask!"
	</code></pre>
<p>Run the web application.</p>
<pre><code class="shell">
		# Terminal command
		python app.py
	</code></pre>
<p>Visit http://127.0.0.1:5000/ in your web browser to see the "Hello, Flask!" message.</p>
      </div>
  
      <Footer />
    </Fragment>
  );

  export default PythonChapter9

