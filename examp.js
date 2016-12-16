obj1 = {
	a: 1,
	b: 2,
	c: 2
};

obj2 = {
	a: 1,
	b: 2,
	c: 2,
	d: 2
};

var obj1Keys = Object.keys(obj1);
var obj2Keys = Object.keys(obj2);

var values_arr = [];
var same = false;

for(var i = 0; i < obj1Keys.length; i++) {
	// console.log('key: ' + obj1Keys[i] + ', val: ' + obj1[obj1Keys[i]]);

	console.log('');
	for(var j = 0; j < obj2Keys.length; j++) {
		// console.log('key: ' + obj2Keys[j] + ', val:' + obj2[obj2Keys[j]]);

		if (obj1Keys[i] === obj2Keys[j] && obj1[obj1Keys[i]] === obj2[obj2Keys[j]]) {
			console.log('key: ' + obj2Keys[j] + ', val:' + obj2[obj2Keys[j]]);
			values_arr.push(obj1Keys);

			// for(var n = 0; n < values_arr.length; n++) {
			// 	console.log('fuck')
			// }
		}
	}
}


var new_arr = [];
console.log('');
if (obj1Keys.length === values_arr.length ) {
	new_arr = values_arr[0];
}

console.log(new_arr);



