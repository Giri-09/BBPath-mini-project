import React, { Fragment } from 'react';
import CustomNavbar  from '../Navbar';
import Footer  from '../Footer';

import "./index.css";

const Java = () => (
    <Fragment>
      <CustomNavbar />
      <div className='python-bg'>
        
        <h1>Java Programming - Basics and Examples</h1>
<h2>Getting Started</h2>
<p><strong>Installing Java:</strong> Download and install the latest Java Development Kit (JDK) from the official Oracle website or use OpenJDK, an open-source alternative.</p>
<h2>Hello, World!</h2>
<p><strong>Example 1:</strong> Write your first Java program to print "Hello, World!" to the console.</p>
<pre><code class="java">
		{`public class HelloWorld {
		 public static void main(String[] args) {
		 System.out.println("Hello, World!");
		 }
		`}
		 </code></pre>
<h2>Variables and Data Types</h2>
<p><strong>Example 2:</strong> Declare and use variables with different data types.</p>
<pre><code class="java">
		{`public class VariablesExample {
		 public static void main(String[] args) {
		 int age = 25;
		 double salary = 50000.50;
		 String name = "John";
		 System.out.println("Name: " + name + ", Age: " + age + ", Salary: " + salary);
		 }
		`}
		 </code></pre>
<h2>Control Flow Statements</h2>
<p><strong>Example 3:</strong> Use control flow statements like if-else and loops for decision-making and repetition.</p>
<pre><code class="java">
		{`public class ControlFlowExample {
		 public static void main(String[] args) {
		 int num = 5;
		 if (num &gt; 0) {
		 System.out.println("Positive");
		 } else if (num &lt; 0) {
		 System.out.println("Negative");
		 } else {
		 System.out.println("Zero");
		 }
		 for (int i = 1; i &lt;= 5; i++) {
		 System.out.println("Count: " + i);
		 }
		 int counter = 0;
		 while (counter &lt; 5) {
		 System.out.println("While loop: " + counter);
		 counter++;
		 }
		 }
		`}
		 </code></pre>
<h2>Object-Oriented Programming (OOP)</h2>
<p><strong>Example 4:</strong> Understand classes, objects, constructors, and methods in Java.</p>
<pre><code class="java">
		{`public class Car {
		 String brand;
		 String model;
		 int year;
		 public Car(String brand, String model, int year) {
		 this.brand = brand;
		 this.model = model;
		 this.year = year;
		 }
		 public void start() {
		 System.out.println("Starting the car...");
		 }
		}
		public class Main {
		 public static void main(String[] args) {
		 Car myCar = new Car("Toyota", "Corolla", 2021);
		 System.out.println("Brand: " + myCar.brand + ", Model: " + myCar.model + ", Year: " + myCar.year);
		 myCar.start();
		 }
		`}
		 </code></pre>
<h2>Exception Handling</h2>
<p><strong>Example 5:</strong> Handle errors and exceptions gracefully using try-catch blocks.</p>
<pre><code class="java">
		{`public class ExceptionHandlingExample {
		 public static void main(String[] args) {
		 int num1 = 10;
		 int num2 = 0;
		 try {
		 int result = num1 / num2;
		 System.out.println("Result: " + result);
		 } catch (ArithmeticException e) {
		 System.out.println("Error: " + e.getMessage());
		 }
		 }
		`}
		 </code></pre>

      </div>
  
      <Footer />
    </Fragment>
  );

  export default Java