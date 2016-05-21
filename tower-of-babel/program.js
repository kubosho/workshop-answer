class Character {
    constructor (x, y) {
        this.x = x
        this.y = y
        this.health = 100
    }
    
    damage () {
        this.health -= 10
    }
    
    getHealth () {
        return this.health
    }
    
    toString () {
        return `x: ${this.x} y: ${this.y} health: ${this.getHealth()}`
    }
}

const x = process.argv[2]
const y = process.argv[3]

const character = new Character(+x, +y)
character.damage()
console.log(character.toString())
