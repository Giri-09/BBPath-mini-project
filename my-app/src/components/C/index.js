import React, { Fragment } from 'react';
import CustomNavbar  from '../Navbar';
import Footer  from '../Footer';

import "./index.css";

const C = () => (
    <Fragment>
      <CustomNavbar />
      <div className='python-bg'>
      <h1>
	C Programming Language - Basics and Examples
</h1>
<h2>
	Getting Started
</h2>
<p>
	<strong>
		Installing a C Compiler:
	</strong>
	 To get started with C programming, you need to install a C compiler. You can use GCC (GNU Compiler Collection) for most platforms.
</p>
<h2>
	Hello, World!
</h2>
<p>
	<strong>
		Example 1:
	</strong>
	 Write your first C program to print "Hello, World!" to the console.
</p>
<pre>
	<code class="language-c">
{`#include
int main() {
 printf("Hello, World!\n");
 return 0;
`}
	</code>
</pre>
<h2>
	Variables and Data Types
</h2>
<p>
	<strong>
		Example 2:
	</strong>
	 Declare and use variables with different data types in C.
</p>
<pre>
	<code class="language-c">
{`#include
int main() {
 int age = 25;
 float salary = 50000.50;
 char name[] = "John";
 printf("Name: %s, Age: %d, Salary: %.2f\n", name, age, salary);
 return 0;
`}
	</code>
</pre>
<h2>
	Control Flow Statements
</h2>
<p>
	<strong>
		Example 3:
	</strong>
	 Use control flow statements like if-else and loops in C for decision-making and repetition.
</p>
<pre>
	<code class="language-c">
{`#include
int main() {
 int num = 5;
 if (num &gt; 0) {
 printf("Positive\n");
 } else if (num &lt; 0) {
 printf("Negative\n");
 } else {
 printf("Zero\n");
 }
 for (int i = 1; i &lt;= 5; i++) {
 printf("Count: %d\n", i);
 }
 int counter = 0;
 while (counter &lt; 5) {
 printf("While loop: %d\n", counter);
 counter++;
 }
 return 0;
`}
	</code>
</pre>
<h2>
	Arrays
</h2>
<p>
	<strong>
		Example 4:
	</strong>
	 Use arrays to store multiple elements of the same data type.
</p>
<pre>
	<code class="language-c">
{`#include
int main() {
 int numbers[5] = {10, 20, 30, 40, 50};
 for (int i = 0; i &lt; 5; i++) {
 printf("Element %d: %d\n", i, numbers[i]);
 }
 return 0;
`}
	</code>
</pre>
<h2>
	Functions
</h2>
<p>
	<strong>
		Example 5:
	</strong>
	 Create and call functions to perform specific tasks in C.
</p>
<pre>
	<code class="language-c">
{`#include
int add(int a, int b) {
 return a + b;
}
int main() {
 int num1 = 10, num2 = 20;
 int result = add(num1, num2);
 printf("Sum: %d\n", result);
 return 0;
`}
	</code>
</pre>
<h2>
	Pointers
</h2>
<p>
	<strong>
		Example 6:
	</strong>
	 Understand pointers and use them to manipulate memory addresses in C.
</p>
<pre>
	<code class="language-c">
{`#include
int main() {
 int number = 10;
 int *ptr;
 ptr = &amp;number;
 printf("Value of number: %d\n", number);
 printf("Value at the address pointed by ptr: %d\n", *ptr);
 return 0;
`}
	</code>
</pre>
<h2>
	Structures
</h2>
<p>
	<strong>
		Example 7:
	</strong>
	 Define and use structures to create user-defined data types in C.
</p>
<pre>
	<code class="language-c">
{`#include
struct Student {
 char name[50];
 int roll_number;
 float marks;
};
int main() {
 struct Student student1;
 printf("Enter name: ");
 scanf("%s", student1.name);
 printf("Enter roll number: ");
 scanf("%d", &amp;student1.roll_number);
 printf("Enter marks: ");
 scanf("%f", &amp;student1.marks);
 printf("Student Details:\n");
 printf("Name: %s\n", student1.name);
 printf("Roll Number: %d\n", student1.roll_number);
 printf("Marks: %.2f\n", student1.marks);
 return 0;
`}
	</code>
</pre>
<h2>
	File I/O
</h2>
<p>
	<strong>
		Example 8:
	</strong>
	 Read from and write to files using file I/O operations in C.
</p>
<pre>
	<code class="language-c">
{`#include
int main() {
 // Writing to a file
 FILE *file = fopen("data.txt", "w");
 if (file != NULL) {
 fprintf(file, "Hello, File I/O!\n");
 fclose(file);
 }
 // Reading from a file
 file = fopen("data.txt", "r");
 if (file != NULL) {
 char buffer[100];
 while (fgets(buffer, sizeof(buffer), file) != NULL) {
 printf("%s", buffer);
 }
 fclose(file);
 }
 return 0;
`}
	</code>
</pre>


      </div>
  
      <Footer />
    </Fragment>
  );

  export default C