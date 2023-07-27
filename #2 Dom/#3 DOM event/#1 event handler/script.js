// Inline HTML attribute
// const p3 = document.querySelector('.p3') ;
// function ubahWarnaP3(){
//     p3.style.backgroundColor = 'orange' ;
//     p3.style.color = 'beige' ;
// }  


// elemen method
const p2 = document.querySelector('.p2') ;
p2.onclick = function ubahwarnaP2(){
    p2.style.backgroundColor = 'black'
    p2.style.color = 'white'
    p2.innerHTML = 'ini adalah paragraf 2'
    p2.style.textShadow = '6px 6px 3px red'
} ;


// kekurangan event handler
const p2 = document.querySelector('.p2') ;
p2.onclick = function ubahwarnaP2(){
    p2.style.backgroundColor = 'black'
}
// p2 di atas di timpa oleh yang di bawah ini
p2.onclick = function ubahwarnaP2(){
    p2.style.backgroundColor = 'orange'
} 













