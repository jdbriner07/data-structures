var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(queueMethods);
  newStack.length = 0;
  newStack.start = 0;
  newStack.end = 0;
  return newStack;
};

var queueMethods = {
  size: function() {
    return this.length;
  },
  enqueue: function(value) {
    this[this.end] = value;
    this.length++;
    this.end++;
  },
  dequeue: function() {
    if (this.length > 0) {
      this.length--;
      var temp = this[this.start];
      delete this[this.start];
      this.start++;
      return temp;
    }
  }
};


