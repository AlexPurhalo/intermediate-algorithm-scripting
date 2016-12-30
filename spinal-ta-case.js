// Spinal Tap Case

// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
	str = str.replace(/[a-z][A-Z]/g, function(matched) {
		return  matched[0] + '-' + matched[1].toLowerCase();
	});

	str = str.replace(/[\s][-_]/g, '-');
	str = str.replace(/\s/g, '-');
	str = str.replace(/[A-Z]/g, function(matched) { return matched.toLowerCase()});
	str = str.replace(/_/g, '-');

	return str;
}

// spinalCase('This Is Spinal Tap');
spinalCase("This Is Spinal Tap"); // "this-is-spinal-tap".
spinalCase("thisIsSpinalTap"); // "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show"); // "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh"); // "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things"); // "all-the-small-things".
