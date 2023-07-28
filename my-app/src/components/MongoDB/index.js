
import React, { Fragment } from 'react';
import CustomNavbar  from '../Navbar';
import Footer  from '../Footer';

import "./index.css";

const MongoDB = () => (
    <Fragment>
      <CustomNavbar />
      <div className='python-bg'>
      <h2>
	Introduction to MongoDB
</h2>
<p>
	<strong>
		MongoDB:
	</strong>
	 MongoDB is a popular NoSQL database that stores data in JSON-like documents with dynamic schemas. It is known for its flexibility, scalability, and ease of use, making it a popular choice for modern web applications and big data solutions.
</p>
<h2>
	MongoDB Installation and Connection
</h2>
<p>
	<strong>
		Example 1:
	</strong>
	 Install MongoDB and connect to a local MongoDB server using MongoDB Shell.
</p>
<pre>
	<code class="language-javascript">
	{`// Start MongoDB server and open MongoDB Shell
		$ mongod
	// Connect to the local MongoDB server
		$ mongo`}
	</code>
</pre>
<h2>
	MongoDB Database Creation and Document Insertion
</h2>
<p>
	<strong>
		Example 2:
	</strong>
	 Create a new database and insert documents into a collection in MongoDB.
</p>
<pre>
	<code class="language-javascript">
	{`// Switch to a new database
		&gt; use mydatabase
	// Insert documents into a collection
		&gt; db.users.insertOne({ name: "John Doe", age: 30, email: "john@example.com" });
		&gt; db.users.insertOne({ name: "Jane Smith", age: 25, email: "jane@example.com" });
		&gt; db.users.insertOne({ name: "Michael Johnson", age: 35, email: "michael@example.com" });`}
	</code>
</pre>
<h2>
	MongoDB Document Retrieval
</h2>
<p>
	<strong>
		Example 3:
	</strong>
	 Retrieve documents from a collection in MongoDB.
</p>
<pre>
	<code class="language-javascript">
	{`// Retrieve all documents from the 'users' collection
		&gt; db.users.find()
	// Retrieve documents with a specific condition
		&gt; db.users.find({ age: { $gt: 30 } }) // Find users older than 30`}
	</code>
</pre>
<h2>
	MongoDB Document Update
</h2>
<p>
	<strong>
		Example 4:
	</strong>
	 Update documents in a collection in MongoDB.
</p>
<pre>
	<code class="language-javascript">
	{`// Update a document in the 'users' collection
		&gt; db.users.updateOne({ name: "John Doe" }, { $set: { age: 32 } })`}
	</code>
</pre>
<h2>
	MongoDB Document Deletion
</h2>
<p>
	<strong>
		Example 5:
	</strong>
	 Delete documents from a collection in MongoDB.
</p>
<pre>
	<code class="language-javascript">
	{`// Delete a document from the 'users' collection
		&gt; db.users.deleteOne({ name: "Jane Smith" })`}
	</code>
</pre>
<h2>
	MongoDB Indexes and Performance
</h2>
<p>
	<strong>
		Example 6:
	</strong>
	 Create and use indexes to improve query performance in MongoDB.
</p>
<pre>
	<code class="language-javascript">
	{`// Create an index on the 'name' field in the 'users' collection
		&gt; db.users.createIndex({ name: 1 })
	// Query using the index
		&gt; db.users.find({ name: "John Doe" })`}
	</code>
</pre>
<h2>
	MongoDB Aggregation Pipeline
</h2>
<p>
	<strong>
		Example 7:
	</strong>
	 Use the aggregation pipeline to perform data analysis in MongoDB.
</p>
<pre>
	<code class="language-javascript">
	{`// Aggregate and group data by department in the 'users' collection
		&gt; db.users.aggregate([
		 { $group: { _id: "$department", total_users: { $sum: 1 } } }
		])`}
	</code>
</pre>
<h2>
	MongoDB Replica Sets and High Availability
</h2>
<p>
	<strong>
		Example 8:
	</strong>
	 Set up a MongoDB replica set for data redundancy and high availability.
</p>
<pre>
	<code class="language-javascript">
	{`// Initialize replica set configuration
		&gt; rs.initiate()
	// Add replica set members (on separate MongoDB instances)
		&gt; rs.add("mongodb1.example.com:27017")
		&gt; rs.add("mongodb2.example.com:27017")`}
	</code>
</pre>



      </div>
  
      <Footer />
    </Fragment>
  );

  export default MongoDB