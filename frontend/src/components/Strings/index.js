import React, { Fragment } from 'react';
import CustomNavbar  from '../Navbar';
import Footer  from '../Footer';

import "./index.css";

const Strings = () => (
    <Fragment>
      <CustomNavbar />
      <div className='python-bg'>
        <h2>Strings in C</h2>
      
<p>A String in C programming is a sequence of characters terminated with a null character ‘\0’. The C String is stored as an array of characters. The difference between a character array and a C string is the string is terminated with a unique character ‘\0’.
<img src="https://media.geeksforgeeks.org/wp-content/uploads/20230412184146/Strings-in-C.webp"/><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
</p>
<h4>C String declaration syntax</h4>
<p>Declaring a string in C is as simple as declaring a one-dimensional array. Below is the basic syntax for declaring a string.

</p>
<p>char string_name[size];</p>
<p>In the above syntax str_name is any name given to the string variable and size is used to define the length of the string, i.e the number of characters strings will store.</p>

<p>There is an extra terminating character which is the Null character (‘\0’) used to indicate the termination of a string that differs strings from normal character arrays.</p>
<h4>C Strings Initialization</h4>
<p>A string in C can be initialized in different ways. We will explain this with the help of an example. Below are the examples to declare a string with the name str and initialize it with “GeeksforGeeks”.


</p>
<pre>
  {`We can initialize a C string in 4 different ways which are as follows:

1. Assigning a string literal without size
String literals can be assigned without size. Here, the name of the string str acts as a pointer
because it is an array.

char str[] = "GeeksforGeeks";
2. Assigning a string literal with a predefined size
String literals can be assigned with a predefined size. But we should always account for one 
extra space which will be assigned to the null character. 
If we want to store a string of size n then we should always declare a string with a size equal
to or greater than n+1.

char str[50] = "GeeksforGeeks";
3. Assigning character by character with size
We can also assign a string character by character. But we should remember to set the end 
character as ‘\0’ which is a null character.

char str[14] = { 'G','e','e','k','s','f','o','r','G','e','e','k','s','\0'};
4. Assigning character by character without size
We can assign character by character without size with the NULL character at the end.
The size of the string is determined by the compiler automatically.

char str[] = { 'G','e','e','k','s','f','o','r','G','e','e','k','s','\0'};
`}
</pre>
<h4>C string example</h4>
<pre>
  {`
// C program to illustrate strings
 
#include <stdio.h>
#include <string.h>
 
int main()
{
    // declare and initialize string
    char str[] = "Geeks";
 
    // print string
    printf("%s", str);
 
    int length = 0;
    length = strlen(str);
 
    // displaying the length of string
    printf("Length of string str is %d", length);
 
    return 0;
}`}
</pre>
<h4>Read Strings from user</h4>
<pre>{`// C program to read string from user
#include<stdio.h>
   
int main()
{  
    // declaring string
    char str[50];
       
    // reading string
    scanf("%s",str);
       
    // print string
    printf("%s",str);
   
    return 0;
}`}</pre>
<h4>Representation of Stings</h4>
<img src = "https://media.geeksforgeeks.org/wp-content/uploads/20230412184222/strings-and-pointers.webp"/><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      </div>
  
      <Footer />
    </Fragment>
  );

  export default Strings