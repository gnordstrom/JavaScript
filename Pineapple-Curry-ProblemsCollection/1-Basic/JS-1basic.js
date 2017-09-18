
              //  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
              //                    JS - Basics                     //
              //  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //


// -------------------------  ~~~~~> ABChecker <~~~~~  ------------------------- //
  // Write a function called ABCheck that takes a string parameter and return true
  // if the characters a and b are separated by exactly 3 places anywhere
  // in the string at least once (ie. "lane borrowed" would result in true
  // because there is exactly three characters between a and b).
  // Otherwise return false.
  function ABCheck(str) {

  }

// -------------------------  ~~~~~> All Combinations <~~~~~  ------------------------- //
  // allComb([1, 2], ['b', 'z'], ['etc.', 'you get the idea'])


// -------------------------  ~~~~~> Alphabet <~~~~~  ------------------------- //
  // write a functin that takes in a string, and returns that string with all
  // its letters in alphabetal order. assume there will be no punctuation or
  // numbers. example: `alphabet('hello')` // => 'ehllo'


// -------------------------  ~~~~~> Array Depth <~~~~~  ------------------------- //
  // If a is an array, return max depth of each element in array.
  // Add 1 to increase depth.
  // If a is int, return 0.


// -------------------------  ~~~~~> Array Reverse <~~~~~  ------------------------- //
  // reverse an array
  function arrayReverse(arr1) {

  }

// -------------------------  ~~~~~> Balanced Brackets <~~~~~  ------------------------- //
  // Write a function that accepts a string consisting entirely of brackets ([](){})
  // and returns whether or not it is balanced.  Every 'opening' bracket must be followed
  // by a closing bracket of the same type.  There can also be nested brackets, which adhere to the same rule.


// --------------  ~~~~~> Turn long numbers into smaller groups <~~~~~  ------------- //
  // Convert long numbers to friendly, readable sizes


// --------------  ~~~~~> Capitalize first letter of words <~~~~~ -------------------- //
  // Write a function that takes a string and capitalizes the first letter of each word.
  // Words will be separated by one space.


// -------------------------  ~~~~~> Combinator <~~~~~  ------------------------- //
  // Write a function called combinator that is given two arrays as arguments.
  // The first array is an array of first names, and the second array is an
  // array of last names. Have the function return a new array combining
  // the first names and the last names.

  // combinator([‘Jason', ‘Dan’, ‘Cahlan’], [‘Turner’, ‘Kesler’, ‘Sharp’]); →
  // [‘Jason Turner’, ‘Dan Kesler’, ‘Cahlan Sharp’];


// -------------------------  ~~~~~> Common Factor <~~~~~  ------------------------- //
  // write a function that finds the common factors of two numbers,
  // and returns them sorted from highest to lowest.
  // example with 12 and 18:
  // factors of 12 are 12, 6, 4, 3, 2, 1
  // factors of 18 are 18, 9, 6, 3, 2, 1
  // so the common factors of 12 and 18 are 6, 3, 2, 1
  // another example: console.log(commonFactors(20, 25)) // => [5, 1]

// ---------------------  ~~~~~> Count Backwards <~~~~~  --------------------- //
  // count backwards from 100 to 1, and print
  // out each number.

  // this is meant to be a day-one js problem
  // shouldn't take a student more than a minute,
  // as long as they know the syntax for a for loop.


// -------------  ~~~~~> Count Characters in String <~~~~~  ------------- //
  // Write a function that will count the characters in a string and return the number.

// -----------------------  ~~~~~> Count <~~~~~  ------------------------- //
  // Make this work
    var count = counter();
    count() // 1
    count() // 2
    count() // 3
    count() // 4

    // bonus: log the iterator after that many seconds
    var count = counter()
    count()
    count()
    count()
    count()
    // 1 (after 1 second)
    // 2 (after 2 seconds)
    // 3 (after 3 seconds)
    // 4 (after 4 seconds)

// ---------------------  ~~~~~> Factorials <~~~~~  --------------------- //
  // Write a function that that takes a number and returns its factorial.
  // Example: `factorial(4)` // => 24 (4 * 3 * 2 * 1 = 24)

// ------------------  ~~~~~> Fibonacci Finder <~~~~~  -------------------- //
  // Write a function that accepts a number, n, and returns the nth Fibonacci
  // number. Use an interative solution to this problem; if you finish with
  // time left over, implement a recursive solution.
  // * nthFibonacci(2); // => 2
  // * nthFibonacci(3); // => 3
  // * nthFibonacci(4); // => 5


// ----------------------  ~~~~~> Fibonacci <~~~~~  ---------------------- //
  // Write a function that generates an array of fibonacci numbers.
  // The length of the array should be user selectable.

  // Bonus: the function should let the user select fibonacci, tribonacci, etc..., as well as length
  // Bonus: make it recursive
  // fib(11,2) would give [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ] (first 11 fib #'s)


// ------------------  ~~~~~> Fill-In the Array <~~~~~  ------------------ //
  // Given an array of numbers, return the list so that the values
  // increment by 1 for each index up to the maximum value. Example:
  // Input: 3,5,6,7,8
  // Output: 3,4,5,6,7,8
  // Assume the array will be sorted.

// --------  ~~~~~> First Non-Repeated Character in String <~~~~~  -------- //
  // Given an arbitrary input string, return the first
  // non-repeated character in the string.
  // For example:
  // firstNonRepeatedCharacter(‘ABA’); // => ‘B’
  // firstNonRepeatedCharacter(‘AABCABD’); // => ‘C’


// --------------------  ~~~~~> Is it Boolean? <~~~~~  -------------------- //
  // Write a function that just checks if what you pass it is a boolean


// --------  ~~~~~> Length of Average Word in String <~~~~~  ------------ //
  // Find the average length of each word in a string


// ----------------------  ~~~~~> Logger <~~~~~  ------------------------ //
  // create an object (call it logger) with two methods
  // method one: logs out msg with word INFO: prefixed
  // method two: logs err to console with ERROR: prefixed

// ----------------  ~~~~~> Longest Word in String <~~~~~  ------------- //
  // Write a function that returns the longest word(s)
  // from a sentence.  The function should not return
  // any duplicate words (case-insensitive).

// ----------  ~~~~~> Find Missing Element in Array <~~~~~  ------------ //
  // There is an array of non-negative integers. A second array is formed by
  // shuffling the elements of the first array and deleting a random element.
  // Given these two arrays, find which element is missing in the second array.

  // There are most concise ways to write this; this solution avoids nested loops.

// ------------------  ~~~~~> Missing Number <~~~~~  ----------------- //
  // Write a function that accepts an array of integers in random order of unknown length, but
  // with one number missing.
  // Return the missing number.

// ------------  ~~~~~> Multiples of 3 and 5 <~~~~~  ------------------- //
  // If we list all the natural numbers below 10 that are multiples
  // of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

  // Find the sum of all the multiples of 3 or 5 below 1000.

  // threeAndFive(1000);
  // Should return 233168

// -----------------  ~~~~~> Object to Array <~~~~~  ------------------- //
  // Write a function that turns an object into an array.


// ------------------  ~~~~~> Prime Numbers <~~~~~  -------------------- //
  // Write a function that accepts a number and returns a boolean based on whether it's a prime number.


// ------------------  ~~~~~> Randomize Array <~~~~~  ------------------- //
  // Given the following array, randomize it.

  var students = ['Dan', 'Brack', 'Erin', 'Geordyn', 'Jess', 'Sarah', 'Andrew', 'Ryan',
                'Tim', 'Stephen', 'David', 'Mark'];


// ------------------  ~~~~~> Repeat a String <~~~~~  ------------------ //
  // Repeat a string n amount of times
  // Example: repeat('foo', 2)      // foo foo


// ------------------  ~~~~~> Reverse a String <~~~~~  ----------------- //
  // Reverse a given string and return it.

// ------------------ ~~~~~> Reverse an Array <~~~~~  ------------------ //
  // Write a function that reverses the contents of an array bonus points:
  // Try reversing it in place (without creating a new array).
  // example: reverseArray([1, 8, 39, null, 2, 9, 'bob'])[0]
  // should equal => 'bob'

// ---------------  ~~~~~> Rock-Paper-Scissors <~~~~~  ----------------- //

  // Write a function that generates every sequence of throws a single
  // player could throw over a three-round game of rock-paper-scissors.
  // Example:
    //  [
    //    [ // one possible three round game outcome
    //      'rock',    // round 1
    //     'paper',   // round 2
    //      'scissors' // round 3
    //    ],
    //    [ // next possible three round game outcome
    //      'rock',    // round 1
    //      'paper',   // round 2
    //      'rock'     // round 3
    //    ],
    // //  etc...
    //  ]

  //  Extra credit:
    //  - Make your function return answers for any number of rounds.
  //  Example:
  //  rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]



// ------------  ~~~~~> Roman Numeral Translator <~~~~~  --------------- //
  // Take roman numeral as input.
  // Write function that converts this to regular number.


// ------------------  ~~~~~> Smallest Number <~~~~~  ------------------ //
  // Write a function that determines which of two inputs is the smallest.


// ------------------  ~~~~~> Sum of all numbers <~~~~~  --------------- //
  // Write a function that returns the sum of all numbers within a range of numbers


// ----------------  ~~~~~> Sum of Array plus one <~~~~~  -------------- //
  // Write a function that takes an array of integers and returns the sum of the
  // integers after adding 1 to each. || plusOneSum([1, 2, 3, 4]) // 14

// ------------------  ~~~~~> Sum of Primes <~~~~~  -------------------- //
// Write a function that sums all the prime numbers below what you pass to it.
// Example: sumPrimes(10)     // => 17

// ---------------------  ~~~~~> Triangles <~~~~~  ---------------------- //
  // Console.log out a triangle of hashes (#)
                      #
                    # # #
                  # # # # #

// -------------------  ~~~~~> Truncate a String <~~~~~  ----------------- //
  // write a function that truncates a string.
  // Tt should accept a string and a character count.
    truncate('The quick brown fox jumps over the lazy dog', 16);

// -------------------  ~~~~~> Vowel Count <~~~~~  --------------------- //
  // Write a function that takes a string and returns the total number of vowels that the string
  // contains. Don't count `y`.
  // Example:
    vowels('Hey, how are you?') ;    // => 6

// --------------------  ~~~~~> Word Count <~~~~~  --------------------- //
  // Write a function that takes a string and returns the total number of words in that string.
  // Assume that all words are separated by spaces.
  // Example:
    countWords('Built in methods are your friend!');   // => 6
