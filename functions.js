const functions = {
  add: function(a, b){

    if(arguments.length === 0) {
      return "Arguments required";
    } else if(arguments.length > 2){
      return "Please entered just two valid numbers";
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
      return "Numbers required as arguments"
    } 
    
    return x - y
  }
}

module.exports = functions;