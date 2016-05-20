const fs = require('fs')
const http = require('http')

const args = process.argv
const port = args[2]
const filepath = args[3]

const server = http.createServer((request, response) => {
    fs.createReadStream(filepath)
        .pipe(response)
})
server.listen(port)
