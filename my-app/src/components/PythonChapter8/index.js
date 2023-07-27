import React, { Fragment } from 'react';
import CustomNavbar  from '../Navbar';
import Footer  from '../Footer';

import "./index.css";

const PythonChapter8 = () => (
    <Fragment>
      <CustomNavbar />
      <div className='content-bg'>
        <h2>Chapter 8: Working with Files and Directories</h2>
        <h2>
	Manipulating File Paths and Directories
</h2>
<p>
	<strong>
		File Paths:
	</strong>
	 Python's
	<code>
		os.path
	</code>
	 module provides functions for manipulating file paths and directory paths.
</p>
<pre>
	<code class="python">
{`import os
# Joining file paths
folder = "documents"
file_name = "example.txt"
file_path = os.path.join(folder, file_name)
print(file_path) # Output: "documents/example.txt"
# Getting the base name (file name with extension) from a path
base_name = os.path.basename(file_path)
print(base_name) # Output: "example.txt"
# Getting the directory name from a path
directory_name = os.path.dirname(file_path)
print(directory_name) # Output: "documents"
# Checking if a path exists
path_exists = os.path.exists(file_path)
print(path_exists) # Output: True or False`}
	</code>
</pre>
<h2>
	Reading and Writing Text and Binary Files
</h2>
<p>
	<strong>
		Text Files:
	</strong>
	 Text files store data in plain text format and can be read or written using Python's built-in functions.
</p>
<pre>
	<code class="python">
{`# Reading text from a file
with open("sample.txt", "r") as file:
 content = file.read()
 print(content)
# Writing text to a file
with open("output.txt", "w") as file:
 file.write("Hello, this is a sample text.")`}
	</code>
</pre>
<p>
	<strong>
		Binary Files:
	</strong>
	 Binary files store data in a format that may not be human-readable. They are read or written using the appropriate file mode.
</p>
<pre>
	<code class="python">
{`# Reading binary data from a file
with open("image.jpg", "rb") as file:
 binary_data = file.read()
 # Process binary data as needed
# Writing binary data to a file
with open("output.jpg", "wb") as file:
 # binary_data contains binary content to write
 file.write(binary_data)`}
	</code>
</pre>
<h2>
	File and Directory Management Operations
</h2>
<p>
	<strong>
		Deletion:
	</strong>
	 Python's
	<code>
		os.remove()
	</code>
	 function is used to delete a file, and
	<code>
		os.rmdir()
	</code>
	 function is used to delete an empty directory.
</p>
<pre>
	<code class="python">
{`import os
# Deleting a file
if os.path.exists("file_to_delete.txt"):
 os.remove("file_to_delete.txt")
 print("File deleted.")
else:
 print("File not found.")`}
	</code>
</pre>
<p>
	<strong>
		Renaming:
	</strong>
	 Python's
	<code>
		os.rename()
	</code>
	 function is used to rename a file or directory.
</p>
<pre>
	<code class="python">
{`import os
# Renaming a file
if os.path.exists("old_name.txt"):
 os.rename("old_name.txt", "new_name.txt")
 print("File renamed.")
else:
 print("File not found.")`}
	</code>
</pre>
<p>
	<strong>
		Copying:
	</strong>
	 Python's
	<code>
		shutil.copy()
	</code>
	 function is used to copy a file, and
	<code>
		shutil.copytree()
	</code>
	 function is used to copy a directory.
</p>
<pre>
	<code class="python">
{`import shutil
# Copying a file
if os.path.exists("source_file.txt"):
 shutil.copy("source_file.txt", "destination_folder/")
 print("File copied.")
else:
 print("Source file not found.")`}
	</code>
</pre>

      </div>
  
      <Footer />
    </Fragment>
  );

  export default PythonChapter8