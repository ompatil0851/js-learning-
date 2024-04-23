const name = "Om"
const repoCount = 50

//console.log(name + repoCount + "Value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);// hello my name is Om and my repo count is 50

const gameName = new String('Ompatil')
//OUTPUT // string is a object here and we get the lengh property
/*String {'Ompatil'}0: "O" 
1: "m"
2: "p"
3: "a"
4: "t"
5: "i"
6: "l"
length: 7[[Prototype]]: String
[[PrimitiveValue]]: "Ompatil" */


console.log(gameName[0]);//O
console.log(gameName.__proto__);//{}
console.log(gameName.length); // Gives the lengh of the string which is 7 here
console.log(gameName.toUpperCase());// OMPATIL
console.log(gameName.charAt(5)); // i
console.log(gameName.indexOf('t'));//4


const newString = gameName.substring(0,4);//Ompa it will skip the last on like in this case it skipped the 4 index .
console.log(newString);

const anotherString = gameName.slice(-6,4);
console.log(anotherString);//mpa

const newStringOne = "    om    "
console.log(newStringOne);//    om    
console.log(newStringOne.trim());//om {it removes the extra space from the string}


const url ="https://om.com/om%21patil"

console.log(url.replace('%21',"-"));//https://om.com/om-patil

console.log(url.includes('om'));// true


const gameNameTwo = new String('Om-patil-OP')
console.log(gameNameTwoc.split('-'));// Give Array[ 'Om', 'patil', 'OP' ]
