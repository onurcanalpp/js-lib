// We created Animal Class here 
class Animal {
    constructor(_name){
        this.name = _name; 
    }
    // Make sound purpose was we can add any voice for the generic animal
    makeSound (){
        console.log("Animal Sound Function is Working!");
    }
}

// Let's create some child class from Animal. 
class Dog extends Animal{
    constructor(name){
        // We bind our Animal constructor
        super(name);        
    }
    // Adding special voice for dog but same function name with Animal Class
    // if we remove this makeSound function our Animal makeSound should be default function and it will work.
    // this is the example for Polymorphism
    makeSound(){
        console.log("Dog Voice");
        // super.makeSound(); if we use this super this function will trigger our Animal makeVoice function
    }

}

let a1 = new Animal("Onur");
let a2 = new Dog("Sugar");
a1.makeSound();
a2.makeSound();
