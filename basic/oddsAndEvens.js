// Write a function that loops through an array and separates odd vs even numbers.

// Write a function below called "oddsAndEvens" that loops through a parameter "nums" (an array).
// for each number in the given array, if it is even, it is added to the evens array.
// If the number is odd, is added to the odds array.

var evens = [];
var odds = [];

function oddsAndEvens(nums) {
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
        evens.push(nums[i]);
        } else if (nums[i] % 2 !== 0) {
            odds.push(nums[i]);
        }
    }
}