/*Write a function named fizzBuzz that takes in two(2) parameters which are expected to be strings.
The function should return the string Fizz if the combined length of the parameters is divisible by 3,
the string Buzz if it is divisible by 5, and the string FizzBuzz if it is divisible by both 5 and 3. */
 
// creating a fuction named fizzBuzz
function fizzBuzz(string1, string2) {
    // acquring combined length of the two string parameters
    let combinedLength = string1.length + string2.length;
    // use conditional statements to evaluate to fizz, buzz and fizzbuzz
    if (combinedLength % 3 === 0 && combinedLength % 5 === 0) {
        return "FizzBuzz";
    } else if (combinedLength % 3 === 0) {
        return "Fizz";
    } else if (combinedLength % 5 === 0) {
        return "Buzz";
    } else {
        return "The combined string length is'nt divisible by either 3 or 5"
    }
}

// creating a variable for the output by calling the function with string arguments
let result = fizzBuzz("mugisha", "muhammad");
console.log(result);
