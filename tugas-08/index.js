// di index.js
var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]
 
// Tulis code untuk memanggil function readBooks di sini
function buku(){
    readBooks(10000,books[0],function(x){
        readBooks(x, books[1], function(c){
            readBooks(c, books[2], function(d){
                readBooks(d, books[3], function(e){
                })
            })
        })
    })
}

buku();

