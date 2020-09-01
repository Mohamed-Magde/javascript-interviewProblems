/*
Question: How could you find the first non repeating char in a string?
*/

function firstNonRepeatChar(str) {
	var len = str.length,
		char = null,
		charCount = {};

	for (let i = 0; i < len; i++) {
		char = str[i];
		if (charCount[char]) {
			charCount[char]++;
		} else {
			charCount[char] = 1;
		}
	}

	for (var j in charCount) {
		if (charCount[j] == 1) return j;
	}
}

console.log(firstNonRepeatChar('the quick brown fox jumps then quickly blow air'));
