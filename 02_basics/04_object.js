//const tinderuser=new Object();
const tinderuser={}
// console.log(tinderuser);
tinderuser.id="dfshj1234"
tinderuser.name="Shivam"
tinderuser.isLoggedIn=true
// console.log(tinderuser);
const regularuser={
    email:"dfshj@com",
    fullname:{
        userfullname:{
            firstname:"Shivam",
            lastname:"Kumar"
        }       
}
}
// console.log(regularuser.fullname.userfullname.firstname)

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={5:"e",6:"f"}

const newobj=Object.assign({},obj1,obj2)
// console.log(newobj);
const newobj2={...obj1,...obj2,...obj3}
// console.log(newobj2);

const users=[
    {
        id:1,
        name:"Shivam",
        age:24,
        email:"shivam@123com"
    }
]
users[0].age
// console.log(tinderuser);
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));
// console.log(tinderuser.hasOwnProperty("name"));

const course={
    coursename:"js batch",
    price:999,
    courseInstructor:"Shivam Pal"
}
const {courseInstructor}=course
console.log(courseInstructor);

// {
//     "name":"Shivam",
//     "coursename":"js batch"
//     "price":"free"
// }

[
    {},
    {},
    {}
]