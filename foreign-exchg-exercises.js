// Exercises

// 1. Fill in the blanks
// 2. Refactor so that...

// getJpyFromEur is defined with function declaration syntax
// getAudFromEur is defined with function expression syntax
// getChfFromEur is defined with ES6 arrow function syntax

// (Note: this is just an exercise. In the real world, aim for
// just one function syntax per codebase and keep it consistent)

// 3. Refactor to give a result to two decimal places, like this:

// 145.089 should round to 145.09
// 145.085 should round to 145.09
// 145.082 should round to 145.08

// Note: Because JS is weird, add some code that converts
// floating points values to an integer that represents cents
// and perform arithmetic on integers only
// Once you have the result in cents, convert it back to decimal
// as the last step just before returning it
// Further reading: http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html

function convertFromEur(amount, curr) {
  switch (curr) {
    case "JPY":
      return getJpyFromEur(amount);
    case "AUD":
      return getAudFromEur(amount);
    case "CHF":
      return getChfFromEur(amount);
    default:
      return "The requested currency is not available. Please enter JPY, AUD or CHF";
  }
  // Test yourself: What do you usually see in switch statements that is not here? What is its job, and why is it not here?
}

function getJpyFromEur(amount) {
  // 1 EUR = 116.402 JPY
  return ((amount * 116402) / 100000).toFixed(2);
}

const getAudFromEur = function(amount) {
  // 1 EUR = 1.62072 AUD
  return ((amount * 162072) / 100000).toFixed(2);
};

const getChfFromEur = amount => {
  // 1 EUR = 1.08329 CHF
  return ((amount * 108329) / 100000).toFixed(2);
};

console.log(convertFromEur(100, "AUD"));
console.log(convertFromEur(105, "CHF"));
console.log(convertFromEur(109, "JPY"));
