# Task 1 (Calculator Constructor)

Create functions forthe Calculator class that can do the following:

- Add two numbers.
- Subtract two numbers.
- Multiply two numbers.
- Divide two numbers.

```javascript
const calculator = new Calculator();
calculator.add(10, 5);
calculator.subtract(10, 5);
calculator.multiply(10, 5);
calculator.divide(10, 5);
```

---

# Task 2 (Person Constructor)

Create a method in the Person class which returns how another person's age compares. Given the instances
p1, p2 and p3, which will be initialised with the attributes name and age,return a sentence in the following
format:

```
{other person name} is {olderthan / youngerthan / the same age as} me.
```

## Person Constructor

- Write a Person Constructorthat initializes _name_ and _age_ from arguments.
- All instances of Person should initialize with an empty _stomach_ array.
- Give instances of Person the ability to _.eat("someFood")_:
- When eating an edible, it should be pushed into the _stomach_.

- The _eat_ method should have no effect if there are 10 items in the _stomach_.
- Give instances of Person the ability to _.poop()_:
- When an instance poops, its _stomach_ should empty.
- Give instances of Person a method ._toString()_:
- It should return a string with _name_ and _age_. Example: "Mary, 50"

---

# Task 3 (Car Constructor)

Write a Car constructorthat initializes model and milesPerGallon from arguments.

- All instances built with Car:

  - should initialize with an _tank_ at 0
  - should initialize with an _odometer_ at 0

- Give cars the ability to get fueled with a _.fill(gallons)_ method. Add the gallons to _tank_.
  STRETCH: Give cars ability to _.drive(distance)_. The distance driven:
- Should cause the _odometer_ to go up.
- Should cause the the _tank_ to go down taking _milesPerGallon_ into account.
- STRETCH: A car which runs out of _fuel_ while driving can't drive any more distance:
- The _drive_ method should return a string "Iran out of fuel at x miles!" x being _odometer_.

---

# Task 4 (Baby Constructor)

Write a Baby constructor subclassing Person.

- Besides _name_ and _age_, Baby takes a third argument to initialize _favoriteTo\_\_y_.
- Besides the methods on Person.prototype, babies have the ability to _.play()_:
- Should return a string "Playing with x", x being the favorite toy.
