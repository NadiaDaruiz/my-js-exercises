// # 1. Band name

// function bandName(clothesColor, foodEaten) {

//   let color =
//     clothesColor[0].toUpperCase() + clothesColor.substring(1).toLowerCase();
//   let food =
//     foodEaten[0].toUpperCase() + foodEaten.substring(1).toLowerCase();

//   return `The ${color} ${food}!`;
// }
// console.log(bandName("brown", "cake"));

// # 2. Refactor band name with global array

// const bandArray = [];

// function bandName(clothesColor, foodEaten) {
//   let newBandName = "";

//   let color =
//     clothesColor[0].toUpperCase() + clothesColor.substring(1).toLowerCase();
//   let food = foodEaten[0].toUpperCase() + foodEaten.substring(1).toLowerCase();

//   newBandName = `The ${color} ${food}!`;

//   bandArray.push(newBandName);

//   return newBandName;
// }

// console.log(bandName("brown", "cake"));
// bandName("blue", "paprika");
// console.log(bandArray);

// # 3. Calling two other functions --

const bandArray = [];

// function bandName(clothesColor, foodEaten) {
//   const color = capitalizeColor(clothesColor);
//   const food = capitalizeFood(foodEaten);

//   let newBandName = `The ${color} ${food}!`;

//   bandArray.push(newBandName);

//   return newBandName;
// }

// function capitalizeColor(clothesColor) {
//   return clothesColor[0].toUpperCase() + clothesColor.substring(1).toLowerCase()}

// function capitalizeFood(foodEaten) {
//   return foodEaten[0].toUpperCase() + foodEaten.substring(1).toLowerCase();
// }

// # 4. A single function call twice

function bandName(clothingColor, foodEaten) {
  let band = `The ${capitalizeInitial(clothingColor)} ${capitalizeInitial(
    foodEaten
  )}!`;

  bandArray.push(band);

  return band;
}

function capitalizeInitial(rawString) {
  return rawString[0].toUpperCase() + rawString.substring(1).toLowerCase();
}

console.log(bandName("brown", "cake"));
bandName("blue", "paprika");
console.log(bandArray);

// # 5. MakeTasty with switch statements
