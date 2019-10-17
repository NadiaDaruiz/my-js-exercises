//#1. Students Name

// Create a function that takes an array of students and returns an array of student names.

function getStudentsNames(students) {
  return students.map(element => element.name);
}

console.log(`\nArray of Objects to Array ex:`);
console.log(
  getStudentsNames([
    { name: "Fran" },
    { name: "Dana" },
    { name: "Jaime" },
    { name: "Nadia" }
  ])
); // ["Steve", "Mike", "John"]

//#2. Object to Array

// Write a function that converts an object into an array of keys and values.

const objToArray = obj => {
  const keyValuePair = Object.entries(obj);

  return keyValuePair;
};

console.log(`\nObject to Array ex (two different ways):`);
console.log(
  objToArray({
    likes: 2,
    dislikes: 3,
    followers: 10
  })
);

const objectToArray = obj => {
  const result = [];
  for (let prop in obj) {
    result.push([prop, obj[prop]]);
  }
  return result;
};
console.log(objectToArray({ A: 1, B: 2, C: 3 }));

//#3. Keys and Values in separate Arrays

// Create a function that takes an object and returns the keys and values as separate arrays.

const keysAndValues = obj => {
  const getKeys = Object.keys(obj);
  const getValues = Object.values(obj);
  const myArray = [getKeys, getValues];

  //myArray.push(getKeys, getValues);

  return myArray;
};

console.log(`\nKey and Value in two array ex:`);

console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
console.log(
  keysAndValues({
    spring: "strawberry",
    fall: "grapes",
    winter: "clementines",
    summer: "raspberry"
  })
);

//#4. Make a Circle with OOP

/*
Your task is to create a Circle constructor that creates a circle with a radius provided by an argument. 
The circles constructed must have two getters getArea() (PIr^2) and getPerimeter() (2PI*r) which give both 
respective areas and perimeter (circumference).
For help with this class, I have provided you with a Rectangle constructor which you can use as a base example.
*/

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getArea() {
    return Math.PI * (this.radius * this.radius);
  }

  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

const circulo = new Circle(11);
console.log(`\nThis is the Area of circulo`);
console.log(circulo.getArea());
console.log(`\nThis is the Perimeter of circulo`);
console.log(circulo.getPerimeter());

// The example :
class Rectangle {
  constructor(sideA, sideB) {
    this.sideA = sideA;
    this.sideB = sideB;
  }
  getArea() {
    return this.sideA * this.sideB;
  }
  getPerimeter() {
    return (this.sideA + this.sideB) * 2;
  }
}
