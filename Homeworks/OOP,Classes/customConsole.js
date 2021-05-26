class Console{
    constructor(param){
        this.param = param;
        this.args = []
    }

    log(...val){        
       console.log(`${this.param}: ${JSON.stringify(val)}`); 
        
    }
}





const myConsole = new Console('Regular');
const fancyConsole = new Console('Fancy');
myConsole.log([0, 1, 2, 3]) // "Regular: [0,1,2,3]"
fancyConsole.log({ a:1, b:2 }) // "Fancy: {a:1, b:2}"
myConsole.log("ok : ", 1, 2, 3) //➞ "ok : 1, 2, 3"
// myConsole.clearHistory() // true
// myConsole.history()