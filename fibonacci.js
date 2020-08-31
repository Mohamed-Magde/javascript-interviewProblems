/*
Question: How could you find all prime factors of a number?

Answer: Run a while loop. start dividing by two and if not divisible increase divider until u r done.
*/

function fibonacci(n) {
	if (n <= 1) return n;
	else return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(6));
