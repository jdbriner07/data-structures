

// Instantiate a new graph
var Graph = function() {

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = {};
  this[node].value = node;
  this[node].edges = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this[node] !== undefined) {
    return this[node].value === node;
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var x in this[node].edges) {
    if (x !== 'value') {
      delete this[x].edges[node];
    }
  }
  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this[fromNode] === undefined || this[toNode] === undefined) {
    return false;
  }
  return this[fromNode].edges[toNode] !== undefined;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this[fromNode].edges[toNode] = this[toNode];
  this[toNode].edges[fromNode] = this[fromNode];

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this[fromNode].edges[toNode];
  delete this[toNode].edges[fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this) {
    if (typeof this[key] !== 'function') {
      cb(this[key].value);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 forEachNode is linear O(n)
 others are all constant O(1)
 */















