// Function Expression

const square = function (numb){ // func name optional
    return (numb * numb);
}

console.log(square);
console.log(square(5));

// FIRST - CLASS Functions 

const myArr = [6, "Onur", function() {console.log('Array Element');} ];

myArr[2]();

const myObj = {
    jobTitle: "Javascript Developer",
    name: "Onur",
    func: function(){
        console.log("Obj El.");
    }
}
myObj.func();

console.log(20 + (function() { return 10; })() ); //IIFE