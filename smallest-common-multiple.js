function smallestCommons(arr) {
	var minVal = Math.min(arr[0], arr[1]), maxVal = Math.max(arr[0], arr[1]), values;

	// gives the values between arrays numbers (sorted from big to small) func(1, 3) => [3, 2, 1]
	function getValues(minVal, maxVal) {
		var val, vals = [];

		for(val = maxVal; val >= minVal; val--) {
			vals.push(val)
		}

		return vals
	}

	values = getValues(minVal, maxVal);

	var resultVal = 0, multVal = 1, i = 0;

	while (i !== values.length) {
		resultVal = values[0] * multVal * values[1];

		for (i = 2; i < values.length; i++) {
			if (resultVal % values[i] !== 0) { break }
		}

		multVal++;
	}


	console.log(resultVal);
	return resultVal;
}

smallestCommons([1,5]);
