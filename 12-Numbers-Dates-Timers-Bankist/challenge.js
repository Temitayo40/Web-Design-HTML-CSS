const num = 3884764.23;

const options = {
  style: "unit", // "percent", "currency"
  unit: "mile-per-hour", //"celsius"
  currency: "EUR",
};
console.log("US:   ", new Intl.NumberFormat("en-US", options).format(num));
console.log("Germany:   ", new Intl.NumberFormat("de-DE", options).format(num));
console.log("Syria:   ", new Intl.NumberFormat("ar-SY", options).format(num));
// console.log(
//   navigator.language,
//   new Intl.NumberFormat(navigator.language).format(num)
// );
const ingredients = ["olives", "spinach"];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is ur pizza with ${ing1} and ${ing2} 🍕`),
  3000,
  ...ingredients
);

if (ingredients.includes("spinach")) clearTimeout(pizzaTimer);

setInterval(() => {
  const now = new Date();
}, 3000);
