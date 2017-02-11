var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
};

DoublyLinkedList.prototype.addToTail = function(value) {
  if (this.head === null) {
    this.tail = Node(value);
    this.head = this.tail;
  } else {
    this.tail.next = Node(value);
    this.tail.next.prev = this.tail;
    this.tail = this.tail.next;
  }
};

DoublyLinkedList.prototype.removeHead = function() {
  if (this.head !== null) {
    var temp = this.head.value;
    this.head = this.head.next;
    this.head === null ? this.tail = null : this.head.prev = null;

    // if (this.head !== null) {
    //   this.head.prev = null;
    // }
    // if (this.head === null) {
    //   this.tail = null;
    // }
    return temp;
  } 
};

DoublyLinkedList.prototype.contains = function(target) {
  var current = this.head;
  while (current !== null) {
    if (current.value === target) {
      return true;
    } else {
      current = current.next;
    }
  }
  return false;
};

DoublyLinkedList.prototype.removeTail = function() {
  if (this.tail !== null) {
    var temp = this.tail.value;
    this.tail = this.tail.prev;
    this.tail === null ? this.prev = null : this.tail.next = null;
    return temp;
  } 
};

DoublyLinkedList.prototype.addToHead = function(value) {
  if (this.tail === null) {
    this.head = Node(value);
    this.tail = this.head;
  } else {
    this.head.prev = Node(value);
    this.head.prev.next = this.head;
    this.head = this.head.prev;
  }
};


var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 O(n) there is one while loop that adds n complexitiy, all other aspects are O(1).
 */