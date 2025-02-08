/*
In this program we have to check if the array is sorted.
This has fairly simple approach. We just iterate through whole array and check if the next element is greater than or equal to current element, if array is sorted in ascending fashion.

This program takes O(n) complexity as we are iterating only once.
*/

function isArraySorted(arr, n) {
  let i;
  for (i = 0; i < n; i++) {
    if (!arr[i + 1] >= arr[i]) return false;
  }
  return true;
}

// RUNNING OF CODE
const arr = [1, 1, 2, 3, 5, 10];
const n = 6;

console.log(isArraySorted(arr, n));
