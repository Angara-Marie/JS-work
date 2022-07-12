// myArray = [1,2,3,4,5]
// console.log(myArray[2]);
// console.log(myArray.length);
// console.log(myArray.indexOf(3));
// let lastIndex =myArray.length -1;
// console.log(myArray[lastIndex]);
// myArray.push(10);
// console.log(myArray);
// myArray.unshift(20);
// console.log(myArray);
// myArray[2] = 23;
// console.log(myArray);
// myArray.pop()
// console.log(myArray);
// myArray.shift()
// console.log(myArray);
// myArray.splice(1,1)
// console.log(myArray);

let b = ["mango", "banana"]
b.push("Orange")
b.unshift("apples")
let c = new Array("banana", "kiwi")
console.log(b);
console.log(c);
let d = c.map(item => `I love ${item}`)
let e = c.map(function(item){
    return `I love ${item}`
})
console.log(d);
console.log(e);


var names = ["Tessa", "Tut", "Angie"]
var [Naima, ...others] = names
console.log(Naima);
console.log(others);
console.log(names);