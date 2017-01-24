// Create a function called "looper" that when passed an array of numbers will increment each
// value in the array by 5 and then return the updated array.

// For example: if the looper function were to be passed [ 2, 7 ] it should return [ 7, 12 ]

function looper(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i] += 5);
  }
  return newArr;
}