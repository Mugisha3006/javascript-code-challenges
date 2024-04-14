/* Write a JavaScript program that prompts a user to enter their year of birth 
and in turn prints a string in the console stating whether the user is a minor, a youth, or an elder.
  Anyone below 18 years is a minor, anyone between 18 and 36 years is a youth and the rest are elders.
*/

// prompting a user to enter their year of birth
const birthYear = prompt("What is you're year of birth");
// get the current year
const currentYear = new Date().getFullYear();
// acquire the age through the difference from the current year and birth year
const age = currentYear - birthYear;
// use conditional statements to solve the logic (if statement)
if (age < 18) {
    console.log("You're a minor");
} else if (age <= 36) {
    console.log("You're a youth");
} else {
    console.log("You're an elder")
}


