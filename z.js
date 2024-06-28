function greet(greeting, punctuation) {
  console.log(greeting + ", " + this.name + punctuation);
}

const person = {
  name: "Alice",
};

const boundGreet = greet.bind(person, "Hello", "!");
boundGreet();
