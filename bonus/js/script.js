console.log('JS OK')
/*
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
*/
/*  */
//collega il file HTML
const fizzBuzz = document.querySelector ('div.container');

for (let i = 1; i <= 100; i++) {
    //calcola 100 % 3
    const fizzNumbers = i % 3;
    //calcola 100 % 5 
    const buzzNumbers = i % 5;
    let message;
    let boxElements = document.createElement('div');
    fizzBuzz.append(boxElements);

    //dividendo 3 il ed il 5 troviamo un numero uguale senza resto scriviamo FizzBuzz
    if (fizzNumbers == 0 && buzzNumbers == 0){
        message = "FizzBuzz";
        boxElements.classList.add ("color-fizzbuzz");  
    //oppure dividendo 3 troviamo un numero senza resto scriviamo Fizz
    } else if (fizzNumbers == 0) {
        message = "Fizz"; 
        boxElements.classList.add("color-fizz"); 
      //oppure dividendo 5 troviamo un numero senza resto scriviamo Buzz
    } else if (buzzNumbers == 0){
        message = "Buzz";
        boxElements.classList.add("color-buzz"); 
    // altrimeti se nessun numero e divisibile tra il 3 ed il 5 scriviamo il numero 
    } else {
        message = i;
        boxElements.classList.add("base-color"); 
    }
    console.log (message);
    //css
    const fbBox = document.createTextNode (message);
    boxElements.appendChild (fbBox);
    boxElements.classList.add ("box","d-flex", "align-center", "justify-center");
};