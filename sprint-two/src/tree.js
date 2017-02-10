var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var treeContainsTest = false;
  var loopChildren = function(tree) {
  //check if current tree value is the target
    if (tree.value === target) {
      //return true
      treeContainsTest = true;
    }
    //check children has length
    if (tree.children.length) {
      //for loop over all children
      for (var i = 0; i < tree.children.length; i++ ) {
        //if not recursively call its children
        loopChildren(tree.children[i]);
      }
    }
  };
  loopChildren(this);
  return treeContainsTest;
};



/*
 * Complexity: What is the time complexity of the above functions?
O(n) because the contains method only looks at each child / node once.
 */
