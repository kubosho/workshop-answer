const http = require('http')
const args = process.argv

function fetchData(url) {
    const data = []
    
    return new Promise((resolve, reject) => {
        http.get(url, response => {
            if (response.statusCode < 200 || response.statusCode > 299) {
                reject(new Error(`ページの取得に失敗しました。ステータスコード: ${response.statusCode}`))
            }
            response.on('data', chunk => data.push(chunk))
            response.on('error', err => reject(err))
            response.on('end', () => resolve(data.join('')))
        })
    })
}

const funcs = []
for (let i = 2, l = args.length; i < l; i++) {
    funcs.push(fetchData(args[i]))
}

Promise
    .all(funcs)
    .then(data => {
        for (let i = 0, l = data.length; i < l; i++) {
            console.log(data[i])
        }
    })
