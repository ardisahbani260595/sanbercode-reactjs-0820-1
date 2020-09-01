// Soal No.1 ================================================================================
console.log('============================ Soal No.1 ============================')
console.log("= Perhitungan Luas lingkaran (L = phi * r^2) =");

let luasLingkaran = (jari2) => {
    return 3.14 * (jari2 * jari2);
}

let inputNilaiLingkaran = luasLingkaran(3);
console.log(inputNilaiLingkaran);

console.log("= Perhitungan keliling lingkaran (L = 2 * phi * r) =");

let kelilingLingkaran = (jari2) => {
    return 2 * 3.14 * jari2;
}

let inputNilaijari2 = kelilingLingkaran(3);
console.log(inputNilaijari2);

console.log("\n")
// Soal No.2 ================================================================================
console.log('============================ Soal No.2 ============================')

let kalimat = "";
let getString = (string) => {
    let tambahKalimat = kalimat += string + "\n";
    return tambahKalimat
}

getString('saya');
getString('adalah');
getString('seorang');
getString('frontend');
getString('developer');
console.log(kalimat);

console.log("\n")
// Soal No.3 ================================================================================
console.log('============================ Soal No.3 ============================')


const newFunction = (firstName, lastName) => {
    return {
        firstName: firstName,
        lastName: lastName,
        fullName: () => {
            console.log(`${firstName} ${lastName}`)
            return
        }
    }
}

//Driver Code 
newFunction("William", "Imoh").fullName();

console.log("\n")
// Soal No.4 ================================================================================
console.log('============================ Soal No.4 ============================')

const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
  }

const {firstName, lastName, destination, occupation, spell} = newObject;

// Driver code
console.log(firstName, lastName, destination, occupation);

console.log(firstName);
console.log(lastName);
console.log(destination);
console.log(occupation);
console.log(spell);

console.log("\n")
// Soal No.5 ================================================================================
console.log('============================ Soal No.5 ============================')
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]
//Driver Code
console.log(combined)