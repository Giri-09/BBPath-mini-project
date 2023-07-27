
import React, { Fragment } from 'react';
import CustomNavbar  from '../Navbar';
import Footer  from '../Footer';

import "./index.css";

const SortingAlgorithms = () => (
    <Fragment>
      <CustomNavbar />
      <div className='python-bg'>
        <h2>Sorting Algorithms</h2>
        <br></br>
        <h4>What is Sorting algorithm?</h4><br></br>
        <p>A Sorting Algorithm is used to rearrange a given array or list of elements according to a comparison operator on the elements. The comparison operator is used to decide the new order of elements in the respective data structure.</p>
      <p>Types of Sorting<br></br>
        1.Bubble Sort<br></br>
        2.Insertion sort<br></br>
        3.Selection sort
      </p>
      <br></br>
      <h4>Bubble Sort</h4>
      <p>Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high.</p>
      <h6>Bubble sort Algorithm</h6>
      <pre>{`In this algorithm, 

1.traverse from left and compare adjacent elements and the higher one is placed at right side. 
2.In this way, the largest element is moved to the rightmost end at first. 
3.This process is then continued to find the second largest and place it and so on until the data is sorted.`}</pre>
      <h6>Bubble sort Implementation</h6>
      <pre>{`
// Optimized implementation of Bubble sort
#include <stdbool.h>
#include <stdio.h>
  
void swap(int* xp, int* yp)
{
    int temp = *xp;
    *xp = *yp;
    *yp = temp;
}
  
// An optimized version of Bubble Sort
void bubbleSort(int arr[], int n)
{
    int i, j;
    bool swapped;
    for (i = 0; i < n - 1; i++) {
        swapped = false;
        for (j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(&arr[j], &arr[j + 1]);
                swapped = true;
            }
        }
  
        // If no two elements were swapped by inner loop,
        // then break
        if (swapped == false)
            break;
    }
}
  
// Function to print an array
void printArray(int arr[], int size)
{
    int i;
    for (i = 0; i < size; i++)
        printf("%d ", arr[i]);
}
  
// Driver program to test above functions
int main()
{
    int arr[] = { 64, 34, 25, 12, 22, 11, 90 };
    int n = sizeof(arr) / sizeof(arr[0]);
    bubbleSort(arr, n);
    printf("Sorted array: \n");
    printArray(arr, n);
    return 0;`}</pre>
    <br></br>
    <h6>Complexity Analysis of Bubble Sort:</h6>
<p>Time Complexity: O(N2)<br></br>
Auxiliary Space: O(1)</p><br></br><br></br><br></br>

<h3>Insertion sort</h3>
<p>Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.</p>
      <h6>Insertion sort Algorithm</h6>
      <p>To sort an array of size N in ascending order iterate over the array and compare the current element (key) to its predecessor, if the key element is smaller than its predecessor, compare it to the elements before. Move the greater elements one position up to make space for the swapped element.</p>
      
  <h6>Inplementation of Insertion sort</h6>
  <pre>{`// C program for insertion sort
#include <math.h>
#include <stdio.h>
 
/* Function to sort an array using insertion sort*/
void insertionSort(int arr[], int n)
{
    int i, key, j;
    for (i = 1; i < n; i++) {
        key = arr[i];
        j = i - 1;
 
        /* Move elements of arr[0..i-1], that are
          greater than key, to one position ahead
          of their current position */
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}
 
// A utility function to print an array of size n
void printArray(int arr[], int n)
{
    int i;
    for (i = 0; i < n; i++)
        printf("%d ", arr[i]);
    printf("\n");
}
 
/* Driver program to test insertion sort */
int main()
{
    int arr[] = { 12, 11, 13, 5, 6 };
    int n = sizeof(arr) / sizeof(arr[0]);
 
    insertionSort(arr, n);
    printArray(arr, n);
 
    return 0;
}`}</pre>
<h6>Complexity</h6>
<p>Time Complexity: O(N^2) <br></br>
Auxiliary Space: O(1)

</p><br></br><br></br><br></br><br></br><br></br><br></br>
<h4>Selection sort</h4>
<p>Selection sort is a simple and efficient sorting algorithm that works by repeatedly selecting the smallest (or largest) element from the unsorted portion of the list and moving it to the sorted portion of the list. </p>
<h6>Algorithm of Selection Sort</h6><br></br><p>The algorithm repeatedly selects the smallest (or largest) element from the unsorted portion of the list and swaps it with the first element of the unsorted part. This process is repeated for the remaining unsorted portion until the entire list is sorted. </p>
<h6>Implementation of selection sort</h6>
<pre>
  
  {`// C program for implementation of selection sort
#include <stdio.h>
 
void swap(int *xp, int *yp)
{
    int temp = *xp;
    *xp = *yp;
    *yp = temp;
}
 
void selectionSort(int arr[], int n)
{
    int i, j, min_idx;
 
    // One by one move boundary of unsorted subarray
    for (i = 0; i < n-1; i++)
    {
        // Find the minimum element in unsorted array
        min_idx = i;
        for (j = i+1; j < n; j++)
          if (arr[j] < arr[min_idx])
            min_idx = j;
 
        // Swap the found minimum element with the first element
           if(min_idx != i)
            swap(&arr[min_idx], &arr[i]);
    }
}
 
/* Function to print an array */
void printArray(int arr[], int size)
{
    int i;
    for (i=0; i < size; i++)
        printf("%d ", arr[i]);
    printf("\n");
}
 
// Driver program to test above functions
int main()
{
    int arr[] = {64, 25, 12, 22, 11};
    int n = sizeof(arr)/sizeof(arr[0]);
    selectionSort(arr, n);
    printf("Sorted array: \n");
    printArray(arr, n);
    return 0;
}`}
</pre>
<h6>Complexity Analysis of Selection Sort</h6>
<pre>{`
Time Complexity:* The time complexity of Selection Sort is O(N2) as there are two nested loops:
* One loop to select an element of Array one by one = O(N)
* Another loop to compare that element with every other Array element = O(N)
* Therefore overall complexity = O(N) * O(N) = O(N*N) = O(N2)
Auxiliary Space: O(1) as the only extra memory used is for temporary variables while swapping 
two values in Array. The selection sort never makes more than O(N) swaps and can be useful 
when memory writing is costly. `}</pre>
</div>
      <Footer />
    </Fragment>
  );

  export default SortingAlgorithms