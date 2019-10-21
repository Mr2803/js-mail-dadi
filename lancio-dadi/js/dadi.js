//Gioco dei dadi, chi fa di più vince;

//creo variabili
var lancio1,lancio2

//imposto condizioni per variabili primo lancio
function dice(){
  lancio1 = Math.round(Math.random()*5+1);
  document.getElementById('risultato-lancio1').innerHTML = lancio1;

  lancio2 = Math.round(Math.random()*5+1);
  document.getElementById('risultato-lancio2').innerHTML = lancio2;
  
  if(lancio1>lancio2){
    document.getElementById('result').innerHTML = "vince giocatore 1";
  }else if(lancio1<lancio2){
    document.getElementById('result').innerHTML = "vince giocatore 2";
  }else{
    document.getElementById('result').innerHTML = "pareggio";
  }
}


//imposto condizioni per variabili secondo lancio
