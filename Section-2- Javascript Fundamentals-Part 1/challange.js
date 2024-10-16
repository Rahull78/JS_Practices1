// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:

let marksMass = 78;
let marksHeight = 1.69;

let jhonsMass = 92;
let jhonsHeight = 1.95;

const markBMI = marksMass / marksHeight ** 2;
const jhonBmi = jhonsMass / jhonsHeight ** 2;

// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.

let markHigherBMI = markBMI > jhonBmi;

console.log(markBMI, jhonBmi, markHigherBMI);

// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.

let markMass = 95;
let markHeight = 1.88;

let jhonMass = 85;
let jhonHeight = 1.76;

const markBMIs = markMass / markHeight ** 2;
const jhonBmis = jhonMass / jhonHeight ** 2;

let markHigherBMI1 = markBMIs > jhonBmis;

console.log(markBMIs, jhonBmis, markHigherBMI1);

// CHallange 2

if (markBMIs > jhonBmis) {
  console.log(`marks bmi ${markBMIs} is higher than jhons bmi ${jhonBmis}`);
} else {
  console.log(`jhons bmi ${jhonBmis} is higher than marks bmi ${markBMIs}`);
}

/*There are two gymnastics teams, Dolphins and Koalas. They compete against each 
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 
112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 10*/

const Dolphins = (96 + 108 + 89) / 3;
const Koalas = (88 + 91 + 110) / 3;
console.log(Dolphins, Koalas);
