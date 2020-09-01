/*
Largest Sum
Question: How would you find the largest sum of any two elements?

Answer: this is actually very simple and straight forward. Just find the two largest number and return sum of them
*/

function topSum(arr) {
	var first = arr[0],
		second = arr[1],
		len = arr.length;

	if (first < second) {
		second = arr[0];
		first = arr[1];
	}

	for (let i = 2; i < len; i++) {
		let elem = arr[i];
		if (elem > first) {
			second = first;
			first = elem;
		} else if (elem > second) {
			second = elem;
		}
	}
	return first + second;
}

console.log(topSum([ 1, 2, 5, 6, 1, 2, 4 ]));
