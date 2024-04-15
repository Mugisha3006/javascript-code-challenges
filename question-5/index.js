/*Given an integer num, write a function that
 repeatedly adds all its digits until
  the result has only one digit, and return it. */

let num = 38;

// create a function
function getAddedDigits(num) {
  // convert the number to a string
  let numToString = num.toString();
  // initiate sum variable to zero
  let sum = 0;
  // iterate through the num string 
  for (let number of numToString) {
    // getting sum of the digits
    sum = sum + parseInt(number);
  }
  // check whether the sum is equal to two digits
  if (sum >= 10) {
    return getAddedDigits(sum);
  } else {
    return sum;
  }
}

let result = getAddedDigits(num);
console.log(result);