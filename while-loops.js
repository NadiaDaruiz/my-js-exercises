//#While loops

//1.
const runAlong = () => {
  let i = 0;

  while (i < 15) {
    i++;
    console.log(`i is less than ${i}`);
  }
};
console.log("\n  Exercise 1");
runAlong();

//2.
const cityNames = () => {
  const cities = [
    "Viedma",
    "Puerto Madryn",
    "Cdad de Buenos Aires",
    "Valencia",
    "San Cristobal de las Casas",
    "Medellin",
    "New York",
    "Berlin"
  ];
  let cityIndex = 0;

  while (cityIndex < cities.length) {
    console.log(`${cities[cityIndex]} is a place where I lived.`);
    cityIndex += 1;
  }
};
console.log("\n  Exercise 2");
cityNames();

//3.
const oddsAndEvens = () => {
  let numbers = [1, 2, 3, 4];
  let index = 0;
  console.log("Original array:", numbers);

  while (index < numbers.length) {
    if (numbers[index] % 2 === 0) {
      numbers[index] -= 1;
    } else {
      numbers[index] += 1;
    }
    index++;
  }
  console.log("New array:", numbers);
};
console.log("\n  Exercise 3");
oddsAndEvens();

//#Do While loops

//1.
const sumOfNumber = () => {
  const myArray = [1, 2, 3, 4];
  let index = 0;
  let result = 0;
  console.log("The original:", myArray);

  do {
    result += myArray[index];
    index++;
  } while (index < myArray.length);

  console.log("The sum:", result);
};
console.log("\n  Exercise 1");
sumOfNumber();

//2.
const addItUp = () => {
  let total = 0;
  let increment = 1;

  while (increment <= 20) {
    total += increment;
    increment += 1;
    console.log(total);
  }
};
console.log("\n  Exercise 2");
addItUp();

//3.
const capitalize = () => {
  let names = ["nadia", "dana", "carla", "lara"];
  let namesIndex = 0;
  let nameWithUpperCase = [];

  console.log("This is the old:", names);

  do {
    let firstLetterUpperCase =
      names[namesIndex][0].toUpperCase() + names[namesIndex].substring(1);

    names[namesIndex] = firstLetterUpperCase;
    namesIndex++;

    nameWithUpperCase.push(firstLetterUpperCase);
  } while (namesIndex < names.length);
  console.log("This is the new:", nameWithUpperCase);
};
console.log("\n  Exercise 3");
capitalize();

//5.
const repeatIt = () => {
  const item = "Loops give me headache";
  let times = 0;

  do {
    ++times;
    console.log(item);
  } while (times < 5);

  // times is LESS than 5 (<), times is GREATER than 5 (>)
};
console.log("\n  Exercise 4");
repeatIt();
