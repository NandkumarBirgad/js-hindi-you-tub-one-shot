/**
 * Comprehensive Guide to JavaScript Objects
 *
 * Objects are fundamental in JavaScript, used for storing collections of data and more complex entities.
 * This file demonstrates various ways to create objects, their properties, methods, and common uses.
 */

// ==========================================
// 1. OBJECT CREATION METHODS
// ==========================================

// 1.1 Object Literal (most common and simple way)
const person = {
  name: "John",
  age: 30,
  city: "New York",
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};
console.log("Object Literal:", person);
person.greet();

// 1.2 Using new Object() Constructor
const car = new Object();
car.make = "Toyota";
car.model = "Camry";
car.year = 2020;
car.start = function() {
  console.log(`${this.make} ${this.model} is starting...`);
};
console.log("Object Constructor:", car);
car.start();

// 1.3 Object.create() - Creates object with specified prototype
const animal = {
  type: "mammal",
  speak: function() {
    console.log("Animal speaks");
  }
};

const dog = Object.create(animal);
dog.name = "Buddy";
dog.breed = "Golden Retriever";
dog.speak = function() {
  console.log(`${this.name} barks!`);
};
console.log("Object.create():", dog);
dog.speak();

// ==========================================
// 2. OBJECT PROPERTIES AND METHODS
// ==========================================

// Adding properties dynamically
person.job = "Developer";
person["salary"] = 75000; // Using bracket notation

// Methods
person.introduce = function() {
  return `Hi, I'm ${this.name}, a ${this.age}-year-old ${this.job}`;
};

console.log("Dynamic properties:", person);
console.log("Method call:", person.introduce());

// ==========================================
// 3. OBJECT METHODS (STATIC METHODS)
// ==========================================

const sampleObj = { a: 1, b: 2, c: 3 };

// Object.keys() - Returns array of property names
console.log("Object.keys():", Object.keys(sampleObj));

// Object.values() - Returns array of property values
console.log("Object.values():", Object.values(sampleObj));

// Object.entries() - Returns array of [key, value] pairs
console.log("Object.entries():", Object.entries(sampleObj));

// Object.assign() - Copies properties from source to target
const target = { x: 1 };
const source = { y: 2, z: 3 };
Object.assign(target, source);
console.log("Object.assign():", target);

// Object.freeze() - Prevents modification
const frozen = Object.freeze({ a: 1, b: 2 });
frozen.a = 999; // Won't change
console.log("Object.freeze():", frozen);

// Object.seal() - Prevents adding/removing properties but allows modification
const sealed = Object.seal({ a: 1, b: 2 });
sealed.a = 999; // Allowed
sealed.c = 3; // Won't add
console.log("Object.seal():", sealed);

// ==========================================
// 4. PROTOTYPES AND INHERITANCE
// ==========================================

// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding method to prototype
Person.prototype.greet = function() {
  console.log(`Hello from ${this.name}`);
};

const alice = new Person("Alice", 25);
const bob = new Person("Bob", 30);

alice.greet();
bob.greet();

// Inheritance using prototypes
function Employee(name, age, job) {
  Person.call(this, name, age); // Call parent constructor
  this.job = job;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.work = function() {
  console.log(`${this.name} is working as a ${this.job}`);
};

const emp = new Employee("Charlie", 35, "Engineer");
emp.greet();
emp.work();

// ==========================================
// 5. MODERN CLASS SYNTAX (ES6+)
// ==========================================

class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Cat extends Animal {
  constructor(name, breed) {
    super(name, "Cat");
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} meows`);
  }

  purr() {
    console.log(`${this.name} purrs`);
  }
}

const myCat = new Cat("Whiskers", "Siamese");
myCat.speak();
myCat.purr();

// ==========================================
// 6. COMMON USES AND PATTERNS
// ==========================================

// 6.1 Configuration objects
const config = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
  retries: 3,
  debug: true
};

// 6.2 Data storage
const userDatabase = {
  users: [],
  addUser: function(user) {
    this.users.push(user);
  },
  findUser: function(id) {
    return this.users.find(u => u.id === id);
  }
};

// 6.3 Singleton pattern
const Singleton = (function() {
  let instance;

  function createInstance() {
    return {
      data: "Singleton data",
      method: function() {
        console.log("Singleton method called");
      }
    };
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();
console.log("Same instance?", singleton1 === singleton2); // true

// ==========================================
// 7. OBJECT DESTRUCTURING AND SPREAD
// ==========================================

const user = {
  id: 1,
  username: "johndoe",
  email: "john@example.com",
  profile: {
    firstName: "John",
    lastName: "Doe"
  }
};

// Destructuring
const { username, email } = user;
console.log("Destructured:", username, email);

// Nested destructuring
const { profile: { firstName, lastName } } = user;
console.log("Nested destructured:", firstName, lastName);

// Spread operator for objects (ES9)
const updatedUser = { ...user, email: "newemail@example.com" };
console.log("Updated with spread:", updatedUser);

// ==========================================
// 8. SYMBOLS AND PRIVATE PROPERTIES
// ==========================================

const PRIVATE_KEY = Symbol("private");

class PrivateExample {
  constructor() {
    this[PRIVATE_KEY] = "secret";
  }

  getSecret() {
    return this[PRIVATE_KEY];
  }
}

const privateObj = new PrivateExample();
console.log("Private property:", privateObj.getSecret());
console.log("Direct access:", privateObj[PRIVATE_KEY]); // Still accessible, but "private" by convention

// ==========================================
// 9. OBJECT ITERATION
// ==========================================

const iterableObj = { a: 1, b: 2, c: 3 };

// for...in loop
console.log("for...in:");
for (let key in iterableObj) {
  console.log(`${key}: ${iterableObj[key]}`);
}

// Using Object.keys()
console.log("Using Object.keys():");
Object.keys(iterableObj).forEach(key => {
  console.log(`${key}: ${iterableObj[key]}`);
});

// ==========================================
// 10. JSON AND OBJECTS
// ==========================================

// Converting object to JSON
const jsonString = JSON.stringify(person);
console.log("JSON string:", jsonString);

// Parsing JSON back to object
const parsedObj = JSON.parse(jsonString);
console.log("Parsed object:", parsedObj);

// Note: Methods are lost in JSON serialization
console.log("Has greet method?", typeof parsedObj.greet === 'function'); // false
