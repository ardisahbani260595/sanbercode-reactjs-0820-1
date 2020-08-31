// Soal No 1 =======================================================================
console.log("Soal No. 1 ============================================================ ")

function halo() {
    // ----- Opsi 1 ------
    return "Halo Sanbers!";
    // ----- Opsi 2 ------
    // ucapkan = "Halo Sanbers!";
    // return ucapkan;
}

console.log(halo()) // "Halo Sanbers!" 

console.log("\n");

// Soal No 2 =======================================================================
console.log("Soal No. 2 ============================================================ ")

function kalikan(num1, num2) {
    return num1 * num2;
}

var num1 = 12;
var num2 = 4;

var hasilKali = kalikan(num1, num2);
console.log(hasilKali); // 48

console.log("\n");

// Soal No 3 =======================================================================
console.log("Soal No. 3 ============================================================ ")

function introduce(name, age, address, hobby) {
    return "Nama saya " + name + ", umur saya " + age + " tahun, alamat saya " + address + " , dan saya punya hobby yaitu " + hobby + "!";
}

var name = "John";
var age = 30;
var address = "Jalan belum jadi";
var hobby = "Gaming";

var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan); // Menampilkan "Nama saya John, umur saya 30 tahun, alamat saya di jalan belum jadi, dan saya punya hobby yaitu Gaming!" 

console.log("\n");
// Soal No 4 =======================================================================
console.log("Soal No. 4 ============================================================ ")
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku", 1992];
var daftarPesertaObj = {
    name: arrayDaftarPeserta[0],
    gender: arrayDaftarPeserta[1],
    hobby: arrayDaftarPeserta[2],
    birth: arrayDaftarPeserta[3]
}

console.log(daftarPesertaObj); //Deklarasi Object
console.log("===== Cetak Data Dari Object =====")
console.log("Nama : " + daftarPesertaObj.name); //Deklarasi Object
console.log("Jenis Kelamin : " + daftarPesertaObj.gender); //Deklarasi Object
console.log("Hobby : " + daftarPesertaObj.hobby); //Deklarasi Object
console.log("Tahun Lahir : " + daftarPesertaObj.birth); //Deklarasi Object

console.log("\n");
// Soal No 5 =======================================================================
console.log("Soal No. 5 ============================================================ ")

var daftarHargaBuah = [{
    nama: "strawberry",
    warna: "merah",
    adabijinya: "tidak",
    harga: 9000
}, {
    nama: "jeruk",
    warna: "oranye",
    adabijinya: "ada",
    harga: 8000
}, {
    nama: "Semangka",
    warna: "Hijau & Merah",
    adabijinya: "ada",
    harga: 10000
}, {
    nama: "Pisang",
    warna: "Kuning",
    adabijinya: "tidak",
    harga: 5000
}];

console.log(daftarHargaBuah[0]);

console.log("\n");
// Soal No 6 =======================================================================
console.log("Soal No. 6 ============================================================ ")
var dataFilm = [];
var tambahFilm = function (nama, durasi, genre, tahun) {

    dataFilm.push({
        nama: nama,
        durasi: durasi,
        genre: genre,
        tahun: tahun
    });

    return dataFilm;

}

tambahFilm("avenger", "2 Jam", "Action", "2019");
tambahFilm("alice and wonderlan", "1 Jam", "Fantasy", "2015");

console.log(dataFilm);