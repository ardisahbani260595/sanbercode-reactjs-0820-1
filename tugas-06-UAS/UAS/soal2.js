// Fungsi menghitung luas lingkaran 
console.log("================= Perhitungan Luas lingkaran (L = phi * r^2) =================");

function lingkaran(jari2) {
    return 3.14 * (jari2 * jari2);
}

var inputNilaiLingkaran = lingkaran(3);
console.log(inputNilaiLingkaran);


console.log("\n");
// Fungsi menghitung luas Persegi
console.log("================= Perhitungan Luas persegi (L = s * s) =================");

function persegi(sisi) {
    return sisi * sisi;
}

var inputNilaiPersegi = persegi(4);
console.log(inputNilaiPersegi);

console.log("\n");
// Fungsi menghitung luas segitiga
console.log("================= Perhitungan Luas segitiga (L = 1/2 * a * t) =================");

function segitiga(a, t) {
    return 1 / 2 * a * t;
}

var inputNilaiSegitiga = segitiga(4, 5);
console.log(inputNilaiSegitiga);