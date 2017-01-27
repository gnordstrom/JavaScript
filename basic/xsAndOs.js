// Have the function exOh(str) take the str parameter being passed and return true if there is an equal 
// number of x's and o's, otherwise return false. Only these two letters will be entered in the string, 
// no punctuation or numbers. 
//For example: if str is "xooxxxxooxo" then the output should return false because 
// there are 6 x's and 5 o's.

function exOh(str) {
  //code here
  var stringArr = str.split("");
  var allX = [];
  var allO = [];
  
  for (var i = 0; i < stringArr.length; i++) {
  	if (stringArr[i] === "x") {
    	allX.push(stringArr[i]);
    	console.log(allX);
    } else if (stringArr[i] === "o") {
    	allO.push(stringArr[i]);
    	console.log(allO);
    }
  }
  
  if (allX.length === allO.length) {
  	return true;
  } else {
  	return false;
  }
}

exOh("xoxoxoxox");