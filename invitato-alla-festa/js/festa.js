//dichiarazione arrey
var email =["email1@gmail.com","email2@gmail.com","email3@gmail.com","email4@gmail.com","email5@gmail.com"];
console.log("mail valide : " + email)

//chiedo all'utente di inserire la sua mail
var emailuser = prompt("inserisci una mail");
console.log("la mail inserita dall'utente è:" + emailuser)


for (var i = emailuser; i !== email ; i++){
  console.log("Attenzione la mail inserita non è valida");
}

console.log("complimenti puoi entrare alla festa")
