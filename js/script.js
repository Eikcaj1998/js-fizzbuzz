console.log('JS OK')
/*
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
*/
/*  */
//collega il file HTML
const fizzBuzzDom = document.getElementById ('fizz-buzz-dom');

for (let i = 1; i <= 100; i++) {
    //calcola 100 % 3
    const fizzNumbers = i % 3;
    //calcola 100 % 5 
    const buzzNumbers = i % 5;
    //dividendo 3 il ed il 5 troviamo un numero uguale senza resto scriviamo FizzBuzz
    if (fizzNumbers == 0 && buzzNumbers == 0){
        message = "FizzBuzz";
    //oppure dividendo 3 troviamo un numero senza resto scriviamo Fizz
    } else if (fizzNumbers == 0) {
        message = "Fizz"; 
      //oppure dividendo 5 troviamo un numero senza resto scriviamo Buzz
    } else if (buzzNumbers == 0){
        message = "Buzz";
    // altrimeti se nessun numero e divisibile tra il 3 ed il 5 scriviamo il numero 
    } else {
        message = i;
    }
    console.log (message);
};