// Nested Loops

//#1
// The Goal

// |||||
// |||||
// |||||
// |||||

const pipe = () => {
  let vertical = "";

  for (let i = 0; i < 4; i += 1) {
    vertical = "";
    for (let j = 0; j < 5; j += 1) {
      vertical += "|";
    }
    console.log(vertical);
  }
};
console.log("\nExercise 1");
pipe();

//#2
// The Goal
// -|-|-
// |-|-|
// -|-|-

const dash = () => {
  let stich = "";

  for (let i = 0; i < 3; i += 1) {
    if (i % 2 === 0) {
      stich = "";
      for (let j = 0; j < 5; j += 1) {
        if (j % 2 === 0) {
          stich += "-";
        } else {
          stich += "|";
        }
      }
    } else {
      stich = "";
      for (let j = 0; j < 5; j += 1) {
        if (j % 2 === 0) {
          stich += "|";
        } else {
          stich += "-";
        }
      }
    }
    console.log(stich);
  }
};
console.log("\nExercise 2");
dash();

//#3
// The Goal

// *
// **
// ***
// ****

const asteric = () => {};
console.log("\nExercise 3");
asteric();
