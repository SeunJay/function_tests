const functions = {
  add: function(a, b){
    if(typeof a !== 'number' || typeof b !== 'number') {
      return "Please enter two valid numbers";
    }
    return a + b
  }
}

module.exports = functions;