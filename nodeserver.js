// var http = require('http');
// http.createServer(function(req,res){
//     res.writeHead(200, {'Content-type':'text/html'})
//     res.end('Hello world')
// }).listen('8080')

var fs = require('fs');
fs.appendFileSync('message.txt','data to append');
console.log("message: 'data to append' got appended")

const os = require('os');
let user = os.userInfo();
console.log(user)

fs.appendFileSync('message.txt', ` Hello ${user.username} !`)

const notes = require("./notes")

fs.appendFileSync('message.txt', `Hello ${user.username} you are ${notes.age}`);

let res = notes.addNote();
console.log(res)

console.log("Results: "+ notes.add(5,3))