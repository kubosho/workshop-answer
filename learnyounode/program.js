var args = process.argv
var result = 0

for (var i = 2, l = args.length; i < l; i++) {
    result += Number(args[i])
}

console.log(result)
