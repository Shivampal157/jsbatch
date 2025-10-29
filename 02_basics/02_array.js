//array

const myArr=[10,20,30,40,50];
 console.log(myArr[2])
 const arr=['apple','banana','grape','mango'];
    console.log(arr[1]);
    const arr2=new Array(5,10,15,20);
    console.log(arr2[3]);


    //array methods
    myArr.push(60);
    console.log(myArr);
    myArr.pop();
    console.log(myArr);
    myArr.unshift(5);
    console.log(myArr);
    myArr.shift();
    console.log(myArr);
    

    console.log(myArr.includes(3));
    console.log(myArr.indexOf(30));   


    const newArr=myArr.join()
    console.log(newArr);
    //console.log(myArr);
    console.log(typeof newArr);

    //slice, splice

    console.log("A",myArr)
    const myn1=myArr.slice(1,2)
    console.log(myn1)
    console.log("B",myArr)

    const myn2=myArr.splice(1,2)
    console.log(myn2)
    console.log("C",myArr)