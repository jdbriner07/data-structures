

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
  //limitedArray.each to make an empty bucket array at each index 
  //this._storage.each(function() { ; } );
  // this._storage.each(function( i) {
  //   console.log(1);
  //   this._storage[i] = [];

  // });
  // for (var i = 0; i < this._limit; i++) {
  //   this._storage[i] = [];
  // }
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //make boolean
  //var keyFound = false;
  // push kv pair into bucket at the found index
  var bucket = this._storage.get(index) || [];
  for (var i = 0; i < bucket.length; i++) {   
    //if we find our key 
    if (bucket[i][0] === k) {
      var temp = bucket[i][1];
      bucket[i][1] = v;
      return temp;
    }
  }

  bucket.push([k, v]);
  this._count++;
  this._storage.set(index, bucket);

  if (this._count >= this._limit * 0.75) {
    this.resize(Math.floor(this._limit * 2));
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // loop through the bucket at given index
  var bucket = this._storage.get(index) || [];
  for (var i = 0; i < bucket.length; i++) {   
    //if we find our key 
    if (bucket[i][0] === k) {
      //return it's associated value
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // loop through the bucket at given index
  var bucket = this._storage.get(index) || [];
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    //if we find our key 
    if (tuple[0] === k) {
      //delete it's associated value
      bucket.splice(i, 1);
      this._count--;
      if (this._count < this._limit * 0.25) {
        this.resize(Math.floor(this._limit / 2));
      }
      return tuple[1];
    }
  }
};

HashTable.prototype.resize = function(newLimit) {
  debugger;
  var temp = this._storage;
  newLimit = Math.max(newLimit, 8);
  if (newLimit === this._limit) { return; }
  
  this._limit = newLimit;
  this._storage = LimitedArray(this._Limit);
  this._count = 0;
  // for (var i = 0; i < this._limit; i++) {
  //   if (!!temp[i]) {
  //     for (var j = 0; j < temp[i].length; j++) {
  //       this.insert(temp[i][j][0], temp[i][j][1]);
  //     }
  //   }
  // }

  var buckets = this;

  temp.each(function(bucket) {
    if (!bucket) { return; }
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      buckets.insert(tuple[0], tuple[1]);
    }
  });
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