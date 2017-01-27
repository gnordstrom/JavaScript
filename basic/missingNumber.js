// Write a function missingNumber so that it takes in a sorted array of integers which contains all integers 
// between 0 and N except one value, and returns the missing integer in that array. 
// Example: if you are passed [0,1,2,3,5], this is an array between 0 and 5, it is sorted. 
// However, the number 4 is missing. Your function needs to return 4.

function missingNumber(numArray) {
    var missingDigit = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray.indexOf(i) === -1) {
            missingDigit = i;
        }
    }
    return missingDigit;
}