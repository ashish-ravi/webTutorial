console.log("starting app");

const _ = require('lodash')
console.log(_.isString(true))
console.log(_.isString("ashish"))
var filteredArray = _.uniq([1,2,4,4,2])
console.log(filteredArray)