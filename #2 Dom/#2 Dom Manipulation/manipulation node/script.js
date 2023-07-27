// // manipulation node

// // menambah elemen baru dengan appendChild

// buat elemen baru dengan appendChild 
const pBaru = document.createElement('p') ;
const textParagrafBaru = document.createTextNode('paragraf baru') ;
pBaru.appendChild(textParagrafBaru) ;
// simpan pBaru di akhir section a 
const sectionA = document.getElementById('a') ;
sectionA.appendChild(pBaru) ;



// menambah elemen baru dengan  insertBefore

// buat element
const liBaru = document.createElement('li') ;
const textLiBaru = document.createTextNode('list item baru') ;
liBaru.appendChild(textLiBaru) ;
// simpan li yang sudah di buat ke dalam bagian b di dalam li
const ul = document.querySelector('section#b ul') ;
const li2 = document.querySelector('section#b ul li:nth-child(2)') ;
ul.insertBefore(liBaru, li2) ;



// removeChild
const bagianA = document.getElementById('a') ;
const link = document.querySelector('section#a a') ;
bagianA.removeChild(link) ;

 



// replaceChild
const sectionB = document.getElementById('b') ;
const p4 = sectionB.querySelector('p') ;

const h2Baru = document.createElement('h2') ;
const textH2Baru = document.createTextNode('judul baru') ;
h2Baru.appendChild(textH2Baru) ;

sectionB.replaceChild(h2Baru, p4) ;
 















