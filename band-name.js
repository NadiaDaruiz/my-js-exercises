// # Band name

// function bandName(clothesColor, foodEaten) {
//   const colorInitialInCaps =
//     clothesColor[0].toUpperCase() + clothesColor.substring(1).toLowerCase();
//   const foodInitialInCaps =
//     foodEaten[0].toUpperCase() + foodEaten.substring(1).toLowerCase();

//   const generateBandName = `The ${colorInitialInCaps} ${foodInitialInCaps}!`;

//   return bandName;
// }
// console.log(bandName("brown", "cake"));

// # Refactor band name

const bandArray = [];

function bandName(clothesColor, foodEaten) {
  const colorInitialInCaps =
    clothesColor[0].toUpperCase() + clothesColor.substring(1).toLowerCase();
  const foodInitialInCaps =
    foodEaten[0].toUpperCase() + foodEaten.substring(1).toLowerCase();

  const generateBandName = `The ${colorInitialInCaps} ${foodInitialInCaps}!`;

  bandArray.push(generateBandName);

  return bandArray;
}

console.log(bandName("brown", "cake"));
