// Sets and operations on Sets
let s1 = new Set()
let s2 = new Set([10,20,30,40,'Hey'])
console.log(s2)

// Entries  
console.log(s2.entries())
s1.add('Apple'); s1.add('Mango'); s1.add('Pineapple')
console.log(s1.values())

// Delete 
if(s2.has('Hey')){
    s2.delete(10);
}

console.log(s2)

// Converting set into an array
let arr = [...s1]
console.log(arr)

// Converting an array into a set
let arr1 = [1,2,3,4,5]
let arrToSet = [...new Set(arr1)]
// let arrToSet = new Set(arr1)
console.log(arrToSet)

// Remove duplicates from an array
let arr3 = [1,1,2,2,2,3,4,4,4,5]
console.log(`Array with duplicates is ${arr3}`)

// First way to convert the array to a set
let s = new Set(arr3)
console.log(s)

// Second Way to convert using bulit in function along with coversion to set
let setdup = Array.from(new Set(arr3))
console.log(setdup)