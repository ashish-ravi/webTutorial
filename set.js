// does not comtain any duplicates. easiest way of removing any of them

let mySet = new Set()  //empty set

let set1 = new Set([1,2,3,4,5, 'stringhey', {"objectKey": "objectValue"}])   

console.log(set1)

console.log(set1.entries())

console.log(set1.has(2))

console.log(set1.has('stringhey'))

if( set1.has('stringhey')){
    set1.delete('stringhey')
}else{
    set1.clear()
}

set1.add(78)

console.log(set1.values())

for(let i of set1.values()){
    console.log(i)
}

set1.forEach( element => console.log(element))

let set2 = new Set([3,56,'a string'])
console.log(set2)

// destructuring
let ar1 = [...set2] 
console.log(ar1) 

// converting an array into a set
let ar2 = [45,35,65]
let setConv = [...new Set(ar2)]
console.log(setConv)

// To remove duplicate elements from array

let ar3 = [2,2,4,6,6,7,8,8]

//1st way
let ar3Set = Array.from(new Set(ar3))
console.log(ar3Set)


// 2nd way
let s3 = new Set(ar3)
console.log(s3)
//converting back to array
let ar4 = [...s3]
console.log(ar4)


//3rd way
let setDup = [...new Set(ar3)]
console.log(setDup)


// performance efficiency of set vs array

let a = [] , s = new Set()
let b = [1,2,3,4,5,6,7,8,9]

for(let i = 0; i< b.length ; i++){
    
    console.time('Array')
    a.push(b[i])
    console.timeEnd('Array')

    console.time('Set')
    s.add(b[i])
    console.timeEnd('Set')
}

console.log("!!!!!!!!!!Next test!!!!!!!!!")


let result 

console.time('Array')
result = a.indexOf(2) !== -1
console.timeEnd('Array')

console.time('Set')
result = s.has(2)
console.timeEnd('Set')


// questions:

// Demostrate the map and set datastructures and use the different options available
// use mapset for objects also and demonstrate how to add
// time evaluation b/w map and set
// how to convert object into map
// perform union or set operation in map or set

//demo to add objects into set

let ob1 = {id: 1, name: "abc"}
let ob2 = {id: 2, name: "xyz"}

s.add(ob1)
s.add(ob2)

console.log(s)

let m = new Map()
m.set(ob1)
m.set(ob2)
console.log(m)
