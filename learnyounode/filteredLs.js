var fs = require('fs')
var path = require('path')

module.exports = (dirname, ext, callback) => {
    ext = `.${ext}`

    fs.readdir(dirname, (err, filenames) => {
        if (err) {
            return callback(err)
        }
        
        callback(null, filenames.filter(file => path.extname(file) === ext))
    })
}
