/*Write a function named twoSum which takes two parameters: nums and target.
 Given an array of integer nums and an integer target,
  return indices of the two numbers such that they add up to the target.
   You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
 */

let nums = [2, 7, 11, 15];
let target = 9;

// creating the twoSum function
function twoSum(nums, target) {
    // declare an empty array for the output indices
    outPut = [];
    // use conditional statements to get the indices that add up to get the target(use a for loop)
    for (let m = 0; m < nums.length; m++) {
        for (let n = m + 1; n < nums.length; n++) {
            // check whether the 1st two indices are equal to the target
            if (nums[m] + nums[n] === target) {
                outPut.push(m);
                outPut.push(n);
            }
        }
    }
    return outPut;
}

let result = twoSum(nums, target);
console.log(result);