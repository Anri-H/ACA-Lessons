# CoffeeShop

- Properties:
    - _name:_  a string (basically, of the shop)
    - _menu:_ an array of items (of object type), with each item containing the item (name of the item), type
(whetherfood or a drink) and price.
    - _orders:_ an empty array

- Methods:
    - _addOrder:_ adds the name of the item to the end of the orders array if it exists on the menu. Otherwise,
return "This item is currently unavailable!"
    - _fulfillOrder:_ if the orders array is not empty,return "The {item} is ready!". If the orders array is
empty,return "All orders have been fulfilled!"      
    - _listOrders:_ returns the list of orders taken, otherwise, an
empty array.
    - _dueAmount:_ returns the total amount due forthe orders taken.
    - _cheapestItem:_ returns the name of the cheapest item on the menu.
    - _drinksOnly:_ returns only the item names of type drink from the menu.
    - _foodOnly:_ returns only the item names of type food from the menu.
---

# Shiritori

This challenge is an English twist on the Japanese word game Shiritori. The basic premise is to follow two rules:

- First character of next word must match last character of previous word.
- The word must not have already been said.

Example of a Shiritori game`

```javascript
["word", "dowry", "yodel", "leader", "righteous", "serpent"]; // valid!
["motive", "beach"]; // invalid! - beach should start with "e"
["hive", "eh", "hive"]; // invalid! - "hive" has already been said
```
---
# CustomConsole Class

- _log_ function that takes user arguments and returns them as a string
- _history_ function that takes an optionalrange as an argument
- clearHistory function to remove the history memory

---

# Task1 (Create an _Author_ class and a _Book_ class.)
## Author should have:
### Fields    
- name
- email
- gender

### Methods 
- getters for fields
- toString()

## Book should have:

### Fields    
- title
- author(Author)
- price
- quantity

### Methods 
- getters for fields
- setters for fields
- getProfit() - which calculates the profit from the book based on the _price_ and _quantity_.
- toString()

---

# Task2 (Create an _Account_ class.)

## Account should have:

### Fields    
- id
- name
- balance

### Methods

- getters for fields
- setters - for name and balance
- credit(amount) - which should add _amount_ to _balance_ and return the updated balance.
- debit(amount) - which should subtract the amount from the _balance_, if amount is less than the
_balance_, otherwise output “Amount exceeded balance.”
- transferTo(anotherAccount, amount) - which should subtract the amount from the _account
balance_ and add it to the given _anotherAccount_ and _return the updated balance_, if amount is less
than the balance, otherwise output “Amount exceeded balance.”
- static method: identifyAccounts(accountFirst, accountSecond) - which gets two accounts
and identifies if they are the same or not comparing all fields.
- toString()


# Task 3 (Person class and Student class)

## Person should have:

### Fields
- firstName
- lastName
- gender
- age

### Methods

- getters for fields
- setters  for fields
- toString()

## Student is inherited from Person. It should have

### Fields
- year
- fee
- program(array of { programName, grade })
### Methods
- getters forfields
- setters forfields
- passExam(programName, grade)
- isAllPassed()
- toString()

## Student should contain the data about its programs and exams.

- passExam will update that data, so if _student_ passed all the exams(grade is great or equal to
50), its year should be increased by one.
- It should have a method isAllPassed().