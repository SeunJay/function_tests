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
    for(i = 0; i < num.length; i++) {
      result += num[i];
    }
    return result
  }
}

module.exports = functions;