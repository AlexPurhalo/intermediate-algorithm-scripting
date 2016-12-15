// Sum All Numbers in a Range
// We'll pass you an array of two numbers.
// Return the sum of those two numbers and all numbers between them.

function sumAll(arr) {
    // console.log("(arr) array that comes as parameter: " + arr);
    var nums_arr = []; // initialization of empty array for future numbers pushing

    // iteration through received as parameter array
    for (i = Math.min(arr[0], arr[1]); i < Math.max(arr[0], arr[1]) + 1; i++) {
        // console.log("(i) item of every iteration: " + i);
        nums_arr.push(i); // pushed item of iteration to numbers array

        var nums_sum = nums_arr.reduce(function(prev, next) {
            return prev + next
        });

    }

    // console.log("(nums_arr) array of numbers between: " + nums_arr);
    // console.log("(nums_sum) sum of elements in numbers: " + nums_sum);
    return nums_sum
}

// console.log("sumAll(arr) - result of sumAll func with [10, 5] array as argument: " + sumAll([10, 5]));
sumAll([10, 5]);