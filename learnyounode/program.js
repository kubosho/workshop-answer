const http = require('http')
const args = process.argv

http.get(args[2], response => {
    response.setEncoding('utf8')
    response
        .on('data', data => {
            console.log(data)
        })
        .on('error', err => {
            console.log(err)
        })
        .on('end', () => {
            // nothing
        })
})
