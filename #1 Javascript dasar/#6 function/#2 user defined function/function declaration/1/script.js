// function declaration 
// pemanggilan bisa sebelum di deklarasikan karena konsep hoisting


console.log(volumeDuaBuahKubus(8, 3));
console.log(volumeDuaBuahKubus(10, 15));

function volumeDuaBuahKubus(a, b){
  return a * a * a + b * b * b ;
}