Promise.race([r1,r2,r3]).then((msg) => {
    console.log(msg+' under succ')
}).catch((smg) => {
    console.log(smg+' under catch')
})