class Person {
    constructor(_name, _age){
        this.name = _name;
        this.age = _age;

    }
    describe () {
        console.log(`I am ${this.name} and I am ${this.age} years old`);
    }
}

class Programmer extends Person{
    constructor(_name, _age, _yearsOfExperience){
        super(_name, _age);

        // Custom behaivour
        this.yearsOfExperience = _yearsOfExperience;

    }

    code () {
        console.log(`this ${this.name} coding!`);
    }

}

let person1 = new Person("Onur", 22);
let programmer1 = new Programmer("Can", 24, 6);

console.log(person1);
programmer1.describe();
programmer1.code();

const programmers =  [
    new Programmer("Oyku", 25, 4),
    new Programmer("Berk", 32, 2)
];

function developSoftware (getProgrammers){
    // Develop software
    for(let getProgrammer of getProgrammers){
        getProgrammer.code();
    }

}

developSoftware(programmers);

/* New Examples for child class */

class Person {
    constructor(name, surname, age){
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    fullName() {
        return this.name + " - " + this.surname;
    }
}

class Engineer extends Person { }; // Engineer --> Subclass (Child) Person --> Superclass (Parent)

const person1 = new Person("Can", "Alp", 24);

const person2 = new Engineer("Onur", "Alp", 22);

console.log(person1);
console.log(person2);

console.log(person1 instanceof Person);
console.log(person2 instanceof Person);

console.log(person1 instanceof Engineer);