const marval_heros=['ironman','spiderman','hulk','thor'];
const dc=['batman','superman','flash','aquaman'];
//marval_heros.push(dc)
// console.log(marval_heros);
// console.log(marval_heros.length);
// console.log(marval_heros[4][1]);

// const allheros=marval_heros.concat(dc)
// console.log(allheros);


const allheros=[...marval_heros,...dc]
//console.log(allheros);



const another_arr=[1,2,3,[3,4,5],7,[45,[3,4],5],4]
const real_another_array=another_arr.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Shivam"));
console.log(Array.from("Shivam"))
console.log(Array.from([1,2,3,4],x=>x*x));
console.log(Array.of(1,2,3,4,5,6));
console.log(Array.from({name:"Shivam"}))

let score1=100;
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))

