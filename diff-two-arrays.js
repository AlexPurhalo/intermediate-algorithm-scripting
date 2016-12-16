// Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays,
// but not both. In other words, return the symmetric difference of the two arrays.


function diffArray(arr1, arr2) {
	// shows the first adn second arrays
	console.log("received arrays: (arr1, arr2): " + "[" + arr1 + "], [" + arr2 + "]");
	console.log("");

	// initialization of empty array for future elements pushing
	var result = [];

	// iteration through the first array
	for (var i = 0; i < arr1.length; i++) {
		// shows a item of every iteration in first array
		console.log("arr1[i]: " + arr1[i]);

		// pushes a item to from the first array to before initialized result array
		// if item from first array haven't been founded in the second

		// shows a index of value from the first array in the second if it exist,
		// otherwise shows -1
		console.log("index of arr1[i] [" + arr1[i] + "] in arr2 [" + arr2 + "] is: " + arr2.indexOf(arr1[i]));
		console.log("");
		if (arr2.indexOf(arr1[i]) === -1) {
			result.push(arr1[i]);
		}
	}

	// iteration through the second array
	for (var j = 0; j < arr2.length; j++) {

		if (arr1.indexOf(arr2[j]) === -1) {
			result.push(arr2[j]);
		}
	}

	// shows the array where've been pushed the items from previous operations
	console.log("diff in arrays: [" + result + "]");
	return result;
}


diffArray([1, 2, 3, 5, 21], [1, 2, 3, 4, 5]);

// diffArray(
//     ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
//     ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
// ); // ['pink wool']
//
// diffArray(
//     ['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
//     ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
// ); // ['diorite', 'pink wool']
//
// diffArray(
//     ['andesite', 'grass', 'dirt', 'dead shrub'],
//     ['andesite', 'grass', 'dirt', 'dead shrub']
// ); // []
// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); // [4]
//
// diffArray([1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4]); // ['piglet', 4]
//
// diffArray(
//     [], ['snuffleupagus', 'cookie monster', 'elmo']
// ); // ['snuffleupagus', 'cookie monster', 'elmo']
//
// diffArray([1, 'calf', 3, 'piglet'], [7, 'filly']); // [1, 'calf', 3, 'piglet', 7, 'filly']
