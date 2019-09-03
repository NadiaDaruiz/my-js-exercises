// # The band name exercises

function bandName(clothesColor, foodEaten) {
  const colorInitialInCaps =
    clothesColor[0].toUpperCase() + clothesColor.substring(1).toLowerCase();
  const foodInitialInCaps =
    foodEaten[0].toUpperCase() + foodEaten.substring(1).toLowerCase();

  const generateBandName = `The ${colorInitialInCaps} ${foodInitialInCaps}!`;

  return generateBandName;
}

console.log(bandName("brown", "cake"));
