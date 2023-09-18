/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  var mp = new Map();
  for(var i=0;i<str1.length;i++)
  {
    if (mp.has(str1[i])){
      mp.set(str1[i],mp.get(str1[i])+1)
    } else {
      mp.set(str1[i],1);
    }
  }

  for(var i=0;i<str2.length;i++){
    if(mp.has(str2[i]) && mp.get(str2[i])!=1){
      mp.set(str2[i],mp.get(str2[i])-1);
    } else if(mp.has(str2[i]) && mp.get(str2[i])==1) {
      mp.delete(str2[i]);
    } else {
      return false;
    }
  }
  return mp.size==0;
}

module.exports = isAnagram;
//console.log(isAnagram("hello","world"));