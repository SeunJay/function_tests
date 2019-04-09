const functions = require('./functions')

test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4 )
});

test('Adds "2" + "3" to return "Please enter two valid numbers"', () => {
  expect(functions.add(2, 2)).toBe("Please enter two valid numbers")
})