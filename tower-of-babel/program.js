const evenOrOdd = process.argv[2]
const sum = (+process.argv[3]) + (+evenOrOdd)

console.log({
    [(() => evenOrOdd % 2 === 0 ? 'even' : 'odd')()]: +evenOrOdd,
    [sum]: sum
})
