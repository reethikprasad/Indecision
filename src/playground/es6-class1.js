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

    if (this.HasMajor) {
      desc += ` their major is ${this.major}`;
    }
    return desc;
  }
}

const me = new Student("Reethik", 20, "CSE");

console.log(me.getDesc());

const age = new Student();

console.log(age.getDesc());
