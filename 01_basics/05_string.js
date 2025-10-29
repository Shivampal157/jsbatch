const name="Shivam"
const repoCnt=50
//console.log(name+repoCnt+" value")

console.log(`Hello my name is ${name} my repo count ${repoCnt} `);

const fullName='Shivam Kumar'
console.log(fullName[0]);
console.log(fullName.length);
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(fullName.indexOf('Kumar'));
console.log(fullName.includes('Kumar'));
console.log(fullName.substring(0,6));
console.log(fullName.split(' '));
console.log(fullName.charAt(0));
console.log(fullName.endsWith('m'));
console.log(fullName.repeat(3)); 

const newString=fullName.substring(0,6)
console.log(newString);

const newString2=fullName.slice(-9,6)
console.log(newString2);

const newString3="     Shivam     "     
console.log(newString3)
console.log(newString3.trim());


const url='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'
console.log(url.replace('https','http'));
console.log(url.includes('youtube'));
console.log(url.split('='));

console.log(fullName.split('- '));