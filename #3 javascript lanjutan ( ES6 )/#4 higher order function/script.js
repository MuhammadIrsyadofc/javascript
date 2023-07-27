// // // mencari angka >= 3

// filter
// const angka = [-1,8,9,1,4,-5,-4,3,2,9] ;
// const newAngka = angka.filter((a) => a >= 3 ) ;
// console.log(newAngka) ;

// map
// const angka = [-1,8,9,1,4,-5,-4,3,2,9] ;
// const newAngka = angka.map(a => a * 2) ;
// console.log(angka)
// console.log(newAngka) ;


// reduce
// jumlahkan seluruh elemen pada array
// const angka = [-1,8,9,1,4,-5,-4,3,2,9] ;
// // const angka = [5 + -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9] ;

// const newAngka = angka.reduce((accumulator, currentValue, ) => accumulator + currentValue, 5) ;
// console.log(newAngka) ;


// method chaining

// cari angka >5
// kalian 3 
const angka = [-1,8,9,1,4,-5,-4,3,2,9] 
const hasil = angka.filter(a => a > 5) 
    .map(a => a * 3) 
    .reduce((accumulator,currentValue) => accumulator + currentValue) ;
console.log(hasil) ;




