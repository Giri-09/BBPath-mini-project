import React, { Fragment } from 'react';
import CustomNavbar  from '../Navbar';
import Footer  from '../Footer';

import "./index.css";

const HTML = () => (
    <Fragment>
      <CustomNavbar />
      <div className='python-bg'>
      <h2>
	Introduction to HTML
      </h2>
      <p>
        <strong>
          HTML:
        </strong>
        HyperText Markup Language is the standard markup language for creating web pages. It uses tags to structure content and provide meaning to elements on a web page.
      </p>
      <h2>
        Basic HTML Structure
      </h2>
      <p>
        <strong>
          Example 1:
        </strong>
        A simple HTML page structure with headings and paragraphs.
      </p>
      <pre>
        <code class="html">
              My Web Page
        </code>
      </pre>
      {`<h1>
        Welcome to My Web Page
      </h1>
      <p>
        This is a simple web page.
      </p>`}
      <h2>
        HTML Elements and Tags
      </h2>
      <p>
        <strong>
          Example 2:
        </strong>
        Common HTML elements and tags for headings, paragraphs, links, images, and lists.
      </p>
      <pre>
        <code class="html">
              HTML Elements and Tags
        </code>
      </pre>
      {`<h1>
        Heading 1
      </h1>
      <h2>
        Heading 2
      </h2>
      <h3>
        Heading 3
      </h3>
      <p>
        This is a paragraph.
      </p>
      <pre>
        <code class="html">
          <a href="https://www.example.com">
                  Visit Example
          </a>
          <img src="image.jpg" alt="Image" />
        </code>
      </pre>
      <ul>
        <li>
          Item 1
        </li>
        <li>
          Item 2
        </li>
        <li>
          Item 3
        </li>
      </ul>
      <ol>
        <li>
          First
        </li>
        <li>
          Second
        </li>
        <li>
          Third
        </li>
      </ol>`}
      <h2>
        HTML Forms
      </h2>
      <p>
        <strong>
          Example 3:
        </strong>
        Create a simple HTML form with input fields and a submit button.
      </p>
      <pre>
        <code class="html">
              HTML Form Example
        </code>
      </pre>
      {`<h2>
        Enter your name:
      </h2>
      <form action="/submit" method="post">
        <label for="name">
          Name:
        </label>
        <input id="name" name="name" required="" type="text" />
        <label for="email">
          Email:
        </label>
        <input id="email" name="email" required="" type="email" />
        <input type="submit" value="Submit" />
      </form> `}
      <h2>
        HTML Tables
      </h2>
      <p>
        <strong>
          Example 4:
        </strong>
        Create a simple HTML table with headers and data.
      </p>
      <pre>
        <code class="html">
              HTML Table Example
        </code>
      </pre>
      {`<h2>
        Student Information
      </h2>
      <table>
        <thead>
          <tr>
            <th>
              Name
            </th>
            <th>
              Roll Number
            </th>
            <th>
              Age
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              John
            </td>
            <td>
              101
            </td>
            <td>
              20
            </td>
          </tr>
          <tr>
            <td>
              Mary
            </td>
            <td>
              102
            </td>
            <td>
              21
            </td>
          </tr>
          <tr>
            <td>
              Michael
            </td>
            <td>
              103
            </td>
            <td>
              19
            </td>
          </tr>
        </tbody>
      </table> `}
      <h2>
        HTML Semantic Elements
      </h2>
      <p>
        <strong>
          Example 5:
        </strong>
        Use semantic elements to add meaning and structure to the web page.
      </p>
      <pre>
        <code class="html">
              HTML Semantic Elements Example
        </code>
      </pre>
      {`<header>
        <h1>
          Welcome to My Website
        </h1>
        <nav>
          <ul>
            <li>
              <a href="#">
                Home
              </a>
            </li>
            <li>
              <a href="#">
                About
              </a>
            </li>
            <li>
              <a href="#">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <section>
        <h2>
          About Us
        </h2>
        <p>
          This is the about section of the website.
        </p>
      </section>
      <section>
        <h2>
          Contact Us
        </h2>
        <p>
          This is the contact section of the website.
        </p>
      </section>
      <footer>
        <p>
          &copy; 2023 My Website. All rights reserved.
        </p>
      </footer>`}
      <h2>
        HTML Media Elements
      </h2>
      <p>
        <strong>
          Example 6:
        </strong>
        Use HTML media elements to embed audio and video content.
      </p>
      <pre>
        <code class="html">
              HTML Media Elements Example
        </code>
      </pre>
      <h2>
        Video Example
      </h2>
      <pre>
        <code class="html">
          {`<video controls="controls" width="300" height="150">
            <source src="video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
          </video>`}
        </code>
      </pre>

      <h2>
        Audio Example
      </h2>
      <pre>
        <code class="html">
          {`<audio controls="controls">
            <source src="audio.mp3" type="audio/mpeg" />
                  Your browser does not support the audio tag.
          </audio>`}
        </code>
      </pre>
      <h2>
        HTML Forms - Input Types
      </h2>
      <p>
        <strong>
          Example 7:
        </strong>
        Create an HTML form with various input types.
      </p>
      <pre>
        <code class="html">
              HTML Form Input Types Example
        </code>
      </pre>
      <h2>
        User Registration
      </h2>
      {`
      <form action="/register" method="post">
        <label for="name">
          Name:
        </label>
        <input id="name" name="name" required="" type="text" />
        <label for="email">
          Email:
        </label>
        <input id="email" name="email" required="" type="email" />
        <label for="password">
          Password:
        </label>
        <input id="password" name="password" required="" type="password" />
        <label for="birthdate">
          Birthdate:
        </label>
        <input id="birthdate" name="birthdate" required="" type="date" />
        <label for="gender">
          Gender:
        </label>
        <input id="male" name="gender" required="" type="radio" value="male" />
        <label for="male">
          Male
        </label>
        <input id="female" name="gender" required="" type="radio" value="female" />
        <label for="female">
          Female
        </label>
        <label for="interests">
          Interests:
        </label>
        <input id="sports" name="interests" type="checkbox" value="sports" />
        <label for="sports">
          Sports
        </label>
        <input id="music" name="interests" type="checkbox" value="music" />
        <label for="music">
          Music
        </label>
        <input type="submit" value="Register" />
      </form>`}


      </div>
  
      <Footer />
    </Fragment>
  );

  export default HTML