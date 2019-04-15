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
  expect(functions.add(1,2,3,4,5)).toBe("Please enter just two valid numbers");
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
  expect(functions.subtract(0, 3)).toBe(-3)
});

test('No arguments passed in', () => {
  expect(functions.subtract()).toBe("Numbers required as arguments")
});

test('There are more than 2 numbers passed in', () => {
  expect(functions.subtract(2, 3, 3, 4)).toBe("Please enter just two valid numbers")
});

test('Subtract "2" from "3" to return "Please enter two valid numbers"', () => {
  expect(functions.subtract("3", [1,2], {}, true)).toBe("Please enter just two valid numbers")
});

test('Subtract two floating numbers', () => {
  expect(functions.subtract(-0.304, -0.1003)).toBe(-0.2037)
});

// Multiply indefinite amount of numbers 

test('Check to see that indefiniteMuliplyNumber function is defined', () => {
  expect(functions.indefiniteMultiplyNumber()).toBeDefined()
});

test('Multiply 1, 2, 3, 4, 5', () => {
  expect(functions.indefiniteMultiplyNumber(1, 2, 3, 4, 5)).toBe(120)
});


test('No parameters passed in', () => {
  expect(functions.indefiniteMultiplyNumber()).toBe('Numbers required as arguments');
});

test('Arguments that are not numbers should return "Please enter only numbers"', () => {
  expect(functions.indefiniteMultiplyNumber('1', '2', [1, 2, 3], {a: 2})).toBe("Invalid input: Please enter only numbers")
});

// Divide two numbers

test('Check to see that divideNumber function is defined', () => {
  expect(functions.divideNumber(4, 2)).toBeDefined();
});

test('Divide 4 by 2 to equal 2', () => {
  expect(functions.divideNumber(4, 2)).toBe(2);
});

test('There are more than 2 numbers passed in', () => {
  expect(functions.divideNumber(2, 3, 3, 4)).toBe("Invalid input: Please enter just two valid numbers")
});

test('Arguments that are not numbers should return "Please enter only numbers"', () => {
  expect(functions.divideNumber('1', '2', [1, 2])).toBe("Invalid input: Please enter just two valid numbers")
});

test('Divide 4 by 0 to equal Infinity', () => {
  expect(functions.divideNumber(4, 0)).toBe(Infinity);
});

// Concatenate two strings

test('Check to see that stringConcat function is defined', () => {
  expect(functions.stringConcat()).toBeDefined()
});

test('Joins "Seun" and "Jay" to return "SeunJay"', () => {
  expect(functions.stringConcat("Seun", "Jay")).toBe("SeunJay")
});

test('There are more than 2 string passed in', () => {
  expect(functions.stringConcat("Seun", "Jay", "Ope", "Michael")).toBe("Invalid input: Please enter just two strings")
});

test('Arguments that are not strings should return ""Invalid input: Please enter just two strings""', () => {
  expect(functions.stringConcat("Seun, 1")).toBe("Invalid input: Please enter just two strings");
});

describe('Check repos from git api', () => {
  test('Should return user repos', async () => {
      await functions.getUserRepo('SeunJay')
          .then(response => {
              expect(response).toContain(("myRepo", "Hush"));
          })
  });
 
});































