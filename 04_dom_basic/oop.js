// Simple Object
const person = {
  name: "Nandu",
  age: 22,
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};

console.log(person.name); // Nandu
person.greet();           // Hello, my name is Nandu
