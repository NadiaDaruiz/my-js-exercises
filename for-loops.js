// #For Loops

//1.
const addition = () => {
  let total = 0;
  for (let i = 1; i <= 20; i += 1) {
    total += i;
    console.log(`${total} + ${i}`);
  }
  console.log(total);
};
console.log("\n  Exercise 1");
addition();

//2.
const bottlesOfBeer = () => {
  let bottlesArr = ["one", "two", "three", "four", "five"];
  for (let i = 0; i < bottlesArr.length; i += 1) {
    if (bottlesArr[i] === "one") {
      console.log(`There is ${bottlesArr[i]} bottle of beer on the wall.`);
    } else {
      console.log(`There are ${bottlesArr[i]} bottle of beer on the wall.`);
    }
  }
};
console.log("\n  Exercise 2");
bottlesOfBeer();
//3.
const oddEven = () => {
  for (let i = 0; i < 20; i += 1) {
    if (i % 2 === 0) {
      console.log(`i = ${i} is even.`);
    } else {
      console.log(`i = ${i}`);
    }
  }
};
console.log("\n  Exercise 3");
oddEven();
//4.
const multiTables = () => {
  let multi = 0;

  for (let i = 0; i <= 10; i += 1) {
    multi = i * 9;
    console.log(` \t ${i} * 9 = ${multi}`);
  }
};
console.log("\n  Exercise 4");
multiTables();

// const bonus = () => {
//   let multi = 0;

//   for (let i = 0; i <= 10; i += 1) {
//     console.log(`\t  === ${i} ===`);
//     for (let m = 1; m <= 10; m += 1) {
//       multi = i * m;
//       console.log(` \t ${m} * ${i} = ${multi}`);
//     }
//   }
// };
// console.log("\n   Exercise 4-Bonus");
// bonus();

//5.
const grades = () => {
  const numberArr = [90, 60, 77, 81, 65];
  let avgNum = 0;

  for (let i = 0; i < numberArr.length; i += 1) {
    avgNum += numberArr[i];
  }
  avgNum /= numberArr.length;
  console.log(`\nThe average of ${numberArr} is of ${avgNum}.`);
};
console.log("\n  Exercise 5");
grades();

//6.
const fizzBuzz = () => {
  for (let i = 1; i <= 100; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};
console.log("\n  Exercise 6");
fizzBuzz();

//7.
const sumOfMultiples = () => {
  let summ = 0;

  for (let i = 1; i <= 1000; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
      summ += i;
    }
  }
  console.log(summ);
};
console.log("\n  Exercise 7");
sumOfMultiples();

//8.
const greetingFriends = () => {
  let names = [
    "Dana",
    "Carla",
    "Lara",
    "Guada",
    "Belen",
    "Martin",
    "John",
    "Denis"
  ];

  for (let i = 0; i < names.length; i += 1) {
    console.log(`Hello ${names[i]}!`);
  }
};
console.log("\n  Exercise 8");
greetingFriends();

const greetingBonus = () => {
  let names = [
    "Dana",
    "Carla",
    "Lara",
    "Guada",
    "Belen",
    "Martin",
    "John",
    "Denis"
  ];

  for (let i = 0; i < names.length; i += 1) {
    console.log(`${names[i]} is at index ${i} of my array of friends.`);
  }
};
console.log("\n  Exercise 8-Bonus");
greetingBonus();

//9.
const fourInOne = () => {
    for
};
console.log("\n  Exercise 9");
fourInOne();
//10.
const palindrome = () => {};
console.log("\n  Exercise 10");
palindrome();
