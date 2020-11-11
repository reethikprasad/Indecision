class Person {
  constructor(name = "Unknow", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi i am ${this.name}!!!!`;
  }
  getDesc() {
    return `${this.name} is ${this.age} year old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  HasMajor() {
    return !!this.major;
  }
  getDesc() {
    let desc = super.getDesc();

    if (this.HasMajor()) {
      desc += ` their major is ${this.major}`;
    }
    return desc;
  }
}

class Traveller extends Person {
  constructor(name, age, major, location) {
    super(name, age, major);
    this.location = location;
  }
  HasLocation() {
    return !!this.location;
  }
  getGreeting() {
    let loc = super.getGreeting();

    if (this.HasLocation()) {
      loc += `my location is ${this.location}`;
    }
    return loc;
  }
}

const me = new Traveller("Reethik", 20, "CSE", "India");

console.log(me.getGreeting());

const age = new Traveller();

console.log(age.getGreeting());
