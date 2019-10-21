//Gioco dei dadi, chi fa di più vince;

//creo variabili
var lancio1,lancio2

//imposto la funzione che al click fa partire lo script del lancio dadi
function dice(){
  //imposto il valore della variabile lancio1 con math-random
  lancio1 = Math.round(Math.random()*5+1);
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

  //imposto il valore della variabile lancio2 con math-random
  lancio2 = Math.round(Math.random()*5+1);
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
    document.getElementById('result').innerHTML = "Vince giocatore 1";
  }else if(lancio1<lancio2){
    document.getElementById('result').innerHTML = "Vince giocatore 2";
  }else{
    document.getElementById('result').innerHTML = "Avete pareggiato";
  }
}


//imposto condizioni per variabili secondo lancio
