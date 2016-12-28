// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
// Here are some helpful links:

function fearNotLetter(param) {
	function findFullLetters(str) {
		var alphabet = 'abcdefghijklmnopqrstvwxyz', fullLetters = '',
			firChar = str[0], lastChar = str[str.length-1];

		var curLetterIndex = alphabet.indexOf(firChar), lastLetterIndex = alphabet.indexOf(lastChar);


		for (curLetterIndex; curLetterIndex < lastLetterIndex + 1; curLetterIndex++) {
			fullLetters += alphabet[curLetterIndex];
		}

		return fullLetters
	}

	var strForSearch = findFullLetters(param);


	function strsComparing() {
		var misLetter = '', i;

		for (i = 0; i < strForSearch.length; i++) {
			if (strForSearch[i] !== param[i]) {
				misLetter += strForSearch[i]
			}
		}

		return misLetter[0]
	}

	return strsComparing()
}

console.log(fearNotLetter('ab'))
console.log(fearNotLetter("abcdefghjklmno"));
  // "i".
// fearNotLetter("bcd");  // undefined.
// fearNotLetter("yz");  // undefined.
