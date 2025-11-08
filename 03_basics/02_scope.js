const b=700
let a=500
if (true){
    let a=100
    const b=200
    var c=300
    // console.log(a)
}

//  console.log(a)
// console.log(b)
// console.log(c)


function one(){
    const username="shivam"

    function two(){
        const website="chaiandcode.com"
        console.log(username)
       
    }
    //  console.log(website)
     two()
}
//one()


if(true){
    const username="rahul"
    if(username==="rahul"){
        const website="example.com"
        console.log(username+" "+website)
    }
//     console.log(website)

}
//console.log(username)


// +++++++++++++++++++++++++++++ intersting ++++++++++++++++++++++++++
addone(5)
console.log(addone(5))

function addone(num){
    return num+1
}
// addone(5)




addtwo(5)
const addtwo=function(num){
    return num+2
}

// addtwo(5)