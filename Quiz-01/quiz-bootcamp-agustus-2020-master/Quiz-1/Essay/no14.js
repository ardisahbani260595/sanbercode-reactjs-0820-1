var pesertaLomba= [["Budi", "Pria", "172cm"], ["Susi", "Wanita", "162cm"], ["Lala", "Wanita", "155cm"], ["Agung", "Pria", "175cm"]]

var dataPesertaLomba = pesertaLomba.map((el) =>{
  var objectPesertaLomba = {
    nama: el[0],
    jenisKelamin: el[1],
    tinggi: el[2]
  }
  return objectPesertaLomba
})

console.log(dataPesertaLomba)