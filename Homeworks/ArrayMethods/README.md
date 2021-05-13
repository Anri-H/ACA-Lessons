# Array Methods

## Mutable and Immutable methods

        A mutable object is an object whose state can be modified or changed over time. An immutable object, on the other hand, is an object whose state cannot be modified after it is created. Well, that’s how the textbook defines mutable and immutable objects. 

## ForEach

        The arr.forEach method allows to run a function for every element of the array.
The syntax is:
```javascript 
arr.forEach(function(item, index, array) {
  // ... do something with item
}); 
```

## Slice

        It returns a new array copying to it all items from index to (not including ). Both and can be negative, in that case position from array end is assumed.startendendstartend

The syntax is:
```javascript 
arr.slice([start], [end])
```


## Splice

         The arr.splice method is a swiss army knife for arrays. It can do everything: insert, remove and replace elements.

The syntax is:

```javascript 
arr.splice(start[, deleteCount, elem1, ..., elemN])
```


## Find & FindIndex

         Imagine we have an array of objects. How do we find an object with the specific condition?

        Here the arr.find(fn) method comes in handy.

The syntax is:

```javascript 
arr.find(function(item, index, array) {
  // if true is returned, item is returned and iteration is stopped
  // for falsy scenario returns undefined
});
```


        The arr.findIndex method is essentially the same, but it returns the index where the element was found instead of the element itself and is returned when nothing is found.-1


## Map

        It calls the function for each element of the array and returns the array of results.

The syntax is:

```javascript 
arr.map(function(item, index, array) {
  // returns the new value instead of item
});
```


## Filter

        The method looks for a single (first) element that makes the function return .findtrue

        If there may be many, we can use arr.filter(fn).
        

```javascript 
arr.filter(function(item, index, array) {
  // if true item is pushed to results and the iteration continues
  // returns empty array if nothing found
});
```

        The syntax is similar to , but returns an array of all matching elements:findfilter


## Reduce

        They are used to calculate a single value based on the array.

The syntax is:

```javascript 
arr.reduce(function(accumulator, item, index, array) {
  // ...
}, [initial])
```