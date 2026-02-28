type Operation = (a:number,b:number)=>number;
const add: Operation =(a,b)=>a+b;
const multiply:Operation =(a,b)=>a*b;
let sum=add(10,5);
let product=multiply(10,5);
console.log("Sum:",sum);
console.log("Product:",product);