var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var first = 0;
  var last = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[last] = value;
    size++;
    last++;
  };

  someInstance.dequeue = function() {
    var temp = storage[first];
    delete storage[first];
    if (size > 0){
      size--;
      first++;
    }
    return temp;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
