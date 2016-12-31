// Sum All Odd Fibonacci Nums
//
// Given a positive integer num, return the sum of all odd Fibonacci Nums that
// are less than or equal to num.
//
// The first two Nums in the Fibonacci sequence are 1 and 1.
// Every additional Num in the sequence is the sum of the two previous Nums.
// The first six Nums of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci Nums
// less than 10 are 1, 1, 3, and 5.

function sumFibs(num) {
	var prev = 0, cur = 1, act = 0, temp;

	for (cur; cur <= num;) {
		if (cur % 2 !== 0) { act += cur }

		temp = cur + prev;
		prev = cur;
		cur = temp;
	}

	console.log(act);
	return act;
}


// sumFibs(1); // a Num.
sumFibs(5); // 1785.
// sumFibs(4000000); // 4613732.
// sumFibs(4); // 5
// sumFibs(75024); // 60696.
// sumFibs(75025); // 135721.


// function sumFibs(num) {
// 	var i, fir = 0, sec = 1, act;
// 	for (i = 0; i < num; i++) {
// 		act = fir + sec;
// 		fir = sec;
// 		sec = act;
// 	}
//
// 	console.log(act);
// 	return act
// }
