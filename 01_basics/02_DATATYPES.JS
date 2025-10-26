"use strict";    //treat all js code as newer version

//alert(3+3);  //we are using nodejs not browser


console.log(3+3) 
console.log("hello world");


let name="shivam";
let age=22;
let isLoggedIn=true;



//number => 2 to the power 53
//bigint
//string => "" , '' , ``
//boolean => true/false
//null => standalone value
//undefined => default value when variable is declared but not initialized
//symbol => unique identifiers

console.log(typeof name);
console.log(typeof age);
console.log(typeof isLoggedIn);
console.log(typeof null);          //bug in js
console.log(typeof undefined);
console.log(typeof BigInt("12345678901234567890"));
console.log(typeof Symbol("id"));