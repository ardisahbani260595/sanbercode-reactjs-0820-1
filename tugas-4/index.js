// Soal No 1 =======================================================================
console.log("Soal No. 1 ============================================================ ")
console.log("LOOPING PERTAMA")
var nilai = 1;
while (nilai <= 20) { // Loop akan terus berjalan selama nilai nilai masih dibawah 10
    if (nilai % 2 == 0) {
        console.log(nilai + " - I Love Coding ");
    }
    nilai++;
}

console.log("LOOPING KEDUA")
var nilai = 20;
while (nilai >= 1) { // Loop akan terus berjalan selama nilai nilai masih dibawah 10
    if (nilai % 2 == 0) {
        console.log(nilai + " - I Will Become a Frontend Developer ")
    }
    nilai--;
}

console.log("\n");

// Soal No 2 =======================================================================
console.log("Soal No. 2 ============================================================ ")

for (x = 1; x <= 20; x++) {
    if ((x % 2 != 0) && (x % 3 == 0)) {
        console.log(x + " - I Love Coding");
    } else if (x % 2 == 0) {
        console.log(x + " - Berkualitas");
    } else if (x % 2 != 0) {
        console.log(x + " - Santai");
    }
}

console.log("\n");
// Soal No 3 =======================================================================
console.log("Soal No. 3 ============================================================ ")
var str = '';
for (var i = 0; i <= 6; i++) {
    for (var j = 0; j <= i; j++) {
        str += '#';
    }
    str += '\n';
}
console.log(str);

console.log("\n");
// Soal No 4 =======================================================================
console.log("Soal No. 4 ============================================================ ")

var kalimat = "saya sangat senang belajar javascript";
var splits = kalimat.split(' ');

console.log(splits);

console.log("\n");
// Soal No 5 =======================================================================
console.log("Soal No. 5 ============================================================ ")
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
daftarBuah.sort();

for (var i = 0; i <= (daftarBuah.length - 1); i++) {
    console.log(daftarBuah[i]);
}