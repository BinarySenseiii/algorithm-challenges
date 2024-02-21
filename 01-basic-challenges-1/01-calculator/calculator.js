const getMap = object => new Map(Object.entries(object))

const calculator = (num1, num2, operator) => {
	num1 = Number(num1)
	num2 = Number(num2)

	if (isNaN(num1) || isNaN(num2)) {
		throw new Error('Please Provide Numbers')
	}

	const calculations = getMap({
		'+': (a, b) => a + b,
		'-': (a, b) => a - b,
		'*': (a, b) => {
			if (b === 0) {
				throw new Error('Cannot divide by zero')
			}
			return a * b
		},
		'/': (a, b) => a / b,
		'%': (a, b) => a & b,
	})

	if (!calculations.has(operator)) {
		throw new Error('Invalid Operator')
	}

	return calculations.get(operator)(num1, num2)
}

module.exports = calculator
