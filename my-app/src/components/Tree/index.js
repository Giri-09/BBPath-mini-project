
import React, { Fragment } from 'react';
import CustomNavbar  from '../Navbar';
import Footer  from '../Footer';

import "./index.css";

const Tree = () => (
    <Fragment>
      <CustomNavbar />
      <div className='python-bg'>
        <h2>Tree</h2>
        <p>A tree is a hierarchical data structure defined as a collection of nodes. Nodes represent value and nodes are connected by edges. A tree has the following properties: The tree has one node called root.</p>
        <h4>Types of Tress</h4>
        <p>Types of trees depend on the number of children a node has. There are two major tree types:</p>

<p>General Tree: A tree in which there is no restriction on the number of children a node has, is called a General tree. Examples are Family tree, Folder Structure.</p>
<p>Binary Tree: In a Binary tree, every node can have at most 2 children, left and right.  In diagram below, B & D are left children and  C, E & F are right children.</p>

     <h3>Binary Trees</h3>
     <p>Binary trees have many applications in computer science, including data storage and retrieval, expression evaluation, network routing, and game AI. They can also be used to implement various algorithms such as searching, sorting, and graph algorithms.</p>
<h6>Representation of Binary Tree:</h6>

<p>In C, we can represent a tree node using structures.In other languages, we can use classes as part of their OOP feature.Below is an example of a tree node with integer data.</p>

      <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221124174432/binary.png"/>
      <pre>{`// Structure of each node of the tree
 
 struct node {
     int data;
     struct node* left;
     struct node* right;
 };`}</pre>
 <h3>Basic operations on Binary Trees</h3>
 <p>1.Inserting an element.</p>
<p>2.Removing an element.</p>
<p>3.Searching for an element.</p>
<p>4.Deletion for an element.</p>
<p>5.Traversing an element. </p>
<h3>Auxilary operations on Binary Tee</h3>
<p>1.Finding the height of the tree</p>
<p>2.Find the level of the tree</p>
<p>3.Finding the size of the entire tree.</p><h2>Binary Tree Traversals</h2>
<p>Tree Traversal algorithms can be classified broadly into two categories:</p>

<p>1.Depth-First Search (DFS) Algorithms</p>
<p>2.Breadth-First Search (BFS) Algorithms</p>
<h6>Tree Traversal using Depth-First Search (DFS) algorithm can be further classified into three categories:</h6>
<pre>{`        1.Preorder Traversal (current-left-right): Visit the current node before visiting any nodes inside the left or right subtrees.
         Here, the traversal is root – left child – right child. It means that the root node is traversed first then its left child and 
         finally the right child.
        2.Inorder Traversal (left-current-right): Visit the current node after visiting all nodes inside the left subtree but before 
        visiting any node within the right subtree. Here, the traversal is left child – root – right child.  It means that the left 
        child is traversed first then its root node and finally the right child.
        3.Postorder Traversal (left-right-current): Visit the current node after visiting all the nodes of the left and right subtrees. 
         Here, the traversal is left child – right child – root.  It means that the left child has traversed first then the right child 
         and finally its root node.
`}</pre>
<h6>Tree Traversal using Breadth-First Search (BFS) algorithm can be further classified into one category:</h6>
<h4>Level order Traversal</h4>
<img src = "https://media.geeksforgeeks.org/wp-content/uploads/20221125145811/level.png"/>
<p>Visit nodes level-by-level and left-to-right fashion at the same level. Here, the traversal is level-wise. It means that the most left child has traversed first and then the other children of the same level from left to right have traversed. </p>
<p>Let us traverse the following tree with all four traversal methods:</p><br></br><br></br>

<p>* Pre-order Traversal of the above tree: 1-2-4-5-3-6-7</p>
<p>* In-order Traversal of the above tree: 4-2-5-1-6-3-7</p>
<p>* Post-order Traversal of the above tree: 4-5-2-6-7-3-1</p>
<p>* Level-order Traversal of the above tree: 1-2-3-4-5-6-7</p>
<h4>Implemantation of Binary Tree</h4>
<pre>{`#include <stdio.h>
#include <stdlib.h>
 
struct node {
    int data;
    struct node* left;
    struct node* right;
};
 
// newNode() allocates a new node
// with the given data and NULL left
// and right pointers.
struct node* newNode(int data)
{
    // Allocate memory for new node
    struct node* node
        = (struct node*)malloc(sizeof(struct node));
 
    // Assign data to this node
    node->data = data;
 
    // Initialize left and
    // right children as NULL
    node->left = NULL;
    node->right = NULL;
    return (node);
  }
 
    int main()
    {
        // Create root
        struct node* root = newNode(1);
     
        /* following is the tree after above statement
            1
           /  \
         NULL NULL
        */
        root->left = newNode(2);
        root->right = newNode(3);
     
        /* 2 and 3 become left and right children of 1
                1
               / \
              2   3
             / \ / \
        NULL NULL NULL NULL
        */
        root->left->left = newNode(4);
     
        /* 4 becomes left child of 2
             1
            / \
           2   3
          /  \ / \
         4 NULL NULL NULL
         /   \
        NULL NULL
        */
        getchar();
        return 0;
    }`}</pre>

<h4>Conclusion</h4>
<p>Tree is a hierarchical data structure. Main uses of trees include maintaining hierarchical data, providing moderate access and insert/delete operations. Binary trees are special cases of tree where every node has at most two children.</p>
      </div>
      <Footer />
    </Fragment>
  );

  export default Tree