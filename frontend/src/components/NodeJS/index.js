
import React, { Fragment } from 'react';
import CustomNavbar  from '../Navbar';
import Footer  from '../Footer';

import "./index.css";

const NodeJS = () => (
    <Fragment>
      <CustomNavbar />
      <div className='python-bg'>
      <h2>
	Introduction to Node.js
</h2>
<p>
	<strong>
		Node.js:
	</strong>
	 Node.js is an open-source server-side runtime environment built on Chrome's V8 JavaScript engine. It allows you to run JavaScript code outside the browser, making it ideal for creating server-side applications, command-line tools, and more.
</p>
<h2>
	Node.js Installation and Setup
</h2>
<p>
	<strong>
		Example 1:
	</strong>
	 Install Node.js and verify the installation using Node.js REPL.
</p>
<pre>
	<code class="language-javascript">
	{`// Download Node.js from the official website and install it on your machine.
	// Open your terminal or command prompt and type 'node' to start the Node.js REPL.
		$ node`}
	</code>
</pre>
<h2>
	Node.js Hello World
</h2>
<p>
	<strong>
		Example 2:
	</strong>
	 Create a simple Node.js script to print "Hello, World!" to the console.
</p>
<pre>
	<code class="language-javascript">
	{`// Create a file named 'hello.js' and add the following code.
	// Run the script using 'node hello.js' in the terminal or command prompt.
	// hello.js
		console.log("Hello, World!");`}
	</code>
</pre>
<h2>
	Node.js Modules and Built-in Modules
</h2>
<p>
	<strong>
		Example 3:
	</strong>
	 Create a Node.js module and use built-in modules like 'fs' for file system operations.
</p>
<pre>
	<code class="language-javascript">
	{`// Create a file named 'myModule.js' and add the following code.
	// Create another file named 'app.js' to use the custom module and built-in module.
	// myModule.js
		const myFunction = () =&gt; {
		 return "This is a custom module.";
		};
		module.exports = myFunction;
	// app.js
		const fs = require('fs');
		const myModule = require('./myModule');
		console.log(myModule());
		fs.writeFileSync('output.txt', 'Data written to the file.');`}
	</code>
</pre>
<h2>
	Asynchronous Programming in Node.js
</h2>
<p>
	<strong>
		Example 4:
	</strong>
	 Demonstrate asynchronous file reading and writing in Node.js.
</p>
<pre>
	<code class="language-javascript">
	{`// app.js
		const fs = require('fs');
	// Asynchronous file reading
		fs.readFile('input.txt', 'utf8', (err, data) =&gt; {
		 if (err) {
		 console.error('Error reading the file.');
		 } else {
		 console.log('File content:');
		 console.log(data);
		 }
		});
	// Asynchronous file writing
		const content = 'Data written asynchronously to the file.';
		fs.writeFile('output.txt', content, (err) =&gt; {
		 if (err) {
		 console.error('Error writing to the file.');
		 } else {
		 console.log('Data written to the file successfully.');
		 }
		});`}
	</code>
</pre>
<h2>
	Using Express.js for Web Applications
</h2>
<p>
	<strong>
		Example 5:
	</strong>
	 Create a simple web application using Express.js.
</p>
<pre>
	<code class="language-javascript">
	{`// Install Express.js using npm: npm install express
	// Create a file named 'app.js' and add the following code.
	// app.js
		const express = require('express');
		const app = express();
		const port = 3000;`}
	{`// Route to handle GET request at the root URL
		app.get('/', (req, res) =&gt; {
		 res.send('Hello, this is a simple web application using Express.js!');
		});`}
	{`// Start the server
		app.listen(port, () =&gt; {`}
		
	</code>
</pre>
<h2>
	Connecting to MongoDB in Node.js
</h2>
<p>
	<strong>
		Example 6:
	</strong>
	 Connect to a MongoDB database using the 'mongodb' package in Node.js.
</p>
<pre>
	<code class="language-javascript">
	{`// Install MongoDB package using npm: npm install mongodb
	// Create a file named 'db.js' to handle database connection and add the following code.
	// db.js
		const { MongoClient } = require('mongodb');
		const uri = 'mongodb://localhost:27017';
		const client = new MongoClient(uri, { useUnifiedTopology: true });
		async function connectToDatabase() {
		 try {
		 await client.connect();
		 console.log('Connected to MongoDB database!');
		 return client.db('mydatabase');
		 } catch (err) {
		 console.error('Error connecting to the database:', err);
		 return null;
		 }
		}
		module.exports = connectToDatabase;`}
	</code>
</pre>



      </div>
  
      <Footer />
    </Fragment>
  );

  export default NodeJS