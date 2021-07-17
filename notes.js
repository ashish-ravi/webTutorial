console.log("work notes")

// creating own module

// console.log(module)

module.exports.age = 25;
console.log(module)

module.exports.addNote = () => {
    console.log("addNote")
    return 'newnote';
}

module.exports.add = (a,b) => {
    return a+b;
}