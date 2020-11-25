console.log("person.js is working");

const isAdult = (x) => (x > 18 ? true : false);
const canDrink = (x) => (x > 21 ? true : false);
const isSeniour = (x) => (x >= 65 ? true : false);

export { isAdult, canDrink, isSeniour as default };
