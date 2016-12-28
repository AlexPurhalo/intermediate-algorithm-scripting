// Search and Replace

// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// 	First argument is the sentence to perform the search and replace on.
// 	Second argument is the word that you will be replacing (before).
// 	Third argument is what you will be replacing the second argument with (after).

// NOTE: Preserve the case of the original word when you are replacing it.
// For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"


function toCapitalize(str) {
	var word = '', j;

	for (j = 0; j < str.length; j++) {
		if (j == 0) { word += str[j].toUpperCase() } else { word += str[j] }
	}

	return word
}

function myReplace(str, before, after) {

	if (before[0] === before[0].toUpperCase()) { after = toCapitalize(after); }

	var strs_arr = str.split(' '), i, new_str = '';
	for (i = 0; i < strs_arr.length; i++) {

		if (strs_arr[i] === before) strs_arr[i] = after;

		if (i == 0 || i == strs_arr.length) {
			new_str += strs_arr[i];
		} else {
			new_str = new_str + ' ' + strs_arr[i];
		}

	}

	return new_str
}

// myReplace("lol fuck shit", 'lol', 'wtf');
// myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
// myReplace("Let us go to the store", "store", "mall"); // "Let us go to the mall".

myReplace("He is Sleeping on the couch", "Sleeping", "sitting"); // "He is Sitting on the couch".
// myReplace("This has a spellngi error", "spellngi", "spelling"); // "This has a spelling error".
// myReplace("His name is Tom", "Tom", "john"); // "His name is John".
// myReplace("Let us get back to more Coding", "Coding", "algorithms"); // "Let us get back to more
