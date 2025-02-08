/*
BRUTE FORCE:
To find a largest element in an array, if we get sorted array we'll just have to print first element arr[0], the sorting will take place in O(nlogn) if we use algorithms like Merge sort etc.

OPTIMAL APPROACH:
1. Define first element in an array as Largest.
2. Start iterating from second element.
3. If iterating value (arr[i]) is greater than Largest, assign it to largest.
4. Keep iterating like this till the end of array.

This approach is of O(n), because we are running only one loop.
*/

// OPTIMAL APPROACH CODE
function largestElementInArray(arr, n) {
  let largest = arr[0];
  for (let i = 0; i < n; i++) {
    if (arr[i] > largest) largest = arr[i];
  }
  return largest;
}

// RUNNING OF CODE
const arr = [3, 5, 2, 10, 34, 32];
const n = 6;

console.log(largestElementInArray(arr, n));
