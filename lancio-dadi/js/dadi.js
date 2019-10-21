//Gioco dei dadi, chi fa di più vince;

//creo variabili
var lancio1,lancio2

//imposto condizioni per variabili primo lancio
function dice1(){
  lancio1 = Math.round(Math.random()*5+1);
  document.getElementById('risultato-lancio1').innerHTML = lancio1
}


//imposto condizioni per variabili secondo lancio
function dice2(){
  lancio2 = Math.round(Math.random()*5+1);
  document.getElementById('risultato-lancio2').innerHTML = lancio2
}

//imposto le condizioni
if(lancio1>lancio2){
  console.log("Al giocatore 1 è uscito" + lancio1) // DEBUG
  console.log("Al giocatore 2 è uscito" + lancio2) // DEBUG
  console.log("Vince il giocatore 1")
}else if(lancio1<lancio2){
  console.log("Al giocatore 1 è uscito" + lancio1) // DEBUG
  console.log("Al giocatore 2 è uscito" + lancio2) // DEBUG
  console.log("Vince il giocatore 2")
}else(
  console.log("Avete pareggiato") // DEBUG
)
