//singleton

//object literal
const jsuser={
    name:"John",
    "full name":"John Doe",
    age:34,
    isActive:true,
    hobbies:['music','sports'],
    email:"dfsihhshud@fsjfj.com"

}
console.log(jsuser.email);
console.log(jsuser["email"])
console.log(jsuser["full name"])

jsuser.email="shivma@123com"
// Object.freeze(jsuser)
jsuser.email="emeirw@com"
console.log(jsuser);

jsuser.greetings=function(){
    console.log("Hello jsuser");
}
jsuser.greetingtwo=function(){
    console.log(`Hello jsuser from greettwo,${this.name}`);
}
console.log(jsuser.greetings());
console.log(jsuser.greetingtwo());        