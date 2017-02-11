var BinarySearchTree = function(value) {
  var newTree = Object.create(BinarySearchTree.methods);
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  return newTree;
};

BinarySearchTree.methods = {};

//for insert method, 
BinarySearchTree.methods.insert = function(number) {
  //if the value is less than the main value, goes left
  if (this.value > number) {
    //if not there assign value
    if (this.left === null) {
      this.left = BinarySearchTree(number);
    //otherwise recurse on left side 
    } else {
      this.left.insert(number);

    }
  }
  //if greater than goes right path
  if (this.value < number) {
    //if null assign value
    if (this.right === null) {
      this.right = BinarySearchTree(number);
    //recursive call for right side of tree
    } else {
      this.right.insert(number);
    }
  }

  

};

BinarySearchTree.methods.contains = function(number) {
  //if value equals number
  if (this.value === number) {
    //return true;
    return true;
  }
  //if num less than val check left
  if (this.value > number) {
    if (this.left === null) {
      return false;
    }
    //call contains on left branch 
    return this.left.contains(number);
  }
  //if num greater than val check right
  if (this.value < number) {
    if (this.right === null) {
      return false;
    }
    //call contains onright branch
    return this.right.contains(number);
  }
};

BinarySearchTree.methods.depthFirstLog = function(cb) {
  //cb on current tree value
  cb(this.value);
  //if left branch is not null
  if (this.left !== null) {
    //recur on left
    this.left.depthFirstLog(cb);
  }
  //if right branch is not null
  if (this.right !== null) {
    //recur on right
    this.right.depthFirstLog(cb);
  }

};


BinarySearchTree.methods.rebalance = function(treeArray) {};

/*
 * Complexity: What is the time complexity of the above functions?
 insert O(log n)
 contains O(log n) 
 depthFirstLog O(n)
 */

























