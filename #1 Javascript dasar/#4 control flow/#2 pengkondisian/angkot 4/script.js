var jumlahAngkot = 10 ;
var angkotBeroprasi = 6 ;

for(var nomorAngkot = 1 ; nomorAngkot <= jumlahAngkot ; nomorAngkot++){
    if (nomorAngkot <= 6){
        console.log('angkot nomor ' + nomorAngkot + ' beroprasi dengan baik')
    } else if (nomorAngkot === 8) {
        console.log('nomor angkot ' + nomorAngkot + ' sedang lembur')
    }
     else {
        console.log('angkot nomor ' + nomorAngkot + ' sedang tidak beroprasi')
    }
}

