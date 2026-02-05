console.log("It works");

/*
Mail
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.
Nota: 
Non è necessario provvedere alla validazione delle email
*/

// - creo una lista di con un array
const array = ["esempio1@gmail.com", "esempio2@alice.it", "esempio3@libero.it"];
console.log(array);

// - chiedo all'utente di inserire la mail
const typeMail = prompt("Type your email");
console.log(typeMail);

// - creo variabile globale per stampare se la mail e' presente o meno
let message = false;

// - ciclo For
for (let i = 0; i < array.length; i++) {
  const mail = array[i];
  // - controllo SE la mail inserita e' presente nell'array con un ciclo FOR
  if (mail === typeMail) {
    message = true;
  }
}
// - SE la mail e' presente invio alert di conferma
if (message === true){
    alert('Correct email')
}
// - ALTRIMENTI invio alert di errore
else{
    alert('Incorrect email')
}

console.log(message);
