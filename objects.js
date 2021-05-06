// let emp = {
//     name: 'abs',
//     age: 56,
//     number: 2424
// }

// console.log(emp)

// //using object instance

// let person = new Object()
// person.name = "xyz";
// person.age = 56

// console.log(person)

// //constructor function


// function car(year, model, name){
//     this.year = year;
//     this.model = model;
//     this.name = name;
// }

// let myCar = new car(2011, 'model x', 'tesla');

// console.log(myCar);


function car(color, wheels, year, etype){
    this.color = color;
    this.year = year;
    this.wheels = wheels;
    this.etype = engine;
}

function engine(cylinders, size, model){
    this.cylinders = cylinders;
    this.size = size;
    this.model = model
}


let myEngine = new engine(4, 2.2, 'model x')
let myCar = new car('red', 4, 2011, myEngine)
console.log(myCar.etype)