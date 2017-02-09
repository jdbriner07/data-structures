var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  _.extend(newStack, queueMethods);
  return newStack
};

var queueMethods = {};

queueMethods.index = 0;
queueMethods.beginning = 0;
queueMethods.end = 0;
queueMethods.size = function() {
	return this.index;
}
queueMethods.enqueue = function(value) {
	this[this.end] = value;
	this.index++;
	this.end++;
}
queueMethods.dequeue = function(){
	if (this.index > 0) {
		this.index--;
		this.beginning++;
	}
	return this[this.beginning];
}