// arguments object - no longer bound with arrow functions

const add = (a, b) => {
  // console.log(arguments);
  return a + b;
};
console.log(add(55, 1, 1001));

// this keyword - no longer bound

const user = {
  name: "Andrew",
  cities: ["Philadelphia", "New York", "Dublin"],
  printPlacesLived() {
    return this.cities.map((city) => this.name + " has lived in " + city);
  },
};
console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
  number: [1, 2, 3],
  multiplyBy: 3,
  multiply() {
    return this.SVGAnimatedNumberList.map((number) => number * this.multiplBy);
  },
};

console.log(multiplier.multiply());
