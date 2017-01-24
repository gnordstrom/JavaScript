// *************************    evenFinder   ******************************** //

// Create a function called evenFinder that takes an array as an argument and 
// returns an array with all of the odd numbers removed.

function evenFinder(arr) {
  var evenArray = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenArray.push(arr[i]);
    }
  }
  return evenArray;
}

