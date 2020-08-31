// Question: How would you find the greatest common divisor of two numbers?

function greatestCommonDivisor(a, b) {
	var divisor = 2;
	var greatestDivisor = 1;

	while (a >= divisor && b >= divisor) {
		if (a % divisor == 0 && b % divisor == 0) {
			greatestDivisor = divisor;
		}
		divisor++;
	}
	return greatestDivisor;
}

// recursive version
function refactorCommonDivisor(a, b) {
	if (b == 0) {
		return a;
	} else {
		var x = a % b;
		return refactorCommonDivisor(b, x);
	}
}
console.log(refactorCommonDivisor(14, 21));
