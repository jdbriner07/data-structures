var Stack = function() {
	var newStack = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
 	_.extend(newStack, stackMethods);
  return newStack;
};

var stackMethods = {
	count: 0,
	size: function () {
		return this.count;
	},
	push: function(value) {
		this[this.count] = value;
		this.count++;
	},
	pop: function() {
		if (this.count > 0) {
			this.count--;
		}
		var temp = this[this.count];
		delete this[this.count];
		return temp;
	}
};

