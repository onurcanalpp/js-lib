const addFive = function(numb, func) {
    console.log(numb + func() );
}
addFive(10, function(){ return 5;})

const myFunc = function(numb) {
    return function toDouble(otherNumb) {
        console.log(numb * otherNumb);
    }
}
myFunc(5)(4);