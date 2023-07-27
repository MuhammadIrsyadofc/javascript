// var angka = prompt('masukan salah satu angka dari 1 - 3') ;

// switch ( angka ) {
//     case '1' :
//         alert('angka yang anda masukan adalah 1');
//         break ;
//     case '2' :
//         alert('angka yang anda masukan adalah 2');
//         break ;
//     case '3' :
//         alert('anda memasukan angka 3');
//         break ;
//     default :
//        alert('anda tidak memasukan angka  dari 1-3');
//        break ;
// }

var makananSehatDanTidakSehat = prompt('masukan makanan / minuman \n (contoh: nasi, daging, susu, hamburger, softdrinks) ') ;

switch ( makananSehatDanTidakSehat){
    case 'nasi' :
    case 'daging' :
    case 'susu' :
        alert('Makanan / Minuman SEHAT');
        break ;
    case 'hamburger' :
    case 'softdrinks' :
        alert('Makanan / Minuman TIDAK SEHAT');
        break ;
    default :
        alert('harap masukan dengan benar');
        break ;
}