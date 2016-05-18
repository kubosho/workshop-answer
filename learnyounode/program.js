var fs = require('fs')

var buffer = fs.readFileSync(process.argv[2])
var bufferString = buffer.toString()

console.log(bufferString.split('\n').length - 1)
