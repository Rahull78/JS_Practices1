// 1. Write a function called 'describeCountry' which takes three parameters:
// 'country', 'population' and 'capitalCity'. Based on this input, the
// function returns a string with this format: 'Finland has 6 million people and its
// capital city is Helsinki'
// 2. Call this function 3 times, with input data for 3 different countries. Store th

function describeCountry(
  country = "Finland",
  population = 6,
  capitalCity = "Helsinki"
) {
  const countries = `${country} has ${population} million people and it s capital city is the ${capitalCity}`;
  return countries;
}
const firstCountry = describeCountry();
console.log(firstCountry);

const secondCountary = describeCountry(
  (country = "india"),
  (population = 5),
  (capitalCity = "delhi")
);
console.log(secondCountary);

const thirdCountary = describeCountry(
  (country = "Chaina"),
  (population = 8),
  (capitalCity = "Shanghai")
);
console.log(thirdCountary);

// 1. The world population is 7900 million people. Create a function declaration
// called 'percentageOfWorld1' which receives a 'population' value, and
// returns the percentage of the world population that the given population
// represents. For example, China has 1441 million people, so it's about 18.2% of
// the world population
// 2. To calculate the percentage, divide the given 'population' value by 7900
// and then multiply by 100
// 3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
// store the results into variables, and log them to the console
// 4. Create a function expression which does the exact same thing, called
// 'percentageOfWorld2', and also call it with 3 country populations (can be
// the same populations)

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const India = percentageOfWorld1(2625);
const Russia = percentageOfWorld1(2625);
const Chaina = percentageOfWorld1(2650);
console.log(India, Russia, Chaina);

// 1. Create a function called 'describePopulation'. Use the function type you
// like the most. This function takes in two arguments: 'country' and
// 'population', and returns a string like this: 'China has 1441 million people,
// which is about 18.2% of the world.'
// 2. To calculate the percentage, 'describePopulation' call the
// 'percentageOfWorld1' you created earlier
// 3. Call 'describePopulation' with data for 3 countries of your choic

function describePopulation(countary, population) {
  const describeCountry = `${countary} has ${(population / 7900) * 100}`;
  return describeCountry;
}
function percentageOfWorld() {
  const USA = describePopulation("nevada", 1000);
  const India = describePopulation("Delhi", 1000);
  const NewZeland = describePopulation("Auckland", 1000);
  console.log(USA, India, NewZeland);
}
percentageOfWorld();

// 1. Create an array containing 4 population values of 4 countries of your choice.
// You may use the values you have been using previously. Store this array into a
// variable called 'populations'
// 2. Log to the console whether the array has 4 elements or not (true or false)
// 3. Create an array called 'percentages' containing the percentages of the
// world population for these 4 population values. Use the function
// 'percentageOfWorld1' that you created earlier to compute the 4
// percentage value

const population = [10, 20, 30, 40];
console.log(population.length);
console.log(population);
function percentage(population) {
  return population / 4;
}
const percentages = [
  percentage(population[0]), //one doubt why dont we store the multiple percentage inside the array
];
console.log(percentages);
