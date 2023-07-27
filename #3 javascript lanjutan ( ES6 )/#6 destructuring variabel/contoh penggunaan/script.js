// contoh penggunaan destructuring assignment 

   // 1. destructuring array
// let coba = ['satu','dua','tiga'] ;
// let [a,b,c] = coba ; 
// console.log(a) ;

// // skip item
// let cobaLagi = ['satu', 'dua' , 'tiga', 'empat' , 'lima' , 'enam'] ;
// const [item1,item2,item3,, item5,,] = cobaLagi ;
// console.log(item5) 

//// swap item
// let a = 1 ;
// let b = 2 ;
// [a,b] = [b,a]
// console.log(a)
// console.log(b)

//// rest parameter
// const [a, ...values]= [1,2,3,4,5,6,7,8]
// console.log(a) ;
// console.log(values) ;





    // 2. destructuring object
// let mhs = {
//     nama : 'muhammad irsyad' ,
//     umur : '24 tahun',
//     email : 'irsyadmuhammad.ofc@gmail.com ' 
// }
// let {nama,umur,email} = mhs ;
// console.log(nama) ;

//asign ke variabel baru
// let mhs = {
//     nama : 'muhammad irsyad' ,
//     umur : '24 tahun',
//     email : 'irsyadmuhammad.ofc@gmail.com ' 
// }
// let {nama : n ,umur : u ,email : e} = mhs ;
// console.log(n) ;
// console.log(u) ;
// console.log(e) ;

// memberikan default value
// let mhs = {
//     nama : 'muhammad irsyad' ,
//     umur : '24 tahun',
//     // email : 'irsyadmuhammad.ofc@gmail.com ' 
// }
// let {nama,umur,email = 'default@gmail.com'} = mhs ;
// console.log(nama) ;
// console.log(umur) ;
// console.log(email) ;

// memberi nilai default + assign ke variabel baru
// let mhs = {
//     nama : 'muhammad irsyad' ,
//     umur : '24 tahun',
//     // email : 'irsyadmuhammad.ofc@gmail.com ' 
// }
// let {nama : n ,umur : u ,email : e = 'default@gmail.com'} = mhs ;
// console.log(n) ;
// console.log(u) ;
// console.log(e) ;

// rest parameter 
// let mhs = {
//     nama : 'muhammad irsyad' ,
//     umur : '24 tahun',
//     email : 'irsyadmuhammad.ofc@gmail.com ' 
// }
// let {nama, ...value} = mhs ;
// console.log(nama) ;
// console.log(value) ;

// asignment tanpa deklarasi object
// ({nama,umur,email} = {
//     nama : 'muhammad irsyad' ,
//     umur : '24 tahun',
//     email : 'irsyadmuhammad.ofc@gmail.com ' 
// });
// console.log(nama) ;
// console.log(umur) ;
// console.log(email) ;

// mengambil field pada object, setelah dikirim sebagai parameter untuk function 
// let mhs = {
//     id : 123 ,
//     nama : 'muhammad irsyad' ,
//     umur : '24 tahun',
//     email : 'irsyadmuhammad.ofc@gmail.com ' 
// }
// function ambilIdDariMhs({id}){ // memanggil sesuai kebutuhan
//    return id;
// }
// console.log(ambilIdDariMhs(mhs)) ; // dikirim object lengkap 



   // destructuring pada function
// function coba(){
//    return [1,2] ;
// }
// let [a,b] = coba() ;
// console.log(b) ;















