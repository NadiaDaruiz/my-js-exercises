// #1. Sum OfNumbers

/* Create a program that adds up the numbers in an array (of at least 3 numbers). 
 Bonus: Print to screen both the sum and the product of these numbers.*/

const sumWithLoops = numbers => {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result = numbers[i] + result;
    // result = numbers[i] * result;
  }
  return [result];
};

const sumWithMap = numbers => {
  let sumResult = 0;
  let prodResult = 1;

  numbers.map(element => (sumResult += element));
  numbers.map(element => (prodResult *= element));

  return [sumResult, prodResult];
};
console.log("Ex.1 with loops()");
console.log(sumWithLoops([1, 2, 3, 4]));
console.log("\nEx.1 with map()");
console.log(sumWithMap([1, 2, 3, 4]));

// #2. Hello my Friend

/* Create an array filled with your friends' and family's names.
Loop over the array and greet each friend ex: .Hello Maria! Hello Mike! etc.
Bonus: Print the indexes of each item in the array.
Expected output example: Mike is at index 1 of my friends array.*/

const myFriends = names => {
  //return names.map(element => `Hello ${element}!`);
  return names.map(
    element =>
      `${element} is at index ${names.indexOf(element)} of my friends array.`
  );
};
const list = ["Dana", "Carla", "Lara", "Lupe", "Nerea", "Belen"];
console.log("\nEx.2 with map()");
console.log(myFriends(list));

// #3.City Names

/* Create an array of city names. 
Loop through the array and add the city names to a string. 
Example of expected output: "Berlin, Paris, Prague, Rome".*/

const cityNames = city => {
  let cityStr = "";
  city.map(element => (cityStr += ` ${element},`));
  return cityStr;
};
const cityArray = ["Berlin", "New York", "Buenos Aires", "Valencia"];
console.log("\nEx.3 with map()");
console.log(cityNames(cityArray));

// #4. Odds and Evens

/* Create a program that changes a given array by adding 1 to each odd integer and 
subtracting 1 from each even integer. Examples:

[3, 5, 2, 4]➞ expected output: [4, 6, 1, 3]
[6, 9, 10, 20]➞ expected output: [5, 10, 9, 19] */

const oddAndEven = numbers => {
  return numbers.map(element =>
    element % 2 === 0 ? element + 1 : element - 1
  );
};

const num = [6, 9, 10, 20];
console.log("\nEx.4 with map()");
console.log(oddAndEven(num));

// #5. Capitalize.

/* Create a program that capitalize the first letter of each element in an array of names. 
Examples:
["matt", "sara", "lara"]➞["Matt", "Sara", "Lara"]
["samuel", "MARIA", "luke", "mary"]➞["Samuel", "Maria", "Luke", "Mary"]
["Cynthia", "Karen", "Jane", "Carrie"]➞["Cynthia", "Karen", "Jane", "Carrie"]

Note: Keep names in the same order and make sure that only the first lesson of the name is capitalized 
(See "Maria" in the second above example). */

const capitalized = name => {
  return name.map(
    element =>
      element.substring(0, 1).toUpperCase() + element.substring(1).toLowerCase()
  );
};

const nameList = ["matt", "sara", "lara"];
console.log("\nEx.5 with map()");
console.log(capitalized(nameList));

// #6. No Duplicates!

/* A set is a collection of unique items. A set can be formed from an array by removing all duplicate items.
Create a program which transforms an array into a set of unique values. See the examples below.

Example:

[1, 4, 4, 7, 7, 7]➞[1, 4, 7]
[1, 6, 6, 9, 9]➞[1, 6, 9]
[2, 2, 2, 2, 2, 2]➞[2]
[5, 10, 15, 20, 25]➞[5, 10, 15, 20, 25] */

const noDuplicates = arr => {
  return arr.filter((el, i, arr) => arr[i] !== arr[i + 1]);
};

const unSetList = [1, 4, 4, 7, 7, 7];
console.log("\nEx.6 with map()");
console.log(noDuplicates(unSetList));

// #7. Repeat it.

/* Create a program with two variables: "item" and "times". 
Create a program that repeats the "item" as many times as specified by "times". 
The first variable ("item") is the item that needs repeating while the second argument ("times") 
is the number of times the item is to be repeated. Print the result in an array.

Example: ("example", 3) ➞ ["example", "example", "example"] */

const repeat = (item, times) => {
  for (let i = 0; i < times; i++) {
    console.log(item);
  }
};
console.log("\nEx.6 with loops()");
repeat("hola", 5);

/* 
#8. Factors. 
A factor chain is an array where each previous element is a factor of the next consecutive element. 
The following is a factor chain: [3, 6, 12, 36]

// 3 is a factor of 6 (3 * 2 = 6)
// 6 is a factor of 12 (6 * 2 = 12)
// 12 is a factor of 36 (12 * 3 = 36)

Create a program that determines whether or not a given array is a factor chain.

Examples
[1, 2, 4, 8, 16, 32] ➞ true
[1, 1, 1, 1, 1, 1] ➞ true
[2, 4, 6, 7, 12] ➞ false
[10, 1] ➞ false  

*/
