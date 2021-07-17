// sync - event handlers - button- alert, <p>- js single thread
// Async - fetch(file), display(file) - callbacks, promise

// Promise - real time promises

let a = 2+3;
let p = new Promise(function(resolve,react){
    if(a==6){
        resolve('Success')
    }else{
        react('Failure')
    }
})

// console.log(p)
// p.then((messaage) => {
//     console.log(messaage+' then is executed')
// }).then((msg) => {
//     console.log('multiple then functions can be executed')
// })
// .catch((result) => {
//     console.log(result+' catch is executed')
// })

const r1 = new Promise((resolve,react) => {
    react('Video 1 is recorded')
})

const r2 = new Promise((resolve,react) => {
    resolve('Video 2 is recorded')
})

const r3 = new Promise((resolve,react) => {
    react('Video 3 is recorded')
})

Promise.all([p,r1,r2,r3]).then((msg) => {
    console.log(msg)
}).catch((smg) => {
    console.log(smg +' under catch')
})

Promise.allSettled([p,r1,r2,r3]).then((msg) => {
    console.log(msg)
}).catch((smg) => {
    console.log(smg+' udner catch 2')
})



// first one to execute - whether it is accepted or rejected it displays that

Promise.race([r1,r2,r3]).then((msg) => {
    console.log(msg+' under succ')
}).catch((smg) => {
    console.log(smg+' under catch')
})
