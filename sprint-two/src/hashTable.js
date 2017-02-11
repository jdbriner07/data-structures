

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  //limitedArray.each to make an empty bucket array at each index 
  //this._storage.each(function() { ; } );
  // this._storage.each(function( i) {
  //   console.log(1);
  //   this._storage[i] = [];

  // });
  for (var i = 0; i < this._limit; i++) {
    this._storage[i] = [];
  }
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //make boolean
  var keyFound = false;
  // push kv pair into bucket at the found index
  for (var i = 0; i < this._storage[index].length; i++) {   
    //if we find our key 
    if (this._storage[index][i][0] === k) {
      this._storage[index][i] = [k, v];
      keyFound = true;
    }
  }
  if (!keyFound) {
    this._storage[index].push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // loop through the bucket at given index
  for (var i = 0; i < this._storage[index].length; i++) {   
    //if we find our key 
    if (this._storage[index][i][0] === k) {
      //return it's associated value
      return this._storage[index][i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // loop through the bucket at given index
  for (var i = 0; i < this._storage[index].length; i++) {
    //if we find our key 
    if (this._storage[index][i][0] === k) {
      //delete it's associated value
      this._storage[index].splice(i, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 O(1) Constant - all if average
 O(n) Linear - all if worst case (or if aren't doubling)
 */


// Make an array at given length in storage 
// Make a bucket array at each element in storage 

// insert function to take in a key and value as input
// use getindex fn to get number index for key
// add key/value pair as a binary tuple array to the bucket at the found index in the storage

// retrieve fn to take in key 
// use getindex fn to get number index for key
// look at bucket at storage index provided
// look at each tuple in bucket to find key
// return value associate with that key

// remove fn to take in key
// use getindex fn to get number index for key
// look at bucket at storage index provided
// look at each tuple in bucket to find key
// delete tuple containing associated key 
// we'd need to shift the tuples past the deleted tuple so that no holes