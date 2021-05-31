class Shiritory {
  constructor() {
    this.words = [];
    this.game_over = false;
  }

  play(val) {
    if (!this.words.length) {
      this.words.push(val);
      return this.words;
    }

    const lastCharacter = this.words[this.words.length - 1];
    const lastStr = lastCharacter.length - 1;
    for (let i = 0; i < this.words.length; i++) {
      const el = this.words[i];
      if (el === val) {
        this.game_over = true;
        return "game over";
      }
    }
    if (val[0] === lastCharacter[lastStr]) {
      this.words.push(val);
      return this.words;
    } else {
      this.game_over = true;
      return "game over";
    }
  }

  restart() {
    this.words = [];
    this.game_over = false;
    return "game restarted";
  }
}

let myShiritori = new Shiritory();
console.log(myShiritori.play("apple")); // ["apple"]
console.log(myShiritori.play("ear")); // ["apple", "ear"]
console.log(myShiritori.play("rhino")); // ["apple", "ear", "rhino"]
console.log(myShiritori.play("corn")); // "game over"
// Corn does not start with an "o".
console.log(myShiritori.words); // ["apple", "ear", "rhino"]
// Words should be accessible.
console.log(myShiritori.restart()); // "game restarted"
console.log(myShiritori.words); // []
// Words array should be set back to empty.
console.log(myShiritori.play("hostess")); // ["hostess"]
console.log(myShiritori.play("stash")); // ["hostess", "stash"]
console.log(myShiritori.play("hostess")); // "game over"
