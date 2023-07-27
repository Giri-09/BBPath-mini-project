import React, { Fragment } from 'react';
import CustomNavbar  from '../Navbar';
import Footer  from '../Footer';

import "./index.css";

const PythonChapter6 = () => (
    <Fragment>
      <CustomNavbar />
      <div className='content-bg'>
        <h2>Chapter 6: Object-Oriented Programming (OOP)</h2>
        <h2>
	Understanding Classes and Objects
</h2>
<p>
	<strong>
		Classes and Objects:
	</strong>
	 Classes are blueprints for creating objects, which are instances of the class. Classes define the properties (attributes) and behaviors (methods) that objects of that class will have.
</p>
<h2>
	Creating and Using Classes in Python
</h2>
<p>
	<strong>
		Creating Classes:
	</strong>
	 In Python, classes are created using the
	<code>
		class
	</code>
	 keyword followed by the class name and a colon. The class can have attributes (data members) and methods (functions).
</p>
<pre>
	<code class="python">
{`class Dog:
 # Class attribute
 species = "mammal"
 # Constructor (initializer)
 def __init__(self, name, age):
 # Instance attributes
 self.name = name
 self.age = age
 # Method
 def bark(self):
 return "Woof!"
# Creating objects of the class
dog1 = Dog("Buddy", 2)
dog2 = Dog("Max", 3)
# Accessing attributes and calling methods of objects
print(dog1.name) # Output: "Buddy"
print(dog2.age) # Output: 3
print(dog1.bark()) # Output: "Woof!"`}
	</code>
</pre>
<h2>
	Inheritance and Polymorphism
</h2>
<p>
	<strong>
		Inheritance:
	</strong>
	 Inheritance allows a class (subclass) to inherit properties and behaviors from another class (superclass). This promotes code reuse and helps create a hierarchical relationship between classes.
</p>
<p>
	<strong>
		Polymorphism:
	</strong>
	 Polymorphism allows objects of different classes to be treated as objects of a common superclass. It enables a single interface to represent different types of objects.
</p>
<pre>
	<code class="python">
{`# Parent class (superclass)
class Animal:
 def speak(self):
 pass
# Child classes (subclasses) inheriting from Animal
class Dog(Animal):
 def speak(self):
 return "Woof!"
class Cat(Animal):
 def speak(self):
 return "Meow!"
# Polymorphism in action
def animal_speak(animal):
 return animal.speak()
dog = Dog()
cat = Cat()
print(animal_speak(dog)) # Output: "Woof!"
print(animal_speak(cat)) # Output: "Meow!"`}
	</code>
</pre>
<h2>
	Encapsulation and Data Hiding
</h2>
<p>
	<strong>
		Encapsulation:
	</strong>
	 Encapsulation is the concept of bundling data (attributes) and methods that operate on the data within a single unit (the class). It helps protect data from unauthorized access and modification.
</p>
<p>
	<strong>
		Data Hiding:
	</strong>
	 Data hiding is achieved in Python by using private attributes (names starting with double underscores). These attributes are not directly accessible from outside the class.
</p>
<pre>
	<code class="python">
{`class Car:
 def __init__(self):
 self.__fuel = "Petrol" # Private attribute
 def get_fuel(self):
 return self.__fuel
 def set_fuel(self, fuel):
 self.__fuel = fuel
# Creating an object of the class
my_car = Car()
# Accessing private attribute using getter method
print(my_car.get_fuel()) # Output: "Petrol"
# Trying to access private attribute directly (will raise an AttributeError)
# print(my_car.__fuel)`}
	</code>
</pre>

      </div>
  
      <Footer />
    </Fragment>
  );

  export default PythonChapter6