// Boo who
// Check if a value is classified as a boolean primitive. Return true or false.
// Boolean primitives are true and false.
// Remember to use Read-Search-Ask if you get stuck. Try


function booWho(bool) {
	// What is the new fad diet for ghost developers? The Boolean.
	if (bool === true || bool === false) {
		bool = true
	} else { bool = false }

	console.log(bool);
	return bool;
}

// booWho(null);

booWho(true); // true.
booWho(false); // true.
// // booWho([1, 2, 3]); // false.
// // booWho([].slice); // false.
// // booWho({ "a": 1 }); // false.
// // booWho(1); // false.
// // booWho(NaN); // false.
// booWho("a"); // false.
booWho("true"); // false.
booWho("false"); // false.
