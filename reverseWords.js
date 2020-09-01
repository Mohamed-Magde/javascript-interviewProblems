/*
string reverse
Question: How would you reverse a string in JavaScript?

Answer: I can loop through the string and concatenate letters to a new string
*/

function reverseOneWord(str) {
	return str.split('').reverse().join('');
}
console.log(reverseOneWord('mohamed'));

/*
reverse words
Question: How would you reverse words in a sentence?

Answer: You have to check for white space and walk through the string. Ask is there could be multiple whitespace.
*/

function reverseWords(str) {
	return str.split(' ').reverse().join(' ').split('').reverse().join('');
}
console.log(reverseWords('hi mohamed how are you'));
