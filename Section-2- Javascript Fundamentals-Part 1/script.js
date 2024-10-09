// let js = "amazing";
// if (js === "amazing") {
//   alert("JS is Fun");
// }

//number : always have floating point number either is decimal or intgear let=23
//String : sequnce of character that always use for text and manuplation for text let js= 'deep'
//Boolean : is a logical type is either sotre true or false its use for decesion making let age =true or false
//undefind : varible declared but didnt asigned the values let = age;
//null : varible declared but  asigned the values null let x = null;
//symbol(Es2015) : defines the values uniqly

//. Number

let number = 30; //intgear number
let floating = 30.5; //floting number

console.log(number, floating); // this you can store multiple varible in one console

//. String

let string = "Hey!, my name is Rahul Modi";
console.log(string);

// Boolean

let x = 10;
let y = 20;

if (x < y) {
  console.log(true);
} else {
  console.log(false);
}

let isRainyDay = true;
console.log(isRainyDay);
console.log(typeof isRainyDay);

//Undefine

var a;
a = 20;
console.log(typeof a);

// null

var aa = null;
console.log(typeof aa);

// Math operator
const now = 2024;
const myAge = now - 2002;
console.log(myAge);

// Assignment
let X = 10 + 5; //15
X += 10; //X=X(15)+10=25
X *= 4; //X=X(25)*4=100
X++; //X=X+1=101
X--; //X=X(101)-1=100
X--; //X=X(100)-1=99
console.log(X);

let Aaa, b;
Aaa = b = 25 - 10 - 5;
console.log(Aaa, b);
