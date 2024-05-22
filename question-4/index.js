/*Write a function named firstPalindrome which takes a parameter:
 words. Given an array of string words, return the first palindromic string in the array.
  If there is no such string, return an empty string "".
A string is palindromic if it reads the same forward and backward.
 */

let words = ["abc", "car", "ada", "racecar", "cool"];

// create a function to check if the string is a palindrome
function isPalindrome(string) {
    return string === string.split("").reverse().join("");
}
// create  isPalindrome function
function firstPalindrome(words) {
    // iterate through each individual string in a reversed form
    for (let word of words) {
        // check if word is a palindrome
        if (isPalindrome(word)) {
            return word;
    }    
    }
    return "";
}
result = firstPalindrome(words);
console.log(result)
 

 