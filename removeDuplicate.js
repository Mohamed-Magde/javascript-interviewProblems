/*
Question: How would you remove duplicate members from an array?

Answer: will start a while looping and keep an object/ associated array. If i find an element for the first time i will set its value as true (that will tell me element added once.). if i find a element in the exists object, i will not insert it into the return array.
*/

function removeDuplicate(arr) {
	var exists = {},
		results = [],
		elem = null;
	for (let i = 0; i < arr.length; i++) {
		elem = arr[i];
		if (!exists[elem]) {
			results.push(elem);
			exists[elem] = true;
		}
	}
	return results;
}
console.log(removeDuplicate([ 1, 1, 44, 44, 21, 2, 11, 22, 11 ]));
