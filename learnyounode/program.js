const net = require('net')
const args = process.argv

function zeroFill(num) {
    if (num < 10) {
        return `0${num}`
    }
    
    return num
}

function writeDateTime(socket) {
    const date = new Date()
    const formatDate = `${date.getFullYear()}-${zeroFill(date.getMonth() + 1)}-${zeroFill(date.getDate())}`
    const formatTime = `${zeroFill(date.getHours())}:${zeroFill(date.getMinutes())}`

    socket.write(`${formatDate} ${formatTime}`)
    socket.end('\n')
}

const server = net.createServer(writeDateTime)
server.listen(args[2])
