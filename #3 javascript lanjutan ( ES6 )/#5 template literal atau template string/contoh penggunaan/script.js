// template literals / template string




// 1. embeded expresion

// const nama = 'muhammad irsyad' ;
// let umur = 24 ;
// console.log(`hallo nama saya ${nama}, dan saya ${umur} tahun`) ;

// console.log(`${1 + 1}`)
// console.log(`${alert('hallo')}`) ;


// const x = 10 ;
// console.log(`${ x % 2 == 0 ? 'genap' : 'ganjil' }`) ;




// // // 2. HTML Fragments
// const mhs = {
//     nama : 'muhammad irsyad' ,
//     nrp : 1827372898,
//     umur : 24,
//     email : 'irsyadmuhammad.ofc@gmail.com '
// } ;
// const el = `<div class="mhs">
// <h2>${mhs.nama}</h2>
// <span class="nrp">${mhs.nrp}</span>
// </div>` ;

// document.body.innerHTML = el ;



// // 3. multi-line string
// `string text baris 1
// string text baris 2
// string text baris 3`





// 4. expresion interpolation
// const x = 10 ;
// const y = 15 ;
// console.log(`x = ${x} 
// y = ${y} 
// hasil dari x + y adalah ${x + y}`) ; // expresion interpolation




// 5. tagged template

// const nama = 'muhammad irsyad' ;
// const umur = 24 ;

// function coba(strings, ...values){
//     let result = '' ;

//     strings.forEach((isiString,index) =>{
//       result += `${isiString} ${values[index] || '' }` ;
//     })
    
//     return result ;
// }
// const str = coba`hallo nama saya ${nama}, umur saya ${umur}  tahun` ;
// console.log(str) ;



// const nama = 'muhammad irsyad' ;
// let umur = 24 ;

// function perkenalan(strings, ...values){
//     return strings.reduce((result, str, i) => ` ${result}${str}${values[i] || ''}` , '')
// }  

// let str = perkenalan`hallo nama saya ${nama} umur saya ${umur} tahun` ;
// console.log(str) ;
 







const nama = 'muhammad irsyad' ;
const umur = 24 ;
const email = 'irsyadmuhammad.ofc@gmail.com'

function highlight(strings, ...values){ // isistring dan embed expresion 
    // ... ( titik tiga berarti rest parameter )
    let result = '' ;

    strings.forEach((isiString,index) =>{
      result += `${isiString} <span class="hl">${values[index] || '' }</span>` ;
    })
    
    return result ;
}
const str = highlight`hallo nama saya ${nama}, umur saya ${umur} tahun,
dan email saya adalah : ${email}` ;

document.body.innerHTML = str ; 



