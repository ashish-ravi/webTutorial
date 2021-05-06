let colours = ['red', 'orange', 'black', 'green']

const newcolours = colours.map((item,index) =>{
    return item+'new'
});

console.log(newcolours)

// colours.forEach((items,index,arr) => {
//     arr[index] = `for ${index} element is ${items}`
// })

// console.log(colours)

const filterList = colours.filter((item) => {
    return item !== 'black'
})

console.log(filterList)

let age = [20,30,12,11,19,18,22]

const newAge = age.filter((item) =>{
    return item>18
})

console.log(newAge)

let mixed = ["tiger", 89, "lion",90]

const pure = mixed.filter((item) =>{
    return parseInt(item) == item             //parseInt(item) != item  or  isNaN(item) 
})

console.log(pure)


//NUMBER OBJECT
let num = 15.605;

console.log(num.toExponential())
console.log(num.toFixed())
console.log(num.toPrecision(3))


//MATH OBJECT
let n = 5;

//DATE OBJECT
let date = new Date()
console.log(date.toISOString())