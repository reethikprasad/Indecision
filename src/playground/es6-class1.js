class Person {
  constructor(name = "Unknow", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return "Hi i am {this.name}!!!!";
  }
  getDesc() {
    return "{this.name} is {this.age} year old.";
  }
}

const me = new Person("Reethik");
console.log(me.getGreeting);
console.log(me.getDesc);

const age = new Person();
console.log(age.getGreeting);
console.log(age.getDesc);
