function sayMyName(){
console.log("H")
console.log("I")
console.log("T")
console.log("S")
console.log("H")

}
// sayMyName()

// function addTwoNum(num1,num2){
//     console.log(num1+num2)
// }
// addTwoNum(5,7)
// addTwoNum(100,200)
// addTwoNum(-500,"a")
// addTwoNum(0.5,null)

function addTwoNum(num1,num2){
    let result=num1+num2
    return result
    }
const result=addTwoNum(5,10)
//console.log("result:",result)

function loginusermsg(username){
   if(username===undefined){
    return "Please enter username"
   return
   }

    return `${username} just logged in`
}
loginusermsg("shivam")
//    console.log(loginusermsg("shivam"))
//console.log(loginusermsg())


function calculateCartPrice(val1,val2, ...num1){
    return num1
}
//console.log(calculateCartPrice(1000,400,500,543,600,700,800))


const user={
    username:"shivam",
    price:500
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

//haldleObject(user)
handleObject({
    username:"rahul",
    price:1000
})

const myNewArray=[1,2,3,4,5,6,7,8,9]
function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue(["a","b","c","d"]))