// Wherefore art thou

// Make a function that looks through an array of objects (first argument)
// and returns an array of all objects that have matching property and value pairs (second argument).
// Each property and value pair of the source object has to be present in the object
// from the collection if it is to be included in the returned array.

function whatIsInAName(collection, source) {
	var searchResult = [];
	var srcKeys = Object.keys(source);
	var result = [];

	for(var i = 0; i < collection.length; i++) {
		var collKeys = Object.keys(collection[i]);

		for(var k = 0; k < collKeys.length; k++) {



			for(var n = 0; n < srcKeys.length; n++) {
				console.log('COLLECTION:');
				console.log(collection[i]);
				console.log('SOURCE');
				console.log(source);
				console.log('objKey: ' + collKeys[k] + ', srcKey: ' + srcKeys[n]);
				console.log('objVal: ' + collection[i][collKeys[k]] + ', srcVal: ' + source[srcKeys[n]]);
				console.log('');

				if (collKeys[k] === srcKeys[n] && collection[i][collKeys[k]] === source[srcKeys[n]]) {
					console.log('yeas');
					searchResult.push(collection[i])
				}
			}
			console.log('-------------')
		}

		if (srcKeys.length <= searchResult.length) {
			result.push(searchResult[0]);
		}
		searchResult = [];
	}

	console.log(result);
	return result
}

whatIsInAName(
	[
		{ 'a': 1, 'b': 2 },
		{ 'a': 1 },
		{ 'a': 1, 'b': 2, 'c': 2 }
	],
	{ 'a': 1, 'c': 2 })
// [{ 'a': 1, 'b': 2, 'c': 2 }]

// whatIsInAName(
// 	[
// 		{ first: 'Romeo', last: 'Montague' },
// 		{ first: 'Mercutio', last: null },
// 		{ first: 'Tybalt', last: 'Capulet' }
// 	], { last: 'Capulet' }
// );
// whatIsInAName(
// 	[
// 		{ "a": 1, "b": 2 },
// 		{ "a": 1 },
// 		{ "a": 1, "b": 2, "c": 2 }
// 	],
// 	{ "a": 1, "b": 2 }
// );
// // [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].



// // [{ first: 'Tybalt', last: 'Capulet' }].
//
//
// whatIsInAName(
// 	[
// 		{ 'a': 1 },
// 		{ 'a': 1 },
// 		{ 'a': 1, 'b': 2 }
// 	],
// 	{ 'a': 1 }
// );
// [{ 'a': 1 }, { 'a': 1 }, { 'a': 1, 'b': 2 }]
//




