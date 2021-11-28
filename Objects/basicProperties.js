// Object Literal
    
const person = {
    name: "Onur",
    surname: "Alp",
    age: 40,
    languages: ["Turkish", "English", "Spanish"],
    fullName: function() {
        return this.name + " " + this.surname;
    },
    address:{
        city: "Izmir",
        district: "Konak"
    }
}

// Dot Notation

console.log(person);
console.log(person.fullName());

person.job = "Engineer"; // new 
console.log(person);

// Bracket Notation

console.log(person['name']);
console.log(person['fullName']());
console.log(person['na' + "me"]); // 'na' + 'me' --> 'name'

// New object add

person.message = {};
console.log(person);

person.message.personMessage = "This is my special message";
console.log(person);