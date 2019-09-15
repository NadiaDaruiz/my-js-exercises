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
  const color = capitalizeInitial(clothingColor);
  const food = capitalizeInitial(foodEaten);

  const band = `The ${makeTasty(color)} ${food}!`;
  bandArray.push(band);

  return band;
}

function capitalizeInitial(rawString) {
  return rawString[0].toUpperCase() + rawString.substring(1).toLowerCase();
}

// # 5. MakeTasty with switch statements

function makeTasty(color) {
  let embellishColor = "";

  switch (color) {
    case "Red":
    case "red":
      return "Chili";
    case "Orange":
    case "orange":
      return "Tangerine";
    case "Yellow":
    case "yellow":
      return "Pineapple";
    case "Green":
    case "green":
      return "Sage";
    case "Blue":
    case "blue":
      return "Blueberry";
    case "Purple":
    case "purple":
      return "Plum";
  }

  return embellishColor;
}

console.log(bandName("blue", "cake"));
console.log(bandName("greeN", "paprika"));
console.log(bandArray);
console.log(bandName("orange", "cookie"));
console.log(bandArray);
