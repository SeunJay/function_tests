const functions = require('./functions')

// Add two numbers
test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4 )
});

test('Adds "2" + "3" to return "Please enter two valid numbers"', () => {
  expect(functions.add("2", "3")).toBe("Please enter two valid numbers")
});

test('No arguments passed in', () => {
  expect(functions.add()).toBe("Arguments required")
});

test('There are more than 2 numbers passed in', () =>{
  expect(functions.add(1,2,3,4,5)).toBe("Please entered just two valid numbers");
});

test('Adds two floating numbers', () => {
  expect(functions.add(0.2, 0.3)).toBeCloseTo(0.5, 5)
});

// Add indefinite amount of numbers
test('Adds 1 + 2 + 3 + 4 to equal 10', () => {
  expect(functions.indefiniteAddNumber(1, 2, 3, 4)).toBeDefined()
});

test('Adds 1 + 2 + 3 + 4 to equal 10', () => {
  expect(functions.indefiniteAddNumber(1, 2, 3, 4)).toBe(10)
});

test('No parameters passed in', () => {
  expect(functions.indefiniteAddNumber()).toBe('Numbers required as arguments')
});

test('Arguments that are not numbers should return "Please enter only numbers"', () => {
  expect(functions.indefiniteAddNumber('1', '2', [1, 2, 3], {a: 2})).toBe("Please enter only numbers")
});

test('Adds 1.5 + 2.3 + 3.04 + 4.1 to equal 10', () => {
  expect(functions.indefiniteAddNumber(1.5, 2.3, 3.04, 4.1)).toBeCloseTo(10.94)
});

// Subtract two numbers 

test('Check to see that subtract function is defined', () => {
  expect(functions.subtract(5, 3)).toBeDefined()
});

test('Subtract 3 from 5 to equal 2', () => {
  expect(functions.subtract(5, 3)).toBe(2)
});

test('No arguments passed in', () => {
  expect(functions.subtract()).toBe("Numbers required as arguments")
});
