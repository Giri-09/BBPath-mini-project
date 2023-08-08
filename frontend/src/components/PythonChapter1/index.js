import React, { Fragment } from 'react';
import CustomNavbar  from '../Navbar';
import Footer  from '../Footer';

import "./index.css";

const PythonChapter1 = () => (
    <Fragment>
      <CustomNavbar />
      <div className='content-bg'>
      <h1>What is Python?</h1>
        <p>
            Python is a high-level, versatile, and easy-to-learn programming language, known for its simplicity and readability.
            Guido van Rossum developed Python in the late 1980s, and it has since gained popularity in various fields due to its
            extensive standard library and strong community support. Python's flexibility allows developers to create anything from
            simple scripts to complex web applications and data analysis tools.
        </p>

        <h1>Installing Python on Different Platforms</h1>
        <p>
            Python can be installed on various platforms, including Windows, macOS, and Linux. Follow the appropriate steps for your
            operating system to install Python.
        </p>
        <ul>
            <li>Windows:
                <ol>
                    <li>Download the Python installer for Windows from the official website (https://www.python.org/downloads/windows/).</li>
                    <li>Run the installer and follow the installation wizard. Make sure to check the "Add Python x.x to PATH" option for easy access from the command prompt.</li>
                    <li>Verify the installation by opening a command prompt and typing "python" or "python --version".</li>
                </ol>
            </li>
            <li>macOS:
                <ol>
                    <li>macOS comes with a pre-installed version of Python. However, it is recommended to install the latest version using Homebrew or the official installer.</li>
                    <li>Open the Terminal and use Homebrew or download the installer from the official website (https://www.python.org/downloads/macos/) to install Python.</li>
                    <li>Verify the installation by opening a terminal and typing "python" or "python --version".</li>
                </ol>
            </li>
            <li>Linux:
                <ol>
                    <li>Most Linux distributions come with Python pre-installed. If not, you can use the package manager (apt, yum, etc.) to install Python.</li>
                    <li>Open a terminal and type the appropriate command for your package manager to install Python (e.g., "sudo apt-get install python" for Debian/Ubuntu).</li>
                    <li>Verify the installation by typing "python" or "python --version" in the terminal.</li>
                </ol>
            </li>
        </ul>

        <h1>Setting Up a Development Environment</h1>
        <p>
            After installing Python, you can set up your development environment with Integrated Development Environments (IDEs) or text editors.
            Here are some popular options:
        </p>
        <ul>
            <li>IDEs:
                <ul>
                    <li>PyCharm: A powerful Python IDE with features for professional developers. It offers code completion, debugging, testing, and version control integration.</li>
                    <li>Visual Studio Code: A lightweight code editor with Python support and a wide range of extensions. It offers an integrated terminal and debugging tools.</li>
                    <li>Spyder: A scientific Python development environment with data analysis capabilities. It provides an IPython console and variable explorer for data exploration.</li>
                </ul>
            </li>
            <li>Text Editors:
                <ul>
                    <li>Sublime Text: A popular text editor with Python syntax highlighting and extensive customization options. It supports numerous plugins for added functionality.</li>
                    <li>Atom: A hackable text editor with various Python-related packages and themes. It offers a highly customizable interface.</li>
                    <li>VSCode (Visual Studio Code): Also works as a text editor with Python support. It comes with an integrated terminal and extensions for Python development.</li>
                </ul>
            </li>
        </ul>

        <h1>Running Your First Python Program (Hello World!)</h1>
        <p>
            Let's write a simple "Hello World" program in Python to get started:
        </p>
        <pre><code class="language-python">
# Hello World in Python
print("Hello, World!")
        </code></pre>
        <p>
            Save the above code in a file with a ".py" extension (e.g., hello.py). Then, open a terminal or command prompt, navigate to
            the directory containing the file, and run the following command:
        </p>
        <pre><code>
python hello.py
        </code></pre>
        <p>
            You should see the output "Hello, World!" printed on the screen.
        </p>
   

      </div>
  
      <Footer />
    </Fragment>
  );

  export default PythonChapter1