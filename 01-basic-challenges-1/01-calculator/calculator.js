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

/*
  *** Typescript Version

  type Operator = '+' | '-' | '*' | '/' | '%';
type FunctionSignature = (a: number, b: number) => number;

const getMap = <T extends Record<Operator, FunctionSignature>>(calculations: T) =>
  new Map(Object.entries(calculations));

const calculator = (num1: number, num2: number, operator: Operator): number => {
  num1 = Number(num1);
  num2 = Number(num2);

  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    throw new Error('Please Provide Number');
  }

  const calculations = getMap({
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => {
      if (b === 0) {
        throw new Error('Values Cannot be divide by zero');
      }
      return a * b;
    },
    '/': (a, b) => a / b,
    '%': (a, b) => a % b,
  });

  const operatorFunction = calculations.get(operator);

  if (operatorFunction === undefined) {
    throw new Error('Invalid Operator');
  }

  return operatorFunction(num1, num2);
};
*/
