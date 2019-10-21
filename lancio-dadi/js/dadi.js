//Gioco dei dadi, chi fa di più vince;

var lancio1,lancio2

lancio1 = Math.round(Math.random()*5+1);
lancio2 = Math.round(Math.random()*5+1);

if(lancio1>lancio2){
  console.log("Al giovatore 1 è uscito" + lancio1)
  console.log("Al giovatore 2 è uscito" + lancio2)
  console.log("Vince il giocatore 1")
}else if(lancio1<lancio2){
  console.log("Al giovatore 1 è uscito" + lancio1)
  console.log("Al giovatore 2 è uscito" + lancio2)
  console.log("Vince il giocatore 2")
}else(
  console.log("Avete pareggiato")
)
