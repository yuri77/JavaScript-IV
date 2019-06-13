// CODE here for your Lambda Classes
class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
  }
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
  }
}

class Instructor extends Person {
  constructor(attributes) {
    super(attributes);
    this.specialty = attributes.specialty;
    this.favLanguage = attributes.favLanguage;
    this.catchPhrase = attributes.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}.`);
  }

  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
}

class Student extends Person {
  constructor(attributes) {
    super(attributes);
    this.previousBackground = attributes.previousBackground;
    this.className = attributes.className;
    this.favSubjects = attributes.favSubjects;
  }

  listsSubjects() {
    let fav = this.favSubjects;
    for (let i = 0; i < fav.length; i++) {
      console.log(fav[i]);
    }
  }

  PRAssiggnment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
}

class ProjectManager extends Instructor {
  constructor(attributes) {
    super(attributes);
    this.gradClassName = attributes.gradClassName;
    this.favInstructor = attributes.favInstructor;
  }
  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel study times!`);
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

const naruto = new Student({
  name: "naruto",
  location: "konoha",
  age: 22,
  previousBackground: "ninjya",
  className: "Web21",
  favSubjects: ["JavaScript", "HTML", "CSS"]
});

const gaga = new Student({
  name: "gaga",
  location: "watermountain",
  age: 30,
  previousBackground: "doctor",
  className: "Web21",
  favSubjects: ["R", "SQL", "Python"]
});

naruto.speak();
naruto.listsSubjects();
naruto.PRAssiggnment("Python");
naruto.sprintChallenge("Python");

const fred = new Instructor({
  name: "Fred",
  location: "Bedrock",
  age: 37,
  favLanguage: "JavaScript",
  specialty: "Front-end",
  catchPhrase: `Don't forget the homies`
});

fred.speak();
fred.demo("JavaScript");
fred.grade(gaga, "python");

const Konan = new ProjectManager({
  name: "Konan",
  location: "winterfell",
  age: 37,
  favLanguage: "SQL",
  specialty: "Back-end",
  catchPhrase: `Winter is comming`,
  gradClassName: "CS2",
  favInstructor: "Jojo"
});

Konan.speak();
Konan.demo("SQL");
Konan.grade(naruto, "SQL");
Konan.standUp("Web21_ah");
Konan.debugsCode(naruto, "SQL");
