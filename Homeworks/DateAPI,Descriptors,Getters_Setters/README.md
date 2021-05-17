# Date API, Property flags and descriptors, Getters / Setters

## Date and time

Date. It stores the date, time and provides methods for date/time management.

- Date and time in JavaScript are represented with the Date object. We can’t create “only date” or “only time”: objects always carry both.Date
- Months are counted from zero (yes, January is a zero month).
- Days of week in are also counted from zero (that’s Sunday).getDay()
- Date auto-corrects itself when out-of-range components are set. Good for adding/subtracting days/months/hours.

## Property flags and descriptors

Object properties, besides a value, have three special attributes (so-called “flags”):

- writable – if , the value can be changed, otherwise it’s read-only.true
- enumerable – if , then listed in loops, otherwise not listed.true
- configurable – if , the property can be deleted and these attributes can be modified, otherwise not.true

The method Object.getOwnPropertyDescriptor allows to query the full information about a property.

The syntax is:

```Javascript
let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);

{
  "value": "John",
  "writable": true,
  "enumerable": true,
  "configurable": true
}
```

## Getters and setters

Accessor properties are represented by “getter” and “setter” methods. In an object literal they are denoted by and :get set

The getter works when is read, the setter – when it is assigned.

The syntax is:

```Javascript
let obj = {
  get propName() {
    // getter, the code executed on getting obj.propName
  },

  set propName(value) {
    // setter, the code executed on setting obj.propName = value
  }
};
```
