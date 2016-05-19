const http = require('http')
const args = process.argv

http.get(args[2], response => {
    let result = ''
    
    response.setEncoding('utf8')
    response
        .on('data', data => {
            result += data
        })
        .on('error', err => {
            console.log(err)
        })
        .on('end', () => {
            console.log(result.length)
            console.log(result)
        })
})
