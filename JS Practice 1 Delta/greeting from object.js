const person = {
  name: "Prashant",
  age: 21,
  occupation: "Developer"
};

function greetPerson(p) {
  console.log(`Hello, my name is ${p.name}. I am ${p.age} years old and work as a ${p.occupation}.`);
}

greetPerson(person);
