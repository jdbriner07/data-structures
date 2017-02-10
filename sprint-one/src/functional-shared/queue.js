var Queue = function() {
  var newStack = {};
  _.extend(newStack, queueMethods);
  return newStack;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  _.extend(newStack, queueMethods);
  return newStack;
};

var queueMethods = {
  length: 0,
  start: 0,
  end: 0,
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

