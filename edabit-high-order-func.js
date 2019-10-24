// #1.
/* Write a function that returns true if there exists at least one number 
that is larger than or equal to n.*/

const one = (arr, num) => {
  return arr.filter(el => el >= num).length > 0;

  //OR return arr.some(el=> el >= num)
};

console.log(`\nExercise One:`);

console.log(one([5, 3, 15, 22, 4], 10)); // ➞ true
console.log(one([1, 2, 3, 4, 5], 8)); // ➞ false
console.log(one([4, 3, 3, 3, 2, 2, 2], 4)); // ➞ true
console.log(one([], 5)); // ➞ false

//#2.
// Create a function that adds a string ending to each member in an array.

const two = (arr, str) => {
  return arr.map(el => el + str);
};
console.log(`\nExercise Two:`);
console.log(two(["clever", "meek", "hurried", "nice"], "ly"));
console.log(two(["new", "pander", "scoop"], "er"));
console.log(two(["bend", "sharpen", "mean"], "ing"));

//#3.
/*A number added with its additive inverse equals zero. 
Create a function that returns an array of additive inverses. */

const three = arr => arr.map(el => -el);

console.log(`\nExercise Three:`);
console.log(three([5, -7, 8, 3])); // ➞[-5, 7, -8, -3]
console.log(three([1, 1, 1, 1, 1])); // ➞[-1, -1, -1, -1, -1]
console.log(three([-5, -25, 35])); // ➞[5, 25, -35]

//#4.
/* Create a function that filters out an array to include numbers who 
only have a certain number of digits.*/

const four = (arr, num) => {
  return arr.filter(el => el.toString().length === num);
};

console.log(`\nExercise Four:`);
console.log(four([88, 232, 4, 9721, 555], 3)); // ➞[232, 555]
// Include only numbers with 3 digits.
console.log(four([2, 7, 8, 9, 1012], 1)); // ➞[2, 7, 8, 9]
// Include only numbers with 1 digit.
console.log(four([32, 88, 74, 91, 300, 4050], 1)); // ➞[]
// No numbers with only 1 digit exist => return empty array.
console.log(four([5, 6, 8, 9], 1)); // ➞[5, 6, 8, 9]
// All numbers in the array have 1 digit only => return original array

//#5.
// Write a function that maps files to their extension names.

const five = arr => {
  return arr.map(element => element.split(".")[1]);
};

console.log(`\nExercise Five:`);

console.log(five(["code.html", "code.css"]));
// ➞["html", "css"]
console.log(five(["project1.jpg", "project1.pdf", "project1.mp3"]));
// ➞["jpg", "pdf", "mp3"]
console.log(five(["ruby.rb", "cplusplus.cpp", "python.py", "javascript.js"]));
// ➞["rb", "cpp", "py", "js"]

//#6.
/* Write a function that partitions the array into two sub-arrays: 
one with all even integers, and the other with all odd integers. 
Return your result in the following format: [[evens], [odds]] */

const six = arr => {
  let odds = arr.filter(element => element % 2 !== 0);
  let even = arr.filter(element => element % 2 === 0);
  return [even, odds];
};

console.log(`\nExercise Six:`);

console.log(six([5, 8, 9, 2, 0])); // ➞ [[8, 2, 0], [5, 9]]
console.log(six([1, 0, 1, 0, 1, 0])); // ➞ [[0, 0, 0], [1, 1, 1]]
console.log(six([1, 3, 5, 7, 9])); // ➞ [[], [1, 3, 5, 7, 9]]
console.log(six([])); // ➞ [[], []]
