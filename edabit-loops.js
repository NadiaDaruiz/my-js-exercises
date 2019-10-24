//#1. Get the index of first vowel

//Create a function that returns the index of the first vowel in a string.

const firstVowel = str => {
  const strToUpper = str.toUpperCase();
  let vowel = ["a", "e", "i", "o", "u"];
};

firstVowel("apple"); // ➞ 0
firstVowel("hello"); // ➞ 1
firstVowel("STRAWBERRY"); // ➞ 3
firstVowel("pInEaPPLe"); // ➞ 1
