/*
BRUTE FORCE:
    The brute force approach will be that we sort the array, and print second last element in array, if array is sorted in asceding order (low to high). This will take O(nlogn) due to sorting algorithm.

BETTER APPROACH:
    The better approach will be if we find the largest element in first iteration. And in second iteration we find the second largest element (we start with second_largest as -1 in the start assuming we have non-negative integers), with the condition (arr[i] > second_largest && arr[i] !== largest).

    This approach will take O(2n) because we are running the for loop twice.

OPTIMAL APPROACH:
    1. In this approach, we iterate only one.
    2. We define largest as arr[0], and second_largest as -1 (assuming the array contains only non-negative integers, if there are negative integers then take it as INT_MIN).
    We start iterating from 2nd element, because 1st element we have already assumed is the largest.
    3. If the current element is greater than largest the current element becomes largest, and largest becomes second largest.
    4. If current element is greater than second_largest and is less than largest it becomes second_largest.

    This approach will take O(n), because we are iterating only once.
*/

// BETTER APPROACH CODE
function secondLargestElementBetter(arr, n) {
  let largest = arr[0],
    second_largest = -1,
    i;
  for (i = 0; i < n; i++) {
    if (arr[i] > largest) largest = arr[i];
  }

  for (i = 0; i < n; i++) {
    if (arr[i] > second_largest && arr[i] !== largest) second_largest = arr[i];
  }

  return { largest, second_largest };
}

// OPTIMAL APPROACH CODE
function secondLargestElementOptimal(arr, n) {
  let largest = arr[0],
    second_largest = -1,
    i;

  for (i = 1; i < n; i++) {
    if (arr[i] > largest) {
      second_largest = largest;
      largest = arr[i];
    } else if (arr[i] > second_largest && arr[i] < largest) {
      second_largest = arr[i];
    }
  }

  return { largest, second_largest };
}

// CODE RUNNING
const arr = [3, 5, 2, 10, 34, 32, 33, 45, 35];
const n = 9;

console.log("BETTER APPROACH RUNNING");
console.log(secondLargestElementBetter(arr, n));

console.log("OPTIMAL APPROACH RUNNING");
console.log(secondLargestElementOptimal(arr, n));
