// Complete the function longestWord to take in a sentence and return the longest word in
// the sentence. Assume that there will not be a tie for the longest word.

function longestWord(sen) {
	var senArr = sen.split(' ');
  	var longestWord = '';

  	for (var i = 0; i < senArr.length; i++) {
  		if (senArr[i].length > longestWord.length) {
        	longestWord = senArr[i];
        }
        console.log(longestWord);
  }
  return longestWord;
}