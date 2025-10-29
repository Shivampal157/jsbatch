//dates
let myDate=new Date()
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleString());
console.log(myDate.getTime());
console.log(typeof myDate);

let myCreatedDate=new Date(2020,12,1,5,10,33,30,0)
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myDate2=new Date("01-14-2023 04:10:20")
// console.log(myDate2.toDateString());
// console.log(myDate2.toLocaleString());

let myTimestamp=Date.now()
console.log(myTimestamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
c 