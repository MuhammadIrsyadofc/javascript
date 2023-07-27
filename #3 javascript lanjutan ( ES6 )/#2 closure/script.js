// closure adalah function yang menggunakan lexical scope
// lexical scope adalah scope yang bisa meng akses ke luar scope nya 

// closure harus menggunaka lexical scope nya . seperti contoh di bawah
// let init = (function (){
//     var nama = 'muhammad irsyad'
//     return function(){
//     console.log(nama) ;
//  }
// })() ;
// init()



// di bawah adalah tidak menggunakan lexical scope
// function init(){
//     // var nama = 'muhammad ' ;
//     function tampilNama(){
//         var nama = 'irsyad'
//         console.log(nama) ;
//     }
//     return tampilNama() ;
// }
// init() ;



// function init(){
//     return function(nama){
//         console.log(nama) 
//     }
// }
// const panggilNama = init() ;
// panggilNama('muhammad irsyad') ;



// fungsi dari closure untuk bisa menggunakan function factory dan privat method dan IIFE ,

// contoh function factory 
// function pergantianWaktu (waktu){
//     return function (nama){
//         console.log(`hallo ${nama} selamat ${waktu}`) 
//     }
// }  
// let pagi = pergantianWaktu('pagi')
// let siang = pergantianWaktu('siang')
// let malam = pergantianWaktu('malam')

// pagi('muhammad irsyad')
// siang('muhammad irsyad')
// malam('muhammad irsyad') 




// // privat method dan IIFE
// let add = (function (){
// let klick = 0 ;
//   return function(){
//     return ++ klick ;
//   }
// })() ;

// console.log(add())
// console.log(add())
// console.log(add())


























