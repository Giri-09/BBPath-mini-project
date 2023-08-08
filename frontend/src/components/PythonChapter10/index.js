import React, { Fragment } from 'react';
import CustomNavbar  from '../Navbar';
import Footer  from '../Footer';

import "./index.css";

const PythonChapter10 = () => (
    <Fragment>
      <CustomNavbar />
      <div className='content-bg'>
        <h2>Chapter 10: Introduction to Data Science with Python</h2>
        <h2>
	Libraries for Data Manipulation and Analysis (NumPy, Pandas)
</h2>
<p>
	<strong>
		NumPy:
	</strong>
	 NumPy is a fundamental library for numerical computations in Python. It provides support for large, multi-dimensional arrays and matrices, as well as a collection of mathematical functions to operate on these arrays.
</p>
<pre>
	<code class="python">
{`import numpy as np
# Creating a NumPy array
data = [1, 2, 3, 4, 5]
array = np.array(data)
print(array) # Output: [1 2 3 4 5]
# Performing operations on NumPy arrays
squared = array ** 2
print(squared) # Output: [ 1 4 9 16 25]`}
	</code>
</pre>
<p>
	<strong>
		Pandas:
	</strong>
	 Pandas is a powerful library for data manipulation and analysis. It provides data structures like Series and DataFrame, which make working with structured data easy and efficient.
</p>
<pre>
	<code class="python">
{`import pandas as pd
# Creating a Pandas Series
data = [10, 20, 30, 40, 50]
series = pd.Series(data)
print(series)
# Output:
# 0 10
# 1 20
# 2 30
# 3 40
# 4 50
# dtype: int64
# Performing operations on Pandas Series
doubled = series * 2
print(doubled)
# Output:
# 0 20
# 1 40
# 2 60
# 3 80
# 4 100
# dtype: int64`}
	</code>
</pre>
<h2>
	Data Visualization with Matplotlib and Seaborn
</h2>
<p>
	<strong>
		Matplotlib:
	</strong>
	 Matplotlib is a widely-used library for creating static, interactive, and animated visualizations in Python. It provides a flexible and extensive set of plotting functions.
</p>
<pre>
	<code class="python">
{`import matplotlib.pyplot as plt
# Line plot using Matplotlib
x = [1, 2, 3, 4, 5]
y = [10, 20, 30, 40, 50]
plt.plot(x, y)
plt.xlabel("X-axis")
plt.ylabel("Y-axis")
plt.title("Line Plot")
plt.show()`}
	</code>
</pre>
<p>
	<strong>
		Seaborn:
	</strong>
	 Seaborn is a data visualization library based on Matplotlib. It provides a high-level interface for creating informative and attractive statistical graphics.
</p>
<pre>
	<code class="python">
{`import seaborn as sns
# Scatter plot using Seaborn
x = [1, 2, 3, 4, 5]
y = [10, 20, 30, 40, 50]
sns.scatterplot(x, y)
plt.xlabel("X-axis")
plt.ylabel("Y-axis")
plt.title("Scatter Plot")
plt.show()`}
	</code>
</pre>
<h2>
	Introduction to Machine Learning with scikit-learn
</h2>
<p>
	<strong>
		scikit-learn:
	</strong>
	 scikit-learn is a widely-used machine learning library in Python. It provides a simple and efficient set of tools for data mining and data analysis.
</p>
<pre>
	<code class="python">
{`from sklearn import datasets
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error
# Load a sample dataset from scikit-learn
data = datasets.load_diabetes()
X = data.data
y = data.target
# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
# Create and train a linear regression model
model = LinearRegression()
model.fit(X_train, y_train)
# Make predictions on the test set
y_pred = model.predict(X_test)
# Calculate mean squared error
mse = mean_squared_error(y_test, y_pred)
print("Mean Squared Error:", mse)`}
	</code>
</pre>

      </div>
  
      <Footer />
    </Fragment>
  );

  export default PythonChapter10

