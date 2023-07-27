// const close = document.querySelector('.close') ;
// const card = document.querySelector('.card') ;

// close.onclick = function(){
//     card.style.display = 'none' ;
// } 


// DOM Traversal

// const close = document.querySelectorAll('.close') ;
// for(let i = 0; close.length ; i++){
//     close[i].addEventListener('click',function(e){
//         // close[i].parentElement.style.display = 'none' ;
//        e.target.parentElement.style.display = 'none' ;
//     })
// }  



// const close = document.querySelectorAll('.close') ;
// close.forEach(function(el){
//     el.addEventListener('click',function(e){
//         e.target.parentElement.style.display = ' none ' ;
//     })
// })
  
// DOM Traversal method 
// parentElement
// const nama = document.querySelector('.nama') ;
// console.log(nama) ;


// parentElement
// const nama = document.querySelector('.nama') ;
// console.log(nama.parentElement) ;


// parentNode
// const nama = document.querySelector('.nama') ;
// console.log(nama.parentNode) ;


// const nama = document.querySelector('.nama') ;
// console.log(nama.parentElement.parentElement) ;


// nextSibling
// const nama = document.querySelector('.nama') ;
// console.log(nama.nextSibling) ;

// previousSibling
// const nama = document.querySelector('.nama') ;
// console.log(nama.previousSibling) ;



// nextElementSibling
// const nama = document.querySelector('.nama') ;
// console.log(nama.nextElementSibling) ;


// previusElementSibling
// const nama = document.querySelector('.nama') ;
// console.log(nama.previousElementSibling) ;


// nextElementSibling
// const nama = document.querySelector('.nama') ;
// console.log(nama.nextElementSibling.nextElementSibling) ;


const container = document.querySelector('.container') ;
container.addEventListener('click',function(e){
    if(e.target.className == 'close'){
        e.target.parentElement.style.display = 'none' ;
        e.preventDefault() ;
        e.stopPropagation() ;
    }
})  










