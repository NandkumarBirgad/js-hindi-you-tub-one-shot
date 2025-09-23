class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I am ${this.name}, ${this.age} years old.`);
  }
}

const p2 = new Person("Amit", 25);
p2.greet(); // Hi, I am Amit, 25 years old.
