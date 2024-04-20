// video number 9 code with chai-yt
// datatype summary and other

/* Data type are classified into to type 
primitive and non primitive

primitive
7 types : String, Number, Boolean, null, undefinend. Symbol,bigInt
*/

/*Reference type(Non primitive)
Array, Objects, Fucntions
*/
 

// Primitive 
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null;
let userEmail ;

const id = Symbol("123");
const anotherId = Symbol("123");

//console.log(id === anotherId);// false

const bigNumber = 3423443247234238479823n


// Non - Primitive

const heros = ["shaktiman","naagraj","doga"]; // object

let myObj = {
    name: "OM",
    age:22,
}// object

const myFunction =  function(){
    console.log("hello world");
}// object

// null ka datatype object ata hai 

console.log(typeof (myFunction));// fucntion

// assignment to read
//https://262.ecma-international.org/5.1/#sec-11.4.3


