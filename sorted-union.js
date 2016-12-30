// Write a function that tajes two or more arrays and returns a new array of unique values
// in the order of the original provided arrays.
//
// In other words, all values present from all arrays should be included
// in their original order, but with no duplicates in the final array.
// The unique numbers should be sorted by their original order,
// but the final array should not be sorted in numerical order.
// Checj the assertion tests for examples.

function uniteUnique() {
	var i, j, resultArr = [];

	for(i = 0; i < arguments.length; i++) {
		for(j = 0; j < arguments[i].length; j++) {
			if (resultArr.length < 1) {
				resultArr.push(arguments[i][j])
			} else {
				if (includeVal(resultArr, arguments[i][j]) !== true) {
					resultArr.push(arguments[i][j])
				}
			}

		}
	}

	function includeVal(arr, val) {
		var k;
		for (k = 0; k < arr.length; k++) {
			if (val === arr[k]) { return true }
		}

		return false
	}

	return resultArr
}

console.log(uniteUnique([1, 92, 1], [5, 2, 1, 4], [2, 1]));
// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); // [1, 3, 2, 5, 4].
// uniteUnique([1, 3, 2], [1, [5]], [2, [4]]); // [1, 3, 2, [5], [4]].
// uniteUnique([1, 2, 3], [5, 2, 1]); // [1, 2, 3, 5].
// uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]); // [1, 2, 3, 5, 4, 6, 7, 8]
