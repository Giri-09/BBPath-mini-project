
import React, { Fragment } from 'react';
import CustomNavbar  from '../Navbar';
import Footer  from '../Footer';

import "./index.css";

const SQL = () => (
    <Fragment>
      <CustomNavbar />
      <div className='python-bg'>
      <h2>
	Introduction to SQL
</h2>
<p>
	<strong>
		SQL:
	</strong>
	 SQL stands for Structured Query Language and is used for managing relational databases. It allows users to perform various operations, such as querying data, inserting, updating, and deleting records in a database.
</p>
<h2>
	SQL Database Creation and Table Creation
</h2>
<p>
	<strong>
		Example 1:
	</strong>
	 Create a new database and table in SQL.
</p>
<pre>
	<code class="language-sql">
		{`-- SQL commands to create a new database
		CREATE DATABASE mydatabase;
		-- SQL commands to use the newly created database
		USE mydatabase;
		-- SQL commands to create a new table
		CREATE TABLE employees (
		 id INT PRIMARY KEY AUTO_INCREMENT,
		 name VARCHAR(50) NOT NULL,
		 age INT,
		 department VARCHAR(50)
		);`}
	</code>
</pre>
<h2>
	SQL Data Insertion
</h2>
<p>
	<strong>
		Example 2:
	</strong>
	 Insert data into the employees table.
</p>
<pre>
	<code class="language-sql">
		{`-- SQL commands to insert data into the employees table
		INSERT INTO employees (name, age, department)
		VALUES ('John Doe', 30, 'IT'),
		 ('Jane Smith', 25, 'HR'),
		 ('Michael Johnson', 35, 'Finance');`}
	</code>
</pre>
<h2>
	SQL Data Retrieval
</h2>
<p>
	<strong>
		Example 3:
	</strong>
	 Retrieve data from the employees table using SELECT query.
</p>
<pre>
	<code class="language-sql">
		{`-- SQL commands to retrieve data from the employees table
		SELECT * FROM employees;
		-- SQL commands to retrieve specific columns
		SELECT name, age FROM employees;
		-- SQL commands to retrieve data with conditions
		SELECT * FROM employees WHERE department = 'IT';`}
	</code>
</pre>
<h2>
	SQL Data Update
</h2>
<p>
	<strong>
		Example 4:
	</strong>
	 Update data in the employees table.
</p>
<pre>
	<code class="language-sql">
		{`-- SQL commands to update data in the employees table
		UPDATE employees SET age = 32 WHERE name = 'John Doe';`}
	</code>
</pre>
<h2>
	SQL Data Deletion
</h2>
<p>
	<strong>
		Example 5:
	</strong>
	 Delete data from the employees table.
</p>
<pre>
	<code class="language-sql">
		{`-- SQL commands to delete data from the employees table
		DELETE FROM employees WHERE department = 'HR';`}
	</code>
</pre>
<h2>
	SQL Sorting and Limiting Results
</h2>
<p>
	<strong>
		Example 6:
	</strong>
	 Sort and limit the results of a SELECT query.
</p>
<pre>
	<code class="language-sql">
		{`-- SQL commands to retrieve data and sort it
		SELECT * FROM employees ORDER BY age DESC;
		-- SQL commands to retrieve data with a limit
		SELECT * FROM employees ORDER BY age DESC LIMIT 2;`}
	</code>
</pre>
<h2>
	SQL Aggregation and Grouping
</h2>
<p>
	<strong>
		Example 7:
	</strong>
	 Use aggregate functions and GROUP BY clause.
</p>
<pre>
	<code class="language-sql">
		{`-- SQL commands to retrieve total employees in each department
		SELECT department, COUNT(*) AS total_employees
		FROM employees
		GROUP BY department;`}
	</code>
</pre>
<h2>
	SQL Joins
</h2>
<p>
	<strong>
		Example 8:
	</strong>
	 Use INNER JOIN to combine data from multiple tables.
</p>
<pre>
	<code class="language-sql">
		{`-- SQL commands to retrieve employee names with department names
		SELECT employees.name AS employee_name, departments.name AS department_name
		FROM employees
		INNER JOIN departments ON employees.department_id = departments.id;`}
	</code>
</pre>
{`<!-- Continue adding more topics and examples as needed -->`}
<p>
	&nbsp;
</p>
{`<!-- Bootstrap JS and jQuery -->`}
<p>
	&nbsp;
</p>



      </div>
  
      <Footer />
    </Fragment>
  );

  export default SQL