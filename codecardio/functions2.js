// Write a function called makeBigger that takes in two numbers as parameters, adds them together, and 
// sets newNum to equal the sum of the two numbers, then returns newNum.
function makeBigger(num1, num2) {
    var newNum = 0;
    newNum = num1 + num2;
    return newNum;
}

// The first parameter represents a number to be multiplied against itself and the second parameter represents how 
// many times it is multiplied by itself. The function should return the result of this operation. 
// exponent(2,3) should return 8
function exponent(num, times) {
    return Math.pow(num, times);
}


// Write a function called isPrime that accepts 1 parameter and checks if that parameter is a prime number. 
// If the number is prime return true else return false
function isPrime(num) {
        // First eliminate any number less than 2, aka not prime
    if(num < 2) return false;
    for (var i = 2; i < num; i++) {
    	if (num % i === 0)
          return false;
    }
    return true;
}

// Use the isPrime function to check if a number is prime. 
// If the number is prime then push that number to the primeNumbers array. 
// The listPrimes function takes a number as a parameter then returns all the prime numbers up to the given number
function isPrime(num) {
    if(num < 2) return false;
    for (var i = 2; i < num; i++) {
    	if (num % i === 0)
          return false;
    }
    return true;
}
function listPrimes(max) {
    var primeNumbers = []
    for(var i = 0; i < max; i++){
    // Code Here 
        if(isPrime(i)) {
            primeNumbers.push(i);
        }
    }
    return primeNumbers
}

// Write a function called longestWord that will find the the longest word in a string
function longestWord(str) {
    var words = str.match(/\w[a-z]{0,}/gi);
    var longest = words[0];
    for (var i = 1 ; i < words.length ; i++) {
      // If the length of words[i] is less than the length of longest then set longest to words[i] 
      if (words[i].length < longest) {
          longest = words[i];
      }    
    }
}

// str.match is creating an array of individual words
// Example words = ["this","is","a","test"]
