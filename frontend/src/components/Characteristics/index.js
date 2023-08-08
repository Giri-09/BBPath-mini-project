import React, { Fragment } from 'react';
import CustomNavbar  from '../Navbar';
import Footer  from '../Footer';

import "./index.css";

const Characteristics = () => (
    <Fragment>
      <CustomNavbar />
      <div className='python-bg'>
        <h2>Characteristics</h2>
        
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <ul>
        <h4>1.Real world entity</h4> 
        <li>The reality of DBMS (Database Management System) is one of the most important and easily understandable characteristics. The DBMS (Database Management System) is developed in such a way that it can manage huge business organizations and store their business data with security</li>
<li>The Database can store information such as the cost of vegetables, milk, bread, etc. In DBMS (Database Management System), the entities look like real-world entities.</li>
<li>For example, if we want to create a student database, we need some entity. Any student stores their data.</li>
<li>In the Database, then, it should be the real-world entity. The most commonly used properties in the student database are name, age, gender, roll number, etc.</li>
</ul>
<ul>
<h4>2.Atomicity of Operations (Transactions)</h4> 
        <li>Here, atomicity means either the operation should be performed or not performed. i.e., it should complete the operation on 0% or 100%.
</li>
<li>Here DBMS (Database Management System) provides atomicity as a characteristic. This is the most important and useful characteristic of the DBMS (Database Management System). You can completely understand the atomicity with the help of the below example.</li>
<li>For example, every bank has its own Database, and the Database contains all the information about its customers. Let transaction is the most common atomic operation of the bank. If Sona wants to transfer 1000 rupees to the Archita account, it is possible with the help of the atomicity feature of the Database. If there is a problem in the Archita account, if there is a problem in the atomicity of the Database, then the money will be deducted from the Sona account but not credited to the Archita account.
</li>
<li>The Database has the feature of atomicity then; such transactions have not occurred at all, and if the transaction fails, then the money will automatically return to the sender account.
</li>
<li>Basically, for a successful transaction, the total operation depends on the Database. If the Database works perfectly, the transaction will be successful, and if the Database fails, the whole banking server will be down.</li>
</ul>
<ul>
<h4>3.Integrity</h4> 
        <li>Here the term integrity means the data should be correct and consistent in nature. Let's understand this by taking an example.</li>
<li>Let's say there is a bank named ABC bank, and ABC bank has its own Database for the storage of its customer data. If we try to enter the account details of ABC bank and the account details are not available in the bank, then the Database gives the incorrect output. However, if a customer changes their address but the new address is not updated in the Database, it is called data inconsistency.</li>
<li>So the data available in the Database should be correct as well as consistent.</li>
<li>If someone's account has zero balance and later the customer deposits 6000 rupees in his account, if the new account balance is not updated in the Database, it creates a problem for the customer.</li>

</ul>
<ul>
  <h4>4.ACID Properties
</h4>
  <li>The DBMS follows certain properties to maintain consistency in the Database. These properties are usually termed ACID Properties.</li>
  <li>However, we have already talked about some of these properties, but it is very important to mention the ACID properties as a whole.</li>
  <li>ACID stands for Atomicity, Consistency, Isolation, and Durability.</li>
  <li>We have already talked about atomicity and consistency. Atomicity means the transaction should either be 0% or 100% completed, and consistencymeans that the change in data should be reflected everywhere in a database.</li>
  <li>Isolation means that multiple transactions can occur independently without the interference of some other transactions.</li>
  <li>Durability means that the chances of a successful atomic transaction, i.e., a transaction that has been 100% completed, should reflect in the Database.</li>
</ul>

<ul>
  <h4>5.SQL and No-SQL Databases</h4>
  <li>There are two types of databases (not DBMS): SQL and No-SQL.</li>
  <li>The SQL databases store the data in the form of Tables, i.e., rows and columns. The No-SQL databases can store data in any form other than a table. For instance: the very popular MongoDB stores the data in the form of JSON (JavaScript Object Notation).</li>
  <li>The availability of SQL and No-SQL databases allows us to choose the method of storing the data as well.</li>
  <li>There should not be any debate between SQL and No-SQL databases. The one that we require for a particular project is better for that project, while the other might be better for some other use.</li>
  <li>This is a characteristic of DBMS because DBMS allows us to perform operations on both kinds of databases. So, we can run queries and operations on SQL as well as No-SQL databases.</li>
</ul>
<ul>
  <h4>6.Ease of Access (The DBMS Queries)</h4>
  <li>The file and folder system was used to store the data before the DBMS came to the market.</li>
  <li>Searching for the student's name was a very difficult task at that time. This is because every search operation is done manually in the file and folder system. But when DBMS comes into the market, it is very easy to access the Database.</li>
  <li>In DBMS, we can search any kind of stored data by applying a simple search operation query. It is so much faster than manual searching.</li>
  <li>In DBMS, there is a CRUD operation ( here CRUD means Create, Read, Update & Delete) by which we can implement all the types of query in the Database.</li>
</ul>
<ul>
  <h4>7.Security</h4>
  <li>The Database should be accessible to the users in a limited way.</li>
  <li>The access to make changes to a database by the user should be limited, and the users must not be given complete access to the entire Database.</li>
  <li>Unauthorized users should not be allowed to access the Database.</li>
  <li>Authentication: The DBMS has authentication for various users that directly refers to the limit to which the user can access the Database. Authentication means the process of laughing in of the user only with the rights that he/she has been authorized to. For instance, in any organization, the admin has access to make changes to the Database of the organization as some new employee might have joined the organization or someone might have left it. However, the employees have access only to their personal profiles and can make changes to them only. They cannot access the Database of any other employee or the organization as a whole.</li>
</ul>

      </div>
  
      <Footer />
    </Fragment>
  );

  export default Characteristics