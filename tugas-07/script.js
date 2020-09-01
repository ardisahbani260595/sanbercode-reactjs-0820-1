// Soal No.1 ================================================================================
console.log('============================ Soal No.1 ============================')

class Animal {
    constructor(name, legs = 4, cold_blooded = false) {
        this.name = name;
        this.legs = legs;
        this.cold_blooded = cold_blooded;
    }
}

var sheep = new Animal("shaun");

console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false