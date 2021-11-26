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