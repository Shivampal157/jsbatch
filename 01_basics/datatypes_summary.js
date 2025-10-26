//#primitive data types
//7 types: string, number, boolean, null, undefined, symbol, bigint

const score=100
const scoreValue=100.6;
const isLoggedIn=true;
const outsideTemp=null;
let userEmail; //undefined
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId)

const bigNumber=1234567890123456789012345678901234567890n
//console.log(bigNumber)



//#reference data types or non-primitive data types
//3 types: objects, arrays, functions

const heros=['shaktiman','naagraj','doga']
let myobj={
    name:'Shivam',
    age:26,
    isLoggedIn:true
}

const myFunction=function(){
    console.log("hello shivam");
    
}

console.log(typeof bigNumber);
console.log(typeof heros);
console.log(typeof myobj);
console.log(typeof myFunction);
console.log(typeof outsideTemp); 



//******************************************************************* */
//stack(primitive data types) vs heap(reference data types)
let myName='Shivam'
let anotherName=myName
//console.log(anotherName);
anotherName='Ankit'
console.log(anotherName);
console.log(myName);

let user1={
    email:'shivam#@djd'

}
let user2=user1

user2.email='ankit#@djd'
console.log(user1.email);
console.log(user2.email);