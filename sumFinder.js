/*
Sum of two
Question: From a unsorted array, check whether there are any two numbers that will sum up to a given number?
*/

function sumFinder(arr, sum) {
	var len = arr.length,
		elemOne = null,
		elemTwo = null;
	for (let i = 0; i < len; i++) {
		elemOne = arr[i];
		for (let j = i + 1; j < len; j++) {
			elemTwo = arr[j];
			if (elemOne + elemTwo == sum) {
				return true;
			}
		}
		return false;
	}
}
console.log(sumFinder([ 6, 3, 2, 4, 5, 1, 2 ], 900));

function sumFinderTwo(arr, sum) {
	var len = arr.length,
		sumFinder = {},
		substract = 0,
		elem = null;

	for (let i = 0; i < len; i++) {
		elem = arr[i];
		substract = sum - elem;
		if (sumFinder[substract]) {
			return true;
		} else {
			sumFinder[elem] = true;
		}
	}
	return false;
}
console.log(sumFinderTwo([ 6, 3, 2, 4, 5, 1, 2 ], 9));
