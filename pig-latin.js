// Translate the provided string to pig latin.
//
// Pig Latin takes the first consonant (or consonant cluster) of an English word,
// moves it to the end of the word and suffixes an "ay".
// If a word begins with a vowel you just add "way" to the end.
// Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(string) {
	var changed = false; // al => alway

	while(someFunc(string[0]) === false) {
		string = changeString(string);
		changed = true;
	}

	if (changed === false) {
		string += 'way';
	} else if (changed === true) {
		string += 'ay'
	}


	// if (someFunc(string[0]) === true) {
	// 	string += 'way';
	// } else if (someFunc(string[0]) === false) {
	// 	string = changeString(string) + 'ay'
	// }
	function changeString(some_string) {
		var new_string = '';
		for (var k = 0; k < some_string.length; k++) {
			if (k > 0) { new_string += some_string[k] }
		}

		new_string += some_string[0];
		return new_string
	}

	function someFunc(str) {
		var i;

		for (i = 0; i < str.length; i++) {
			if (verifyCharType1(str[i]) === true) {
				return true
			} else {
				return false
			}

		}
	}

	function verifyCharType1(char) {
		var type1 = ['a', 'e', 'o', 'i', 'u', 'y'], j;

		for (j = 0; j < type1.length; j++) {
			if (char == type1[j]) {
				return true
			}
		}
	}

	return string
}

translatePigLatin("california"); // "aliforniacay".
// translatePigLatin("paragraphs"); // "aragraphspay".
// translatePigLatin("glove"); // "oveglay".
// translatePigLatin("algorithm"); // "algorithmway".
// translatePigLatin("eight"); // "eightway".

// hello => ellohay
// bro => obray
// else => elseway
