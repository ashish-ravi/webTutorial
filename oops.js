const person = {
    prop: "hello",
    fun: function(){
        console.log("im a person")
    }
}

const me = Object.create(person)

me.prop = 'bye'
me.name = 'ash'

console.log(me)
console.log(person)
console.log(me.hasOwnProperty('prop'))     //under __proto__ in browser
console.log(person.hasOwnProperty('namek'))


function c() {
    // this.meth1 = function(){
    //     console.log("This is c")
    // }
    c.prototype.meth1 = function(){
        console.log("This is c")
    }
}

let c1 = new c()
c1.meth1()


// js doesnt support class based it supports object based
// from es6 a look and feel of class available
// this class is internally converted to as function
// if we dont write constructor, a default constructor will be created


class C{
    constructor(a,b){    //setup tje object
        // instance properties - unique for each object
        this.a = a
        this.b = b
        console.log("this is in class constructor C")
    }
    // instance methods 
    meth1(){
        console.log("u r in  c")
    }
    //static methods
    static compare(a,b){
        return a.b == b.b
    }
    static prop = 78
}

class D extends C{
    constructor(a,b,c){    //setup tje object
        // instance properties - unique for each object
       super(a,b)
       this.c = c
        console.log("this is in class constructor D")
    }
    // instance methods 
    meth1(){
        console.log("u r in d")
    }
    // static methods
}

let clasc1 = new C('ash',34)
let clasc2 = new D('ram',34,'bangalore')
// clasc2.__proto__ == C
console.log(clasc1)   // open this in browser
console.log(clasc2)
clasc2.meth1()
clasc1.meth1()

//static call using classname directily
console.log(C.compare(clasc1,clasc2))
console.log(C.prop)

class dog{
    constructor(breed){
        this.breed = breed
        console.log(`breed is ${this.breed}`)
    }
    disp(){
        console.log(`inside disp breed -> ${this.breed}`)
    }
}
class dogtype extends dog{
    constructor(breed,age){
        super(breed)
        this.disp()
        console.log(`in dogtype age is ${age} and breed is ${breed}`)
    }
}


let dgtyp = new dogtype('retriever',2)
