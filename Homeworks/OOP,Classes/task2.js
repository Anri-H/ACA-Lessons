class Account {
  constructor(name, balance = 0) {
    this._id = Math.random();
    this._name = name;
    this._balance = balance;
  }
  get id() {
    return this._id;
  }
  set name(val) {
    this._name = val;
  }
  get name() {
    return this._name;
  }
  set balance(val) {
    this._balance = val;
  }
  get balance() {
    return this._balance;
  }
  credit(amount) {
    this.balance += amount;
    return this.balance;
  }
  debit(amount) {
    if (amount > this.balance) {
      return amount - this.balance;
    } else return "Amount exceeded balance.";
  }
  transferTo(anotherAccount, amount) {
    if (amount < this.balance) {
      anotherAccount._balance += amount;
      return (this.balance -= amount);
    }
  }
  static identifyAccounts(accountFirst, accountSecond) {
    return accountFirst.id === accountSecond.id;
  }
  toString() {
    return `Saving account's account balance is $${this.balance}`
  }
}
let savingAcc = new Account("Saving account", 2000);
let cardAcc = new Account("Card account", 1000);
console.log(savingAcc); // Account { id: 0, _name: 'Saving account',
// _balance: 2000 }
console.log(cardAcc); // Account { id: 1, _name: 'Card account', _balance:
// 1000 }
console.log(savingAcc.balance); // 2000
console.log(savingAcc.credit(400)); // 2400
console.log(savingAcc.balance); // 2400
console.log(savingAcc.debit(9000)); //6600
console.log(savingAcc.transferTo(cardAcc, 1000)); // 1400
console.log(savingAcc.balance); // 1400
console.log(cardAcc.balance); // 2000
let anotherAcc = savingAcc;
console.log(Account.identifyAccounts(savingAcc, anotherAcc)); // true
console.log(Account.identifyAccounts(savingAcc, cardAcc)); // false
console.log(savingAcc.toString());
