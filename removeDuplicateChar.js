/*
Question: How will you remove duplicate characters from a sting?

You: This is very similar to first non repeating char. You will asks similar question. Is it case sensitive.

If interviewer says, this is case sensitive then life become easier you. If he says no. you can either use string.toLowercase() to make whole string lower. he might not like it. because return string will not posses the same case. So
*/

function removeDuplicateChar(str) {
	var len = str.length,
		newStr = [],
		elem = null,
		charCount = {};
	for (let i = 0; i < len; i++) {
		elem = str[i];
		if (charCount[elem]) {
			charCount[elem]++;
		} else {
			charCount[elem] = 1;
		}
	}
	for (var j in charCount) {
		if (charCount[j] == 1) {
			newStr.push(j);
		}
	}
	return newStr.join('');
}

console.log(removeDuplicateChar('Learn more javascript dude'));
