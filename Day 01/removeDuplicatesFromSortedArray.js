/*
BRUTE FORCE:
    Removing duplicates means we need unique elements, so we can use Set data structure. We iterate through whole array and keep pushing the elements in set, and after the iteration we push elements from the set to array again.

    This approach will take O(2n) because we are iterating twice, and space complexity of n, because we are using an extra data structure set.

OPTIMAL APPROACH:
    1. In the optimal approach we can use two pointer method.
    2. First pointer (i) starts at first element and second pointer (j) starts at second position.
    3. Then we keep on increasing j pointer if arr[j] !== arr[i] we put arr[j] next to arr[i] and increment i pointer by one.

    - This will take O(n) time complexity and we don't need any extra data structure.
    - This approach helps a lot because array is already sorted.
*/

// Optimal Code Implementation
function removeDuplicatesFromSortedArray(arr, n) {
  let i = 0,
    j;
  for (j = 1; j < n; j++) {
    if (arr[j] !== arr[i]) {
      arr[i + 1] = arr[j];
      i++;
    }
  }
  return { newArr: arr.slice(0, i + 1), uniqueElements: i + 1 };
}

// Code run
const arr = [1, 1, 2, 2, 4, 4, 7, 8, 8, 9, 9, 9];
const n = 12;
console.log(removeDuplicatesFromSortedArray(arr, n));
