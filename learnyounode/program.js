var filteredLs = require('./filteredLs')
var dirname = process.argv[2]
var ext = process.argv[3]

filteredLs(dirname, ext, (err, filelist) => {
    filelist.forEach(file => console.log(file))
})
