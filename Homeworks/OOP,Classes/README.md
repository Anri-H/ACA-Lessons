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