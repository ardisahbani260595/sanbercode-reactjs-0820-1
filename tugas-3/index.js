// Soal 1 =======================================================================================================
// menymbungkan string
console.log("Soal 1 ============================================================");

var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";
// menambahkan string method
var kataKeduaModifikasi = kataKedua[0].toUpperCase() + kataKedua.slice(1);
var kataKeempatUppercase = kataKeempat.toUpperCase();
// output soal 1
console.log(kataPertama + " " + kataKeduaModifikasi + " " + kataKetiga + " " + kataKeempatUppercase);

console.log("\n")
// Soal 2 =======================================================================================================
// membuat variable integer

console.log("Soal 2 ============================================================");

var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

var numberpertama = Number(kataPertama);
var numberkedua = Number(kataKedua);
var numberketiga = Number(kataKetiga);
var numberkeempat = Number(kataKeempat);
// cek tipe data
// var tipedata = typeof (numberpertama);
// console.log(tipedata); --> number
console.log(numberpertama + numberkedua + numberketiga + numberkeempat);

console.log("\n")
// Soal 3 =======================================================================================================
console.log("Soal 3 ============================================================ ");

var kalimat = 'wah javascript itu keren sekali';

var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substring(4, 14); // do your own! 
var kataKetiga = kalimat.substring(15, 18); // do your own! 
var kataKeempat = kalimat.substring(19, 24); // do your own! 
var kataKelima = kalimat.substring(25, 31); // do your own! 

console.log('Kata Pertama: ' + kataPertama);
console.log('Kata Kedua: ' + kataKedua);
console.log('Kata Ketiga: ' + kataKetiga);
console.log('Kata Keempat: ' + kataKeempat);
console.log('Kata Kelima: ' + kataKelima);

console.log("\n")
// Soal 4 =======================================================================================================
console.log("Soal 4 ============================================================ ");

var nilai = 80;
var tipeData = typeof (nilai);

if (nilai >= 80) {
    console.log("Nilai Anda Adalah A");
} else if (nilai <= 70 || nilai >= 80) {
    console.log("Nilai Anda Adalah B");
} else if (nilai <= 60 || nilai >= 70) {
    console.log("Nilai Anda Adalah C");
} else if (nilai <= 50 || nilai >= 60) {
    console.log("Nilai Anda Adalah D");
} else if (nilai <= 50) {
    console.log("Nilai Anda Adalah E");
} else if (tipeData != Number) {
    console.log("Input yang anda masukan salah");
}

console.log("\n")
// Soal 5 =======================================================================================================
console.log("Soal 5 ============================================================ ");

var tanggal = 22;
var bulan = 8;
var tahun = 2020;

// var tgl = String(tanggal);
// var bln = String(bulan);
// var thn = String(tahun);


switch (bulan) {
    case 1: {
        bulan = 'Januari';
        break;
    }
    case 2: {
        bulan = 'februari';
        break;
    }
    case 3: {
        bulan = 'Maret';
        break;
    }
    case 4: {
        bulan = 'April';
        break;
    }
    case 5: {
        bulan = 'Mei';
        break;
    }
    case 6: {
        bulan = 'Juni';
        break;
    }
    case 7: {
        bulan = 'Juli';
        break;
    }
    case 8: {
        bulan = 'Agustus';
        break;
    }
    case 9: {
        bulan = 'September';
        break;
    }
    case 10: {
        bulan = 'Oktober';
        break;
    }
    case 11: {
        bulan = 'November';
        break;
    }
    case 12: {
        bulan = 'Desember';
        break;
    }
    default: {
        'Anda Belum Memasukan Data';
    }
}


console.log(tanggal + " " + bulan + " " + tahun);
console.log("\n")