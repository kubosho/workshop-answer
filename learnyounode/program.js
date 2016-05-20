const http = require('http')
const map = require('through2-map')

const args = process.argv
const port = args[2]

const server = http.createServer((request, response) => {
    if (request.method !== 'POST') {
        return response.end('Your send request is not POST method')
    }
    
    request
        .pipe(map(chunk => chunk.toString().toUpperCase()))
        .pipe(response)
})
server.listen(port)
