// // object literal

// let emp = {
//     name: 'abs',
//     age: 56,
//     number: 2424
// }

// console.log(emp)

// // using object instance

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


// function car(color, wheels, year, etype){
//     this.color = color;
//     this.year = year;
//     this.wheels = wheels;
//     this.etype = engine;
// }

// function engine(cylinders, size, model){
//     this.cylinders = cylinders;
//     this.size = size;
//     this.model = model
// }


// let myEngine = new engine(4, 2.2, 'model x')
// let myCar = new car('red', 4, 2011, myEngine)
// console.log(myCar)


// object literal

// dont use arrow function for any methods of an object 

// let car = {
//     color: "red",
//     year: 2020,
//     display: function(){
//         console.log(`The car is "${this.color}" in color and purchased in the year "${this.year}"`);
//     }
// }

// car.display();


// // object instance

// let person = new Object();

// person.age = 12;
// person.name = "Truds";
// person.show = function(){
//     console.log(`The person age is "${this.age}" and name is "${this.name}"`);
// }

// person.show()


// // constructor function

// function emp(name, age){
//     this.name = name;
//     this.age = age;

//     this.display = function(){
//         console.log(`Emp name is "${this.name}" and age is "${this.age}"`)
//     }
// }

// let myEmp = new emp("rachela", 32);

// myEmp.display()


// // compare objects- two objects can never be equal to each other

// // func within func

// // old js
// // let person = {
// //     name: "abc",
// //     age: 12,
// //     sayDetails: function(){
// //         console.log('Name is '+this.name+' age is '+this.age)
// //         that = this
// //         sayAgain: function(){
// //             console.log('Name is '+this.name+' age is '+this.age)
// //         }

// //     }
// // }

// // person.sayDetails()


// // ES6
// let user = {
//     name: "abc",
//     age: 12,
//     sayDetails: function(){
//         console.log(`Name is ${this.name} age is ${this.age}`)
//         //that = this
//         sayAgain = () => {
//             console.log(`Name is ${this.name} age is ${this.age}`)
//         }
        
//     }
// }

// user.sayDetails()

// // getter and setter

// var obj = {
//     a:7,

//     get b(){
//         return this.a + 1;
//     },

//     set c(x){
//         this.a = x/2
//     }
// }

// console.log(obj.a, obj.b)
// obj.c = 50
// console.log(obj.a, obj.b)




// function Person(fname, Iname) { 
//     var fullName = fname +""+ Iname
//     this.name = "person: " + fname

//     function print() {

//         console.log(fullName);

//     } 
//     this.render = function(){
//         print()

//     }

// }

// var myPerson = new Person("Brian", "Bailey");

// console.log(myPerson.name)
// // myPerson.print()
// myPerson.render()
// // console.log(myPerson.fullName)




let id = 1;

function Student(name,dept){
    this.name = name || ""
    this.dept = dept || "general"
    this.id = id++;
}
function Pstu(name, dept, proj){
    Student.call(this,name,dept)
    this.proj = proj || []
}

let e = new Student('student1', 'ise');
console.log(e)

let pe = new Pstu('student2', 'cse', ['proj1', 'proj2'])
console.log(pe)

Student.speciality = 'none'    //wont be applied to any of them- cannot add in inheritance like this


function Engineer(name, proj, college){
    Pstu.call(this,name,'engineering', proj)
    this.college = college || ""
}

let engg = new Engineer('student3',['proj-3','proj-4'], 'nmit')
console.log(engg)

// Multiple inheritance not possible in js

