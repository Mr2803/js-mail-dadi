//Gioco dei dadi, chi fa di più vince;

//creo variabili
var lancio1,lancio2

//imposto condizioni per variabili primo lancio
lancio1 = Math.round(Math.random()*5+1);
//imposto condizioni per variabili secondo lancio
lancio2 = Math.round(Math.random()*5+1);

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
