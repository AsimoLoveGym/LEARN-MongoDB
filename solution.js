//Task 3
var mongo = require('mongodb').MongoClient;
var assert = require('assert');
var ageLimit = parseInt(process.argv[2]);
var url = "mongodb://localhost:27017/learnyoumongo";

mongo.connect(url, function(err, db) {
  var cursor = db.collection('parrots').find({"age":{$gt: ageLimit}});
  cursor.toArray(function(err, documents){
    console.log(documents);
  })
  db.close();
});
