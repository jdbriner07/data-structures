var Stack = function() {
  var newStack = {};
  _.extend(newStack, stackMethods);
  return newStack;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {
  size: function() {
    return this.length;
  },
  length: 0,
  push: function(value) {
    this[this.length] = value;
    this.length++;
  },
  pop: function() {
    if (this.length > 0) {
      this.length--;
      return this[this.length];
    }
  }
};