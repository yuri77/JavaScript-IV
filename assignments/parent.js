//JS- Yurika Practice Class

/* class

-Not hoisted
-"use strict"
-methods are special syntax
- a constructor function is visible

*/

class Parent {
  constructor(attributes) {
    this.age = attributes.age;
    this.name = attributes.name;
    this.location = attributes.location;
    this.phrase = attributes.phrase;
  }
  // Methods
  speak() {
    return `${this.name} says ${this.phrase}`;
  }

  location() {
    return `${this.name} is from ${this.location}`;
  }
} //Parent

class Child extends Parent {
  constructor(childAttributes) {
    super(childAttributes);
    this.toy = childAttributes.toy;
  }
  // Methods
  play() {
    return `${this.name} plays with ${this.toy}`;
  }
} //Child

class GrandChild extends Child {
  constructor(gcAttributes) {
    super(gcAttributes);
  }
  cries() {
    return `${this.name} needs a nap!`;
  }
  lostToy() {
    return `${this.name} has lost ${this.toy}!`;
  }
}

const fred = new Parent({
  age: 35,
  name: "Fred",
  location: "Bedrock",
  phrase: "Yabba dabba do"
});

const willma = new Parent({
  age: 37,
  name: "Willma",
  location: "Stonetown",
  phrase: "Fred!"
});

const pebbles = new Child({
  age: 2,
  name: "Pebbles",
  location: "Bedrock",
  phrase: "mama",
  toy: "ball"
});

const bumbum = new GrandChild({
  age: 2,
  name: "bumbum",
  location: "Bedrock",
  phrase: "mama",
  toy: "ball"
});

console.log(pebbles.play());
console.log(bumbum.play());
console.log(bumbum.cries());
console.log(bumbum.lostToy());
