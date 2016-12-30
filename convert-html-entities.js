// Convert HTML Entities
// Convert the characters &, <, >, " (double quote), and ' (apostrophe),
// in a string to their corresponding HTML entities.

function convertHTML(str) {
	var i, newString = '', val;


	for (i = 0; i < str.length; i++) {
		val = str[i];
		if (val === '&') { newString += '&amp;'}
		else if (val === '<') { newString += '&lt;' }
		else if (val === '>') { newString += '&gt;' }
		else if (val === '"') { newString += '&quot;'}
		else if (val === "'") { newString += '&apos;' }
		else { newString += str[i] }
	}


	console.log(newString);
	return newString;
}

convertHTML("hux");
convertHTML("Dolce & Gabbana"); // Dolce &​amp; Gabbana.

convertHTML("Hamburgers < Pizza < Tacos"); // Hamburgers &​lt; Pizza &​lt; Tacos.
convertHTML("Sixty > twelve"); // Sixty &​gt; twelve.
convertHTML('Stuff in "quotation marks".'); // Stuff in &​quot;quotation marks&​quot;.
convertHTML("Shindler's List"); // Shindler&​apos;s List.
convertHTML("<>"); // &​lt;&​gt;.
// convertHTML("abc"); // abc.
