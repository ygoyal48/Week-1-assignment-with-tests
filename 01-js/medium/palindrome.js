/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str = str.replaceAll('!','');
  str = str.replaceAll('?','');
  str = str.replaceAll(',','');
  str = str.replaceAll('.','');
  let str2 = str.toLowerCase().split(" ").join("").split("").join("");;
 let str1 = str.toLowerCase().split(" ").join("").split("").reverse().join("");
  return str1==str2;
}

module.exports = isPalindrome;
console.log(isPalindrome("Mr. Owl ate my metal worm."));

