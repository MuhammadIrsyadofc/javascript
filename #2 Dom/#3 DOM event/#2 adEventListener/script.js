// addEventListener
const p4 = document.querySelector('section#b p') ;
p4.addEventListener('click',function(){
    p4.style.backgroundColor = 'orange' ;
    const ul = document.querySelector('section#b ul') ;
    const listBaru = document.createElement('li') ;
    const textListBaru = document.createTextNode('ini adalah list baru') ;
    listBaru.appendChild(textListBaru) ;
    ul.appendChild(listBaru) ;
    ul.style.backgroundColor = 'orange'
    ul.style.color = 'black' ;
    ul.style.border = '10px solid black' ;
    ul.style.listStyle = 'none' ;
})

const p3 = document.querySelector('.p3') ;
p3.addEventListener('mouseenter', function(){
    p3.style.backgroundColor = 'orange' ;
})
p3.addEventListener('mouseleave', function(){
    p3.style.backgroundColor = 'blue' ;
    p3.style.color = 'white' ;
})  
