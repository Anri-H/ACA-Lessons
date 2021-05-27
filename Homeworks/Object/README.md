# Object
---
## Task 1 

Write function that will do reverse operation for _Object.entries_

```javascript
fromPairs([
["a", 1],
["b", 2],
]);
// => { 'a': 1, 'b': 2 }
```
---

## Task 2 

Write functions that willreturn _head_ and _tail_ of Array

```javascript
getHead([1, 2, 3]);
// => [1]
getTail([1, 2, 3]);
// => [2, 3]
```
---

## Task 3 

Write function that will zip arrays into object

```javascript
zipObject(["a", "b", "c"], [1, 2]);
// => { 'a': 1, 'b': 2, c: null }
```
---

## Task 4 

Write function that will group by some rule

```javascript
groupBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': [4.2], '6': [6.1, 6.3] }
groupBy(["one", "two", "three"], (i) => i.length);
// => { '3': ['one', 'two'], '5': ['three'] }
```