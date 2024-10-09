// function example

function logger() {
  console.log("my name is Rahul");
}

// calling/running/ invoking function
logger();

// function fruitProcessor(apple, oranges) {
//   console.log(apple, oranges);
//   const juice = `juice with ${apple} apples and ${oranges} oranges`;
//   return juice;
// }

// const mixJuice = fruitProcessor(5, 3);
// console.log(mixJuice);

function calcAge(birthYear) {
  return 2024 - birthYear;
}

const age1 = calcAge(2002);
console.log(age1);

// function expression
const calcAge2 = function calcAge(birthYear) {
  return 2024 - birthYear;
};

const age2 = calcAge2(2002);

console.log(age1, age2);

//function without name is known as ANONYMOUS function

// Arrow Function

const calcAge3 = (birthYear) => 2024 - birthYear;
const age3 = calcAge3(2002);
console.log(age3);

// const yearsUntillRetirement = (birthYear, name) => {
//   const age = 2024 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${name} will retires in ${retirement} years.`;
// };

// console.log(yearsUntillRetirement(2002, "Rahul"));
// console.log(yearsUntillRetirement(2000, "Deep"));

// FUNCTION CALLING FUNCTION

function cutFruitPiece(fruit) {
  return fruit * 4;
}

function fruitProcessor(apple, oranges) {
  const appliePiece = cutFruitPiece(apple);
  const orangesPiece = cutFruitPiece(oranges);
  const juice = `juice with ${appliePiece} Pieces of Apples and ${orangesPiece} Pieces of oranges`;
  return juice;
}

console.log(fruitProcessor(3, 4));

const calcAge4 = (birthYear) => {
  return 2024 - birthYear;
};

const yearsUntillRetirement = (birthYear, name) => {
  const age = calcAge4(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return retirement;
    console.log(`${name} w  ill retires in ${retirement} years.`);
  } else {
    console.log(`${name} has Already Retired 🎉..!`);
  }
};

console.log(yearsUntillRetirement(1950, "Rahul"));
