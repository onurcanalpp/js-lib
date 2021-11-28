// Function declaration - Statement

console.log(square(5)); // Function HOISTING

function square(num){
    return (num * num);
}

console.log(square);
console.log(square()); 
console.log(square(5)); // () --> Invoke


// Function Expression not HOISTED

newFunc(5);
const newFunc = function(numb){
    return (numb * numb);
}