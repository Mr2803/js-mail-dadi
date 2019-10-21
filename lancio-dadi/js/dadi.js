//Gioco dei dadi, chi fa di più vince;

//creo variabili
var lancio1,lancio2

//imposto la funzione che al click fa partire il lancio del primo dado
function dice(){
  //imposto il valore della variabile lancio1 con math-random
  lancio1 = Math.floor(Math.random()*6 +1);
  if (lancio1==1) {
    document.getElementById('risultato-lancio1').innerHTML= "<img src='img/face1.png'>";
  }else if (lancio1==2){
    document.getElementById('risultato-lancio1').innerHTML= "<img src='img/face2.png'>";
  }else if (lancio1==3){
    document.getElementById('risultato-lancio1').innerHTML= "<img src='img/face3.png'>";
  }else if (lancio1==4){
    document.getElementById('risultato-lancio1').innerHTML= "<img src='img/face4.png'>";
  }else if (lancio1==5){
    document.getElementById('risultato-lancio1').innerHTML= "<img src='img/face5.png'>";
  }else if (lancio1==6){
    document.getElementById('risultato-lancio1').innerHTML= "<img src='img/face6.png'>";
  }
  console.log(lancio1)//debug
}


//imposto la funzione che al click fa partire il lancio del secondo dado
function dice2(){
lancio2 = Math.floor(Math.random()*6 +1);
if (lancio2==1) {
  document.getElementById('risultato-lancio2').innerHTML= "<img src='img/face1.png'>";
}else if (lancio2==2){
  document.getElementById('risultato-lancio2').innerHTML= "<img src='img/face2.png'>";
}else if (lancio2==3){
  document.getElementById('risultato-lancio2').innerHTML= "<img src='img/face3.png'>";
}else if (lancio2==4){
  document.getElementById('risultato-lancio2').innerHTML= "<img src='img/face4.png'>";
}else if (lancio2==5){
  document.getElementById('risultato-lancio2').innerHTML= "<img src='img/face5.png'>";
}else if (lancio2==6){
  document.getElementById('risultato-lancio2').innerHTML= "<img src='img/face6.png'>";
}
if(lancio1>lancio2){
  document.getElementById('result').innerHTML = "Vince il giocatore 1";
}else if(lancio1<lancio2){
  document.getElementById('result').innerHTML = "Vince il giocatore 2";
}else{
  document.getElementById('result').innerHTML = "Avete pareggiato";
}
document.getElementById('reset').innerHTML = "Un'altra partita?";
console.log(lancio2) //debug
}


//imposto condizioni per variabili secondo lancio
