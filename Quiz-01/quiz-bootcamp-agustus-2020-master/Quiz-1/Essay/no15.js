var daftarNama = []

function TambahNama(nama, jenisKelamin){
  daftarNama.push(
    {
      nama: nama,
      jenisKelamin: jenisKelamin,
      panggilan: jenisKelamin === "L" ? "Bapak" : (jenisKelamin === "P" ? "Ibu" : "Undefined")
    }
  )
}

TambahNama("Asep", "L")
TambahNama("Siti", "P")
TambahNama("Yeni", "P")
TambahNama("Rudi", "L")
TambahNama("Adit", "L")

for (var i=0; i < daftarNama.length ;i++ ){
  var number = i+1
  console.log(number+ ". " + daftarNama[i].panggilan + " " +daftarNama[i].nama)
}
  