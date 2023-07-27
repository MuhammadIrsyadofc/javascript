// 2.1 Execution context, hoisting dan scope 

// console.log(nama) ;
// var nama = 'muhamad irsyad'  

// creation phase pada global context 
// nama var = undefined 
// nama function = fn() ;
// hoisting
// window = global object
// this = window

// execution phase







// var nama = 'muhammad irsyad' ;
// var umur = 24 ;

// console.log(sayHello()) ;

// function sayHello(){ 
//     return(`hallo nama saya ${nama} umur saya ${umur} tahun`)
// }    



// function membuat local exacution context
// yang di dalamnya terdapat creation phase dan execution phase
// kalau local execution context bisa akses window juga bisa akses argumen
// hoisting local


// setiap function di panggil maka akan membuat execution context baru 
// dan ditambahkan di tumpukan excecution
// dan setelah fungsinya di jalankan maka excecution context nya akan 
// di hilangkan dari tumpukanya 






function a(){
    console.log('ini adalah a') ;

    function b(){
        console.log('ini adalah b') ;

        function c(){
            console.log('ini adalah c') 
        } c() ; 

    } b() ; 
} 
a() ;






























