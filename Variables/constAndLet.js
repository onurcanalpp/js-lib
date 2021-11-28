// VAR - LET - CONST

    /* let age = 22;
    console.log(age);

    age = 23; 
    console.log(age);
    

    const name = "Onur";
    console.log(name); */

    // if we declare a variable with let we can change the assign value later but we can't do it with const

    // name = "Can"; if u do that probably u will get Assignment to constant variable. error from the console  - 

    // const name; and we can't declare the empty variable with const u should declare some data's  in it;

/*

    let name = "Onur";
    console.log(name);

    name = "Elis";
    console.log(name);

*/

/* 
    
    let str = "";

    for(let i = 0;i < 5; i++){
        str = str.concat("*");
        console.log(str);
    }

*/

const myArr = [1, 2, 3];
console.log(myArr);
myArr.pop();
console.log(myArr);


const student = {
    name: "Onur",
    surname: "Alp",
    age: 5
}

console.log(student);
Object.freeze(student); // if we don't want to change any data in our object we can use this meth.
student.name = "Can";
console.log(student);
 /* if we try to do this it will work clearly. that's little hard to explain with comment write :) but if we want to give an example we can say (student) is our box we and name, surname and age our data's we can change the inside of box.
student = {
    name: "Osma",
    surname: "Alp",
    age: 5
}
if we try to change with like u will see the error on console it's didn't work
*/
