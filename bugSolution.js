```javascript
// Correct usage of $in operator with dot notation
db.collection.find({"field.value": {$in: [1,2]}});

//Correct usage of $elemMatch
db.collection.find({field: {$elemMatch: {value: {$in: [1, 2]}}}});
```