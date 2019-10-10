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

const asterisk = () => {
  let star = "";
  for (let i = 0; i < 4; i += 1) {
    star += "*";
    console.log(star);
  }
};
console.log("\nExercise 3");
asterisk();

//#4
// The Goal

//   *
//  ***
// *****

const xmasTree = () => {
  stars = "";
  for (let i = 0; i < 3; i += 1) {
    stars = "";
    for (let j = 0; j < 3; j += 1) {
      stars = "*";
    }
    for (let x = 0; x < 3; x += 1) {
      stars = "*";
    }
    console.log(stars);
  }
};
console.log("\nExercise 4");
xmasTree();
