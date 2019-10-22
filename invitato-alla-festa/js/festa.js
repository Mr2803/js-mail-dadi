/* NOTE: TRACCIA
Chiedi all’utente la sua email controlla che sia nella lista di chi può accedere e stampa un messaggio appropriato;*/

var email =["email1@gmail.com","email2@gmail.com","email3@gmail.com","email4@gmail.com","email5@gmail.com"];
console.log("mail valide : " + email);

//imposto la funzione che al click fa partire il prompt che domanda la mail
function insertMail(){
var emailUser = prompt("Inserisci la tua mail per verificare di essere invitato");
var messaggioTrovato;
 //imposto condizione del ciclo per verificare se la mail inserita è in lista
 for(var i=0; i < email.length; i++){
   if(email[i] == emailUser){
     messaggioTrovato=true;
    }
  }
  if(messaggioTrovato == true){
    document.getElementById('newMailOk').innerHTML= emailUser;
    document.getElementById('enterOrNot').innerHTML="Benvenuto";
  }else{
    document.getElementById('enterOrNot').innerHTML="Mi dispiace ma non sei invitato";
    document.getElementById('newMailNot').innerHTML= emailUser;
  }
}








////////////////////////////////////////////////////////////////////////////////
//NOTE:Spiegazione completa
// chiedo all'utente di inserire la sua mail
// var emailUser = prompt("inserisci una mail");
// console.log("la mail inserita dall'utente è:" + emailUser);

//imposto variabile di base
// var messaggioTrovato = document.getElementById('enterOrNot').innerHTML="Mi dispiace ma non sei invitato";

//imposto il ciclo
// for(i=0; i < email.length; i++){
//   //imposto condizione del ciclo
//   if(email[i] == emailUser){
//     messaggioTrovato= document.getElementById('enterOrNot').innerHTML="Benvenuto";
//   }
// }


// var messaggioTrovato = "non puoi entrare";

// for (var i = 0; i < email.length; i++){
//   console.log(email[i] ,i);
//
//   if(email[i]==emailUser){
//     messaggioTrovato = "puoi entrare"
//   }
// }
//
// console.log(messaggioTrovato)


// for (var i = 0; i < email.length; i++){
//   console.log(email[i] , i);
//   if(email[i]==emailuser){
//     messaggioTrovato = true;
//   }
// }
//
// console.log(messaggioTrovato)
// if(messaggioTrovato == true){
//   console.log('puoi entrare');
// } else {
//   console.log('non puoi entrare');
// }
