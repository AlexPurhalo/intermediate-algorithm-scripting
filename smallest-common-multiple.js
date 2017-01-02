// Smallest Common Multiple

function smallestCommons(arr) {
	var minVal = Math.min(arr[0], arr[1]), maxVal = Math.max(arr[0], arr[1]), result;

	function getValues(minVal, maxVal) {
		var val, vals = [];

		for(val = maxVal; val >= minVal; val--) {
			vals.push(val)
		}

		return vals
	}

	var values = getValues(minVal, maxVal), afterNextVal, sumTwoVals;

	sumTwoVals = findSameValue(values[0], values[1]);

	for (var i = 0; i <= values.length -1; i ++) {
		afterNextVal = values[i+2];


		if (afterNextVal !== undefined) {
			if (sumTwoVals % afterNextVal !== 0) { sumTwoVals = findSameValue(sumTwoVals, afterNextVal) }
			// console.log(sumTwoVals);
			result = sumTwoVals
		}
	}

	function findSameValue(biggestVal, lessVal) {
		var initValBiggest = biggestVal, initValLess = lessVal;
		var multVal = 1, biggestVals = [], keyVal = false;


		while(keyVal === false) {
			biggestVal = biggestVal * multVal;
			lessVal = lessVal * multVal;

			biggestVals.push(biggestVal);

			if (searchVal(biggestVals, lessVal) === true) {
				keyVal = lessVal;
			}

			biggestVal = initValBiggest;
			lessVal = initValLess;

			multVal += 1;
		}

		function searchVal(arr, val) {
			for (var i = 0; i < arr.length; i++) {
				if (val === arr[i]) { return true }
			}
			return false
		}

		return keyVal;
	}

	console.log(result);
	return result
}

// for 2 => 2, 4, 8, 10 ... 60
// for 3 => 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60
// for 4 => 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60
// for 5 => 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60
smallestCommons([1, 5]);
//
// smallestCommons([1, 5]); // a valber.
// smallestCommons([1, 5]); // 60.
// smallestCommons([5, 1]); // 60.
// smallestCommons([1, 13]); // 360360.
// smallestCommons([23, 18]); // 6056820.
