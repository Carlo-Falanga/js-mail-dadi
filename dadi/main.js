console.log('It works');

/* 
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
*/


// - generazione numero random da 1 a 6
const math =  Math.floor(Math.random() * 6) + 1;
console.log(math);

// - creo una variabile per inserire il numero nel prompt
const typeNumber = Number(prompt('Type your number'))
console.log(typeNumber);


