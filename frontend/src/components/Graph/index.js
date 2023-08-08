
import React, { Fragment } from 'react';
import CustomNavbar  from '../Navbar';
import Footer  from '../Footer';

import "./index.css";

const Graph = () => (
    <Fragment>
      <CustomNavbar />
      <div className='python-bg'>
        <h2>Graphs</h2>
       <p>Graph is a data structure that consists of the following two components: </p> 

<p>A finite set of vertices also called nodes.</p> 
<p>A finite set of ordered pair of the form (u, v) called edge. The pair is ordered because (u, v) is not the same as (v, u) in the case of a directed graph(di-graph). The pair of the form (u, v) indicates that there is an edge from vertex u to vertex v. The edges may contain weight/value/cost.</p> 
  <img src = "https://cdncontribute.geeksforgeeks.org/wp-content/uploads/undirectedgraph.png"/>
  <p>Following is an example of an undirected graph with 5 vertices.
    <p>Graphs are used to represent many real-life applications: Graphs are used to represent networks. The networks may include paths in a city or telephone network or circuit network. Graphs are also used in social networks like linkedIn, Facebook. For example, in Facebook, each person is represented with a vertex(or node). Each node is a structure and contains information like person id, name, gender, and locale. See this for more applications of graph.</p>
    <p>In computer science, a graph is a data structure that is used to represent connections or relationships between objects. A graph consists of a set of vertices (also known as nodes) and a set of edges (also known as arcs) that connect the vertices. The vertices can represent anything from cities in a map to web pages in a network, and the edges can represent the relationships between them, such as roads or links.
<h4>Representation of graphs</h4>
<p>The following two are the most commonly used representations of a graph.<br></br>

1.Adjacency Matrix<br></br>
2.Adjacency List<br></br><br></br>
There are other representations also like, Incidence Matrix and Incidence List. The choice of graph representation is situation-specific. It totally depends on the type of operations to be performed and the ease of use.
</p>
</p>

</p>    
<pre>{`Adjacency List:
An adjacency list is a simple way to represent a graph as a list of vertices, where each vertex has a list of its adjacent vertices.
 Here's an example of an adjacency list for an undirected graph with 4 vertices:
makefile
Copy code
0: 1 3
1: 0 2
2: 1 3
3: 0 2
In this example, vertex 0 is adjacent to vertices 1 and 3, vertex 1 is adjacent to vertices 0 and 2, and so on.

Adjacency Matrix:
An adjacency matrix is a two-dimensional array that represents the graph by storing a 1 at position (i,j) if there is an edge from
vertex i to vertex j, and 0 otherwise. Here's an example of an adjacency matrix for the same undirected graph:
Copy code
  0 1 2 3
0 0 1 0 1
1 1 0 1 0
2 0 1 0 1
3 1 0 1 0`}</pre>
<img src = "https://cdncontribute.geeksforgeeks.org/wp-content/uploads/undirectedgraph.png"/><br></br><br></br><br></br>
<p>See the undirected graph shown below:</p><br></br><br></br><br></br><br></br>

  <img src = "https://cdncontribute.geeksforgeeks.org/wp-content/uploads/adjacencymatrix.png"/> <p>Adjacency Matrix for above graph exapmle</p><br></br><br></br> <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
  <br></br><br></br>
    
     <p>Adjacency List Representation of above graph</p>
     <img src = "https://cdncontribute.geeksforgeeks.org/wp-content/uploads/listadjacency.png"/>
     <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      </div>
  
      <Footer />
    </Fragment>
  );

  export default Graph