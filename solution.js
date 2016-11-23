//Task 3, Find
// var mongo = require('mongodb').MongoClient;
// var ageLimit = parseInt(process.argv[2]);
// var url = "mongodb://localhost:27017/learnyoumongo";
//
// mongo.connect(url, function(err, db) {
//   if (err) throw err;
//   var cursor = db.collection('parrots').find({"age":{$gt: ageLimit}});
//   cursor.toArray(function(err, documents){
//     if (err) throw err;
//     console.log(documents);
//   })
//   db.close();
// });

//Task 4, Find project
// var mongo = require('mongodb').MongoClient;
// var ageLimit = parseInt(process.argv[2]);
// // for the url, have some question. should use "learnyoumongo" or the follow one?
// var url = "mongodb://localhost:27017/learnyoumongo";
//
// mongo.connect(url, function(err, db) {
//   if (err) throw err;
//   var cursor = db.collection('parrots').find({"age":{$gt: ageLimit}}, {name: 1, age: 1, _id: 0});
//   cursor.toArray(function(err, documents){
//     if (err) throw err;
//     console.log(documents);
//   })
//   db.close();
// });

//Task 5, Insert

// var mongo = require('mongodb').MongoClient
// var firstName = process.argv[2]
// var lastName = process.argv[3]
// var url = "mongodb://localhost:27017/learnyoumongo"
// var insertJSON = {
//   firstName : firstName,
//   lastName : lastName
// }
//
// mongo.connect(url, function(err, db) {
//   if (err) throw err
//   var collection = db.collection('docs')
//   collection.insert(insertJSON,function(err, data){
//     if (err) throw err
//     console.log(JSON.stringify(insertJSON))
//   })
//   db.close()
// })

//Task 6, Update
// var mongo = require('mongodb').MongoClient;
// var databaseName = process.argv[2];
// var url = "mongodb://localhost:27017/" + databaseName;
//
// mongo.connect(url, function(err, db) {
//   if (err) throw err
//   var collection = db.collection('users')
//   collection.update({
//     "name": "Tina",
//     "age": 30,
//     "username": "tinatime"
//   }, {
//     $set: {
//     "age": 40
//     }
//   }
//   ,function(err, data){
//     if (err) throw err
//     console.log("Success!")
//   }
//   )
//   db.close()
// })

//Task 7, Remove
// var mongo = require('mongodb').MongoClient;
// var databaseName = process.argv[2];
// var url = "mongodb://localhost:27017/" + databaseName;
// var collectionName = process.argv[3];
// var docID = process.argv[4];
// console.log(docID);
//
// mongo.connect(url, function(err, db) {
//   if (err) throw err
//   var collection = db.collection(collectionName)
//   collection.remove({
//     // "_id" : ObjectId(docID)
//     "_id" : docID
//   },
//   function(err, data){
//     if (err) throw err
//     console.log("Removed successfully!")
//   }
//   )
//   db.close()
// })

//Task 8, Count
var mongo = require('mongodb').MongoClient;
var databaseName = "learnyoumongo";
var url = "mongodb://localhost:27017/" + databaseName;
var collectionName = "parrots";
var ageLimit = process.argv[2];
// console.log(typeof ageLimit);
// console.log(Number(ageLimit));
// console.log(parseInt(ageLimit));

mongo.connect(url, function(err, db) {
  if (err) throw err
    // var cursor = db.collection('parrots').find({"age":{$gt: +ageLimit}});
    // cursor.toArray(function(err, documents){
    //   if (err) throw err;
    //   console.log("Cursor each elements: \n");
    //   console.log(documents);
    // })

  var collection = db.collection(collectionName)
  collection.count({"age":{$gt: parseInt(ageLimit)}},
  // 
  function(err, data){
    if (err) throw err
    // console.log("Count successfully!");
    console.log(data);
  }
  )
  db.close()
})
