// Add 10 to numbers and strings of numbers in an array.

var numbers = [5, '9', 16, 19, '25', '34', 48];

// Write a function called addTen that is given 'numbers' as it's only argument and returns a new
// array after adding ten to each item in numbers.

function addTen(numbers) {
  for (var i = 0; i < numbers.length; i++) {
      numbers[i] = Number(numbers[i]) + 10;
  }
  return numbers;
}

// NOTE TO SELF: Adding the Number takes all the strings and converts them into numbers.