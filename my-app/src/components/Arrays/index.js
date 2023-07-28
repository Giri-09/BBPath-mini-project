import React, { Fragment } from 'react';
import CustomNavbar  from '../Navbar';
import Footer  from '../Footer';

import "./index.css";

const Arrays = () => (
    <Fragment>
      <CustomNavbar />
      <div className='python-bg'>
        <h2>Arrays</h2>
       <center><img src ="https://media.geeksforgeeks.org/wp-content/uploads/20230302091959/Arrays-in-C.png"/></center><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>  
<p>Array in C is one of the most used data structures in C programming. It is a simple and fast way of storing multiple values under a single name. In this article, we will study the different aspects of array in C language such as array declaration, definition, initialization, types of arrays, array syntax, advantages and disadvantages, and many more.</p>
<div>
     <p>An array in C is a fixed-size collection of similar data items stored in contiguous memory locations. It can be used to store the collection of primitive data types such as int, char, float, etc., and also derived and user-defined data types such as pointers, structures, etc.</p>

     
      <h4>C Array Declaration</h4>
      <p>In C, we have to declare the array like any other variable before using it. We can declare an array by specifying its name, the type of its elements, and the size of its dimensions. When we declare an array in C, the compiler allocates the memory block of the specified size to the array name.</p>
      <h6>Syntax of Array Declaration</h6>
      <p>data_type array_name [size];</p>
  
<p>data_type array_name [size1] [size2]...[sizeN];</p>
<p>where N is the number of dimensions.</p>
<p>The C arrays are static in nature, i.e., they are allocated memory at the compile time.</p>
</div>
<img src ="https://media.geeksforgeeks.org/wp-content/uploads/20230302091959/Arrays-in-C.png"/><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<h6>Example of array declaration</h6>
<div className="box">
<pre>
  {` #include <stdio.h>
int main()
{
 
    // declaring array of integers
    int arr_int[5];
    // declaring array of characters
    char arr_char[5];
 
    return 0;
}`}



</pre>

</div>
<h4>C Array Initialization</h4>
<img src = "https://media.geeksforgeeks.org/wp-content/uploads/20230302092653/C-array-initialization.png"/><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<p>In this method, we initialize the array along with its declaration. We use an initializer list to initialize multiple elements of the array. An initializer list is the list of values enclosed within braces { } separated b a comma</p>
<p><pre>{`data_type array_name [size] = {value1, value2, ... valueN};
Ex:
data_type array_name[] = {1,2,3,4,5};`}
</pre></p>
<h4>Access Array Elements</h4>
<img src = "https://media.geeksforgeeks.org/wp-content/uploads/20230302092738/access-array-elements.png"/><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<p>We can access any element of an array in C using the array subscript operator [ ]  and the index value i of the element.

array_name [index];

One thing to note is that the indexing in the array always starts with 0, i.e., the first element is at index 0 and the last element is at N – 1 where N is the number of elements in the array.</p>
<p>Example of array accessing</p>
<pre>
  {` 
// C Program to illustrate element access using array
// subscript
#include <stdio.h>
 
int main()
{
 
    // array declaration and initialization
    int arr[5] = { 15, 25, 35, 45, 55 };
 
    // accessing element at index 2 i.e 3rd element
    printf("Element at arr[2]: %d", arr[2]);
 
    // accessing element at index 4 i.e last element
    printf("Element at arr[4]: %d", arr[4]);
 
    // accessing element at index 0 i.e first element
    printf("Element at arr[0]: %d", arr[0]);
 
    return 0;
}`}



</pre>
<h4>Advantages of Array in C</h4>
<p>The following are the main advantages of an array:</p>

<p>1.Random and fast access of elements using the array index.</p>
<p>2.Use of fewer lines of code as it creates a single array of multiple elements.</p>
<p>3.Traversal through the array becomes easy using a single loop.</p>
<p>4.Sorting becomes easy as it can be accomplished by writing fewer lines of code.</p>
<h4>Disadvantages of Arrays in c</h4>
<p>1.Allows a fixed number of elements to be entered which is decided at the time of declaration. Unlike a linked list, an array in C is not dynamic.</p>
<p>2.Insertion and deletion of elements can be costly since the elements are needed to be rearranged after insertion and deletion.</p>
      </div>
      <Footer />
    </Fragment>
  );

  export default Arrays