var daftarNama = [];
var tambahNama = function (nama, gender, panggilan){
    daftarNama.push({
        nama: nama,
        gender: gender,
        panggilan: panggilan
    })
    return daftarNama;
}


tambahNama("Asep", "laki-laki", true)
tambahNama("Siti", "perempuan", false)
tambahNama("Yeni", "perempuan", false)
tambahNama("Rudi", "laki-laki", true)
tambahNama("Adit", "laki-laki", true)

if (daftarNama[panggilan] == true ){
    daftarNama[panggilan] = bapak
}else {
    daftarNama[panggilan] = ibu
}




// var dataFilm = [];
// var tambahFilm = function (nama, durasi, genre, tahun) {

//     dataFilm.push({
//         nama: nama,
//         durasi: durasi,
//         genre: genre,
//         tahun: tahun
//     });

//     return dataFilm;

// }

// tambahFilm("avenger", "2 Jam", "Action", "2019");
// tambahFilm("alice and wonderlan", "1 Jam", "Fantasy", "2015");

// console.log(dataFilm);