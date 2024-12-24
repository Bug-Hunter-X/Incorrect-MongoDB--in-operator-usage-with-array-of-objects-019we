# Incorrect MongoDB $in operator usage with array of objects
This example demonstrates an incorrect use of the `$in` operator in a MongoDB query.  The `$in` operator is intended to check if a field's value exists within a provided array of primitive values (e.g., strings, numbers).  Using it with an array of objects, as shown in the `bug.js` file, will not produce the expected results.

The correct approach is outlined in `bugSolution.js`, utilizing either dot notation or the `$elemMatch` operator to query nested objects effectively.