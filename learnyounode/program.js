const http = require('http')
const url = require('url')

const args = process.argv
const port = args[2]

const server = http.createServer((request, response) => {
    if (request.method !== 'GET') {
        return response.end('Your send request is not GET method')
    }

    response.writeHead(200, { 'Content-Type': 'application/json' })
    
    const urlObj = url.parse(request.url, true)
    const pathname = urlObj.pathname
    const datetime = new Date(urlObj.query.iso)

    if (pathname === '/api/parsetime') {
        return response.end(JSON.stringify({
            hour: datetime.getHours(),
            minute: datetime.getMinutes(),
            second: datetime.getSeconds()
        }))
    }
    
    if (pathname === '/api/unixtime') {
        return response.end(JSON.stringify({
            unixtime: datetime.getTime()
        }))
    }
})
server.listen(port)
