/*
 How would you verify a prime number?

 a prime number is only divisible by itself and 1. So, i will run a while loop and increase by 1. (look at the code example. If you dont get it. this is not your cake. do learn javaScript basics and come back.)
 */

function isPrime(num) {
	while (num % 2) {
		if (num % 2 == 0) {
			return false;
		} else {
			return true;
		}
	}
}
