// Soal No.1 ================================================================================
console.log('============================ Soal No.1 ============================')
console.log("==== Realese 0 ====")

class Animal {
    constructor(name, legs = 4, cold_blooded = false) {
        this._name = name;
        this._legs = legs;
        this._cold_blooded = cold_blooded;
    }
    get name() {
        return this._name;
    }
    get legs() {
        return this._legs;
    }
    set legs(x) {
        return x = this._legs
    }
    get cold_blooded() {
        return this._cold_blooded;
    }
}

var sheep = new Animal("shaun");

console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false
console.log("\n") // false
console.log("==== Realese 1 ====")


class Ape extends Animal {
    constructor(name, legs=2, cold_blooded = false) {
        super(name, legs, cold_blooded);
    }
    yell(){
        return "Auoooo";
    }
}

let sungokong = new Ape("kera sakti");
console.log(sungokong.name) // "Kera Sakti"
console.log(sungokong.legs) // 2
console.log(sungokong.cold_blooded) // false
console.log(sungokong.yell())
console.log("\n") // false


class Frog extends Animal {
    constructor(name, legs=4, cold_blooded = true) {
        super(name, legs, cold_blooded);
    }
    jump(){
        return "hop hop";
    }
}

var kodok = new Frog("buduk")
console.log(kodok.name) // "buduk"
console.log(kodok.legs) // 2
console.log(kodok.cold_blooded) // true
console.log(kodok.jump())
console.log("\n") 

// Soal No.2 ================================================================================
console.log('============================ Soal No.2 ============================')

class Clock {
    constructor({template}){
        let timer;
  
    function render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    this.stop = function() {
      clearInterval(timer);
    };
  
    this.start = function() {
      render();
      timer = setInterval(render, 1000);
    };
    }
}

var clock = new Clock({template: 'h:m:s'});
  clock.start(); 



