var jumlahAngkot = 15 ;
var angkotBeroprasi = 10 ;


for(var nomorAngkot = 1 ; nomorAngkot <= jumlahAngkot ; nomorAngkot++){
  if(nomorAngkot <= angkotBeroprasi){
    console.log('angkot nomor ' + nomorAngkot + ' beroprasi dengan baik')
  } else {
    console.log('angkot nomor ' + nomorAngkot + ' sedang tidak beroprasi')
  }
}

