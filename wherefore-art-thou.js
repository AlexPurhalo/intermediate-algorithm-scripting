// Wherefore art thou

// Make a function that looks through an array of objects (first argument)
// and returns an array of all objects that have matching property and value pairs (second argument).
// Each property and value pair of the source object has to be present in the object
// from the collection if it is to be included in the returned array.

function whatIsInAName(collection, source) {
	console.log('COLLECTION:');
	console.log(collection);
	console.log('SOURCE:');
	console.log(source);
	console.log('');

	var searchResult = [];
	var srcKeys = Object.keys(source);
	var result = [];
	// shows the keys of source array

	for(var i = 0; i < collection.length; i++) {
		console.log('obj' + i);
		console.log(collection[i]);

		var collectionObjKeys = Object.keys(collection[i]);

		console.log(collectionObjKeys);

		for(var j = 0; j < collectionObjKeys.length; j++) {
			console.log(
				"key " + [collectionObjKeys[j]] + ", val: " + collection[i][collectionObjKeys[j]]
			);

			console.log('');
			searchResult.push(collection[i]);
			console.log('');
		}
		console.log("src.len: " + srcKeys.length + ", searchRes.len: " + searchResult.length);
		if (srcKeys.length <= searchResult.length) {
			console.log('');
			console.log('result << ' );
			console.log(searchResult[0]);
			result.push(searchResult[0]);
			console.log('');
			console.log("result now:");
			console.log(result);
		}

		searchResult = [];
		console.log('---------------');
		console.log('')
	}

	console.log('RESULT:');
	console.log(result);
	return result
}

// whatIsInAName(
// 	[
// 		{ "a": 1, "b": 2 },
// 		{ "a": 1 },
// 		{ "a": 1, "b": 2, "c": 2 }
// 	],
// 	{ "a": 1, "b": 2 }
// );
// // [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].


// whatIsInAName(
// 	[
// 		{ first: 'Romeo', last: 'Montague' },
// 		{ first: 'Mercutio', last: null },
// 		{ first: 'Tybalt', last: 'Capulet' }
// 	], { last: 'Capulet' }
// );
// // [{ first: 'Tybalt', last: 'Capulet' }].
//
//
whatIsInAName(
	[
		{ 'a': 1 },
		{ 'a': 1 },
		{ 'a': 1, 'b': 2 }
	],
	{ 'a': 1 }
);
// [{ 'a': 1 }, { 'a': 1 }, { 'a': 1, 'b': 2 }]
//


//
// whatIsInAName(
// 	[
// 		{ 'a': 1, 'b': 2 },
// 		{ 'a': 1 },
// 		{ 'a': 1, 'b': 2, 'c': 2 }
// 	],
// 	{ 'a': 1, 'c': 2 })
// // [{ 'a': 1, 'b': 2, 'c': 2 }]
