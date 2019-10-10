//#1. Given the following nested objects:

// ##1.

const nestedObject = {
  speakers: [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }],
  data: {
    continents: {
      europe: {
        countries: {
          switzerland: {
            capital: "Bern",
            population: 8000000
          }
        }
      }
    },
    languages: {
      spanish: {
        hello: "Hola"
      },
      french: {
        hello: "Bonjour"
      }
    }
  }
};

function addSpeaker(newSpeaker) {
  nestedObject.speakers.push({ name: newSpeaker });
}
addSpeaker("Pedro");
console.log("\n Exercise 1.a");
console.log(nestedObject.speakers);

const addLanguage = (newLanguage, newWord) => {
  nestedObject.data.languages[newLanguage] = {
    hello: newWord
  };
};
addLanguage("german", "Hallo");
console.log("\n Exercise 1.b");
console.log(nestedObject.data.languages);

const country = nestedObject.data.continents.europe.countries;

function addCountry(newCountry, newCity, population) {
  country[newCountry] = {
    capital: newCity,
    population: population
  };
}
addCountry("Germany", "Berlin", 8400000);
console.log("\n Exercise 1.c");
console.log(country);

// function addLanguage(newLanguage, newWord) {
//   nestedObject.data.languages[newLanguage] = {
//     hello: newWord
//   };
// }
// addLanguage("german", "hallo");
// console.log("\n Exercise 1.b");

// console.log(nestedObject.data.languages);

/*
a - Write a function addSpeaker to add a speaker to the array of speakers.
The speaker you add must be an object with a key of name and a value of whatever you’d like.

b - Write a function addLanguage that adds a language to the languages object.
The language object you add should have a key with the name of the language and the value of another object
with a key of “hello” and a value of however you spell “hello” in the language you add.

c - Write a function addCountry that adds a European country to the countries object(inside of the continents object,
inside of the countries object).The country you add should be an object with the key as name of the country and
the value as an object with the keys of “capital” and “population” and their respective values.
*/

// ##2.

const nestedData = {
  innerData: {
    order: ["first", "second", "third"],
    snacks: ["chips", "fruit", "crackers"],
    numberData: {
      primeNumbers: [2, 3, 5, 7, 11],
      fibonnaci: [1, 1, 2, 3, 5, 8, 13]
    },
    addSnack: function(snack) {
      this.snacks.push(snack);
      return this;
    }
  }
};

/*
a - Using a for loop, console.log all of the numbers in the primeNumbers array.

b - Using a for loop, console.log all of the even Fibonnaci numbers.

c - Console.log the value “second” inside the order array.

d - Inside of the addSnack function there is a special keyword called this.
What does the word this refer to inside the addSnack function?
*/

const primeLoop = () => {
  for (
    let i = 0;
    i < nestedData.innerData.numberData.primeNumbers.length;
    i++
  ) {
    console.log(nestedData.innerData.numberData.primeNumbers[i]);
  }
};
console.log("\n Exercise 2.a");
primeLoop();

const fiboLoop = () => {
  let fiboArray = nestedData.innerData.numberData.fibonnaci;

  for (let i = 0; i < fiboArray.length; i++) {
    if (fiboArray[i] % 2 === 0) {
      console.log(fiboArray[i]);
    }
  }
};
console.log("\n Exercise 2.b");
fiboLoop();

console.log("\n Exercise 2.c");
console.log(nestedData.innerData.order[1]);

//#3. List of Books

/*
a - Create an array of objects, where each object describes a book and has properties for the title(a string), author(a string),
and alreadyRead(a boolean indicating if you read it yet).

b - Iterate through the array of books.For each book, log the book title and book author like so:
“The Hobbit by J.R.R.Tolkien”.

c - Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it,
log a string like ‘You already read “The Hobbit” by J.R.R. Tolkien’, and if not,
log a string like ‘You still need to read “The Lord of the Rings” by J.R.R. Tolkien.’
*/

console.log("\n Exercise 3");

const myBooks = [
  {
    title: "El lobo estepario",
    author: "Herman Hesse",
    alreadyRead: false
  },
  {
    title: "Las particulas elementales",
    author: "Michael Houllebeque",
    alreadyRead: true
  },
  {
    title: "Alicia en el país de las maravillas",
    author: "Lewis Carrol",
    alreadyRead: false
  }
];

for (let i = 0; i < myBooks.length; i++) {
  let books = myBooks[i];
  let bookInfo = books.title + " by " + books.author;

  if (books.alreadyRead === true) {
    console.log(`You already read ${bookInfo}`);
  } else {
    console.log(`You still need to read ${bookInfo}`);
  }
}

//#4. Easy one

/*
a - Creating objects using the ‘new ’ keyword
b - Creating objects using literal notation
c - Creating objects using the object constructor
d - Adding properties to each object type
e - Adding methods to each object type
*/

//a. Objects with the new keyword

const seasons = new Object();

seasons.summer = ["july", "august", "september"];
seasons.spring = ["april", "may", "june"];
seasons.fall = ["october", "november", "december"];
seasons.winter = ["january", "february", "march"];
seasons.total = 4;
seasons.all = function() {
  return `
  ${seasons.winter},
  ${seasons.spring}, 
  ${seasons.summer},
  ${seasons.fall}`;
};
console.log("\n Exercise 4.a");
console.log(seasons.all());
console.log(seasons.total);

// 2. Literal Notation:

const fruits = {
  summer: ["watermelon", "blueberries", "nectarines", "raspberries"],
  spring: ["strawberries", "apricots", "mangos", "pineapple"],
  fall: ["apples", "figs", "cranberries", "grapes"],
  winter: ["lemons", "grapefruits", "clementines", "oranges"],
  list: 12,
  allFruits: function() {
    return `
    ${fruits.fall}, 
    ${fruits.summer}, 
    ${fruits.winter}, 
    ${fruits.spring}`;
  }
};
console.log("\n Exercise 4.b");
console.log(fruits.list);
console.log(fruits.allFruits());

// 3. Object Constructor

const mySon = {};
Object.defineProperty(mySon, "firstName", { value: "Leon" });

console.log("\n Exercise 4.c");
console.log(mySon.firstName);

//#5. Change this code to make it work:

const person = {
  firstName: "Dana",
  lastName: "Daruiz",
  age: 36,
  employed: true
};

const person1 = {
  firstName: "Carla",
  lastName: "Daruiz",
  age: 34,
  employed: false
};

const person2 = {
  firstName: "Lara",
  lastName: "Daruiz",
  age: 33,
  employed: true
};
const person3 = {
  firstName: "Nadia",
  lastName: "Daruiz",
  age: 38,
  employed: false
};
const person4 = {
  firstName: "Guillermo",
  lastName: "Daruiz",
  age: 68,
  employed: true
};
console.log("\n Exercise 5.a");
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.employed);

const allPeople = [person, person1, person2, person3, person4];

console.log("\n Exercise 5.a");
console.log(allPeople);

function withJob() {
  let result = 0;

  for (let i = 0; i < allPeople.length; i++) {
    if (allPeople[i].employed) {
      result += 1;
    }
    return `There are ${result} people working.`;
  }
}
console.log("\n Exercise 5.b");
console.log(withJob());

function noJobOverThirty() {
  result = [];

  for (let i = 0; i < allPeople.length; i++) {
    if (!allPeople[i].employed && allPeople[i].age > 30) {
      result.push(allPeople[i].firstName);
    }
  }
  return `${result} are not working and over 30.`;
}

console.log("\n Exercise 5.c");
console.log(noJobOverThirty());

/*
a - Change what needed to ADD other more people to your array of objects, you need at lest 5 people
b - Find how many people has a job
c - Display only the people are over 35 and has no job
*/
