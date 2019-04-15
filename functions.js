const axios = require('axios');

const functions = {
  add: function(a, b){

    if(arguments.length === 0) {
      return "Arguments required";
    } else if(arguments.length > 2){
      return "Please enter just two valid numbers";
    }

    if(typeof a !== 'number' || typeof b !== 'number') {
      return "Please enter two valid numbers";
    }
    return a + b
  },

  indefiniteAddNumber: function(...num) {
    let result = 0;

    if(arguments.length === 0) return 'Numbers required as arguments';

    for(i = 0; i < num.length; i++) {
      if(typeof num[i] !== 'number') {
        return "Please enter only numbers";
      }
      result += num[i];
    }
    return result
  },

  subtract: function(x, y){
    if(arguments.length === 0) {
      return "Numbers required as arguments";
    } else if(arguments.length > 2){
      return "Please enter just two valid numbers";
    }

    if(typeof x !== 'number' || typeof y !== 'number') {
      return "Please enter just two valid numbers";
    }
    
    return x - y
  },

  indefiniteMultiplyNumber: function(...num){
    let result = 1;

    if(arguments.length === 0) return 'Numbers required as arguments';

    for(i = 0; i < num.length; i++) {

      if(typeof num[i] !== 'number') {
        return "Invalid input: Please enter only numbers"
      }
      result *= num[i];
    }
    return result
    
  },

  divideNumber: function(a, b){
    if(arguments.length > 2) return "Invalid input: Please enter just two valid numbers";
    if(typeof a !== 'number' || typeof b !== 'number') {
      return "Invalid input: Please enter just two valid numbers"
    }
    return a / b
  },

  stringConcat: function(str1, str2){
    let a = str1;
    let b = str2;
    if(arguments.length > 2) return "Invalid input: Please enter just two strings";
    if(typeof a !== 'string' || typeof b !== 'string') return "Invalid input: Please enter just two strings";

    return str1 + str2 
  }
}

module.exports = functions;