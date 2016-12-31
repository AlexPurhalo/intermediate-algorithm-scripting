// Sum All Primes
//
// Sum all the prime numbers up to and including the provided number.
//
// A prime number is defined as a number greater than one and having only two divisors, one and itself.
// For example, 2 is a prime number because it's only divisible by one and two.
// The provided number may not be a prime.
// 2, 3, 5, 7,
function sumPrimes(num) {
	var result = 0, i, added = 2, j, eqCount = 0; // eqCount - count of items that equal to zero
	for (i = 2; i <= num; i++) {
		added += 1;
		j = 2;
		while (j <= added) {
			if (i % j === 0) { eqCount += 1}
			if (eqCount <= 1) { j+=1 } else if (eqCount > 1) { j = j + added }
		}
		// for (j = 2; j <= added; j++) {
		// 	if (i % j === 0) { eqCount += 1}
		// 	console.log('i: ' + i);
		// 	console.log('j: ' + j);
		// 	console.log(i + ' % ' + j + ' = ' + i % j);
		// 	console.log("eqCount: " + eqCount);
		// 	console.log();
		// }

		if (eqCount <= 1) {result+=i}
		eqCount = 0;
	}
	console.log('result: ' + result);
	return result
}

sumPrimes(977);

// sumPrimes(10); // a number.
// sumPrimes(10); // 17
// sumPrimes(977); // 73156.
