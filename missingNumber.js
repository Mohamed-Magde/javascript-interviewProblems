/*
Question: from a unsorted array of numbers 1 to 100 excluding one number, how will you find that number.

Explanation: You have an array of numbers 1 to 100 in an array. Only one number is missing in the array. The array is unsorted. Find the missing number.

Answer: You have to act like you are thinking a lot. and then talk about the sum of a linear series of n numbers = n*(n+1)/2

*/

function missingNumber(arr) {
	var n = arr.length + 1,
		len = arr.length,
		sum = 0,
		expectedSum = n * (n + 1) / 2;

	for (let i = 0; i < len; i++) {
		var elem = arr[i];
		sum += elem;
	}
	return expectedSum - sum;
}
console.log(missingNumber([ 1, 2, 4, 5, 6, 3, 8 ]));
