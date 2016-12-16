// Roman parNumeral Converter
// Convert the given parNumber into a roman parNumeral.


var convertToRoman = function(parNum) {
	console.log('passed param number: ' + parNum);
	console.log();
	// in int:  		1000	 900	500		400	 100		90	 50	 	40		10		 6		5			4		 1
	var romanNumericalArr = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
	console.log('roman parNumerical vals array: [' + romanNumericalArr + ']');

	// in roman					 M	 CM 	D 	 CD 	 C 	XC 	 L 	XL 	 X IX  V IV  I
	var numbersArr 	= [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
	console.log('integer vals array: [' + numbersArr + ']');
	console.log();

	var convVal = ''; // initialization of empty string for future using in loop

	for (var i = 0; i < numbersArr.length; i++) {
		// shows a value from numbersArr array appropriate current iteration number
		console.log('(loop1) numbersArr[i]: ' + numbersArr[i]);

		while (numbersArr[i] <= parNum) {
			console.log('');
			console.log('(> loop1.1) numbersArr[i]: ' + numbersArr[i]);
			console.log('');

			console.log('BEFORE');
			console.log('parNum: ' + parNum);  // parameter before iteration
			console.log('conVal: "' + convVal + '"'); // conVal before iteration
			console.log('romanNumericalArr[i]: ' + romanNumericalArr[i]);
			console.log();

			convVal += romanNumericalArr[i]; // pushes new character(s) to string
			console.log('AFTER');

			console.log('prev parNum (' + parNum + ') - arrVal (' + numbersArr[i] + ')');
			parNum -= numbersArr[i]; // changes parNum increasing by value of numbersArr
			console.log('curr parNum (' + parNum + ')');
			console.log('convVal: "' + convVal + '"'); // changed conVal after iteration
			console.log('');
		}
	}

	console.log(convVal);
	return convVal;
};

convertToRoman(3);

// convertToRoman(2); 		// =>  'II'.
// convertToRoman(3); 		// =>  'III'.
// convertToRoman(4); 		//=>  'IV'.
// convertToRoman(5); 		//=>  'V'.
// convertToRoman(9); 		//=>  'IX'.
// convertToRoman(12); 	//=>  'XII'.
// convertToRoman(16); 	//=>  'XVI'.
// convertToRoman(29); 	//=>  'XXIX'.
// convertToRoman(44); 	//=>  'XLIV'.
// convertToRoman(45); 	//=>  'XLV'
// convertToRoman(68); 	//=>  'LXVIII'
// convertToRoman(83); 	//=>  'LXXXIII'
// convertToRoman(97); 	//=>  'XCVII'
// convertToRoman(99); 	//=>  'XCIX'
// convertToRoman(500); 	//=>  'D'
// convertToRoman(501); 	//=>  'DI'
// convertToRoman(649); 	//=>  'DCXLIX'
// convertToRoman(798); 	//=>  'DCCXCVIII'
// convertToRoman(891); 	//=>  'DCCCXCI'
// convertToRoman(1000); //=>  'M'
// convertToRoman(1004); //=>  'MIV'
// convertToRoman(1006); //=>  'MVI'
// convertToRoman(1023); //=>  'MXXIII'
// convertToRoman(2014); //=>  'MMXIV'
// convertToRoman(3999); //=>  'MMMCMXCIX'
//
