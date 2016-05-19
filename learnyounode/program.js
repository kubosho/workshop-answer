var fs = require('fs')
var path = require('path')
var dir = process.argv[2]
var ext = `.${process.argv[3]}`

fs.readdir(dir, (err, filenames) => {
    filenames.filter(file => {
        if (path.extname(file) === ext) {
            console.log(file)
        }
    })
})
