// Given an object. Invert it (keys become values and values become keys). If there is more than key forthat
// given value create an array.

function invertKey(obj) {
    

const res ={}
for ( const key in obj) {
    if (!(obj[key] in res)) {
        res[obj[key]] =key;
    }else res[obj[key]] = [...res[obj[key]], key]
    
}
return res
}

console.log(invertKey({ a: "1", b: "2", c: "2", d: "2" }))

