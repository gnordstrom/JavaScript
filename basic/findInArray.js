// Write a function called 'findInArray' that takes in two parameters, the first representing the
// array to be searched and the second representing the value to be searched for.

// Return true if the value exists in the array. If it doesn't exist return false.

function findInArray(arr1, value) {
    if (arr1.indexOf(value) !== -1) {
      return true;
    }
    return false;
}