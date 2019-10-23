//Gioco dei dadi, chi fa di più vince;

//creo variabili
var lancio1,lancio2;

var face = ["<img src='img/face1.png'>","<img src='img/face2.png'>","<img src='img/face3.png'>","<img src='img/face4.png'>","<img src='img/face5.png'>","<img src='img/face6.png'>"];

//imposto la funzione che al click fa partire il lancio del primo dado
function dice(){
  //imposto il valore della variabile lancio1 con math-random
  lancio1 = Math.floor(Math.random()*6 +1);
  console.log(lancio1) //debug
  for (var i=0; i<face.length; i++) {
        if(i == lancio1) {
            document.getElementById('risultato-lancio1').innerHTML = face[i];
            console.log(face[i])//debug
        }
    }

  // if (lancio1==1) {
  //   document.getElementById('risultato-lancio1').innerHTML= face[0];
  // }else if (lancio1==2){
  //   document.getElementById('risultato-lancio1').innerHTML= face[1];
  // }else if (lancio1==3){
  //   document.getElementById('risultato-lancio1').innerHTML= face[2];
  // }else if (lancio1==4){
  //   document.getElementById('risultato-lancio1').innerHTML= face[3];
  // }else if (lancio1==5){
  //   document.getElementById('risultato-lancio1').innerHTML= face[4];
  // }else if (lancio1==6){
  //   document.getElementById('risultato-lancio1').innerHTML= face[5];
  // }
  // console.log(lancio1)//debug
}

//imposto la funzione che al click fa partire il lancio del secondo dado
function dice2(){
lancio2 = Math.floor(Math.random()*6 +1);
console.log(lancio2)//debug
for (var j=0; j<face.length; j++) {
      if(j == lancio2) {
        document.getElementById('risultato-lancio2').innerHTML = face[j];
        console.log(face[j])//debug
      }
  }
// if (lancio2==1) {
//   document.getElementById('risultato-lancio2').innerHTML= face[0];
// }else if (lancio2==2){
//   document.getElementById('risultato-lancio2').innerHTML= face[1];
// }else if (lancio2==3){
//   document.getElementById('risultato-lancio2').innerHTML= face[2];
// }else if (lancio2==4){
//   document.getElementById('risultato-lancio2').innerHTML= face[3];
// }else if (lancio2==5){
//   document.getElementById('risultato-lancio2').innerHTML= face[4];
// }else if (lancio2==6){
//   document.getElementById('risultato-lancio2').innerHTML= face[5];
// }
//imposto la stampa di chi ha vinto solo all'interno della funzione del secondo dado
if(lancio1>lancio2){
  document.getElementById('result').innerHTML = "Vince il giocatore 1";
}else if(lancio1<lancio2){
  document.getElementById('result').innerHTML = "Vince il giocatore 2";
}else{
  document.getElementById('result').innerHTML = "Avete pareggiato";
}
document.getElementById('reset').innerHTML = "Un'altra partita?";
}
