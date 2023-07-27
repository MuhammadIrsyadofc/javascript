// cara membuat object pada javascript
// 1. object literal
// 2. function declaration
// 3. constructor function
// 4. object.create()


// 1. object literal
// PROBLEM : Tidak efektif untuk objeck yang banyak 
// let mahasiswa1 = {
//     nama : 'muhammad irsyad',
//     energi : 10 ,
//     makan : function(porsi){
//        this.energi += porsi ;
//        console.log(`hallo ${this.nama} selamat makan !`)   
//     }
// }

// let mahasiswa2 = {
//     nama : 'doddy',
//     energi : 20 ,
//     makan : function(porsi){
//        this.energi += porsi ;
//        console.log(`hallo ${this.nama} selamat makan !`)   
//     }
// }  
  



// // 2. function declaration
// const method_mahasiswa = {
//     makan : function(porsi){
//         this.energi += porsi ;
//         console.log(`hallo ${this.nama} selamat makan`) ;
//      }  ,
//      main : function(jam){
//          this.energi -= jam ;
//          console.log(`hallo ${this.nama} selamat bermain`) ;
//      } ,
//      tidur : function(jam){
//         this.energi += jam * 2 ;
//         console.log(`hallo ${this.nama} selamat tidur`)
//      }
// }
// function Mahasiswa(nama,energi){
//     let mhs = Object.create(method_mahasiswa) ;
//     mhs.nama = nama ;
//     mhs.energi = energi ;
    
//     return mhs ;
// } 
// const sandhika = Mahasiswa('sandhika',10) ;
// const muhammadIrsyad = Mahasiswa('muhammad irsyad', 10) ;
// const doddy = Mahasiswa('doddy', 20) ;   






// 3. constructor function
// function Mahasiswa(nama,energi){
//     this.nama = nama ;
//     this.energi = energi ;

//     Mahasiswa.prototype.makan = function(porsi){
//         this.energi += porsi ;
//         return `hallo ${this.nama} selamat makan` ;
//     }
//     Mahasiswa.prototype.main = function(jam){
//         this.energi -= jam ;
//         return `hallo ${this.nama} selamat bermain` ;
//     }
//     Mahasiswa.prototype.tidur = function(tidur){
//         this.energi += tidur * 2 ;
//         return `hallo ${this.nama} selamat tidur` ;
//     } 
// }
// const sandhika = new Mahasiswa('sandhika', 10) ;
// const muhammadIrsyad = new Mahasiswa('muhammad irsyad', 10)







// menggunakan class
// class Mahasiswa {
//     constructor(nama, energi){
//         this.nama = nama ;
//         this.energi = energi ;
//     }
// makan(porsi){
//     this.energi += porsi ;
//     return `hallo ${this.nama} selamat makan`
// }
// main(jam){
//     this.energi -= jam ;
//     return `hallo ${this.nama} selamat main`
// }
// tidur(jam){
//     this.energi += jam * 2 ;
//     return `hallo ${this.nama} selamat tidur`
// }

// }
// const sandhika = new Mahasiswa('sandhika', 10 ) ;
// const muhammadIrsyad = new Mahasiswa('muhammad irsyad', 10) ;






