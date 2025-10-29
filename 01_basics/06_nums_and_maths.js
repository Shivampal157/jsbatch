const score=400
console.log(score)
const balance=new Number(1000);
console.log(balance)
console.log(balance.toString().length)
console.log(balance.toFixed(2))
console.log(balance.toPrecision(3))

const num1=10.5565
console.log(num1.toPrecision(3));
const num2=20000000
console.log(num2.toLocaleString('en-IN'));


//*******************maths************************ */

console.log(Math);
console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9))
console.log(Math.min(0,150,30,20,-8,-200))
console.log(Math.max(0,150,30,20,-8,-200))
console.log(Math.random())
console.log(Math.random()*10)
console.log(Math.floor(Math.random()*10)+1)

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)