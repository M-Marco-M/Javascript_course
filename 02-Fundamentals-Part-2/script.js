//Lezione 32
"use strict";

//La strict mode è un costrutto ce influenza tutto il codice che la segue
//Viene solitamente usata su specifici script, e fa si che Javascript segnali errori
//che normalmente non segnalerebbe. La strict mode segnala anche l'utilizzo di nomi riservati
//Ad esempio impedisce di chiamare una variabile if o interface

// let hasDriverLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true; //Qui Javascript segnala in console che hasDriversLicense non è dichiarata(contiene una s rispetto ala variabile dichiarata). Senza la strict mode non lo farebbe
// if (hasDriverLicense)
//   console.log("I can drive at 90 mph in those country lanes! :D");

/*
//Lezione 32: le funzioni
//Le funzioni sono pezzi di codice in grado di esguire operazioni complete.
//Possono avere (o non avere) valori in ingresso (variabili che la funzione utilizza)
//e possono restituire (o non restituire) un valore in uscita, che può essere utilizzato a sua volta
//oppure svolgere delle operazioni (ad esempio stampare)

function logger() {
    console.log("My name is Jonas");
}

//chiamare / eseguire / invocare una funzione
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(5, 3);
console.log(appleOrangeJuice);

console.log(fruitProcessor(3, 1));

//Number è una funzione nativa di Javascript che viene richiamata. Ha un parametro in ingresso e produce un valore in uscita
const num = Number("23");
console.log(num);
*/

/*
//Lezione 34: funzioni anonime ed espressioni funzionali

//Si possono scrivere delle funzioni senza nome il cui valore restituite può essere direttamente assegnato a una variabile
//Si comportano come espressioni

//Le funzioni sono considerate da JS come va<lori e per questo si possono conservare in delle variabili

//Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1998);

//Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
};
const age2 = calcAge2(1998);

console.log(age1, age2);

//Le espressioni funzionali non possono essere richiamate prima di essere dichiarate, le funzioni possono essere richiamate anche se vengono dichiarate solo successivamente all'interno del codice
*/

//Lezione 35: arrow function
//Le arrow function sono delle espressioni funzionali con un sintassi semplificata
//Nel caso in cui non siano dichiarate variabili al uso interno  si può omettere il return

/*
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1998);
console.log(age3);

const yearsUntilRetirment = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirment(1998, "Marco"));
console.log(yearsUntilRetirment(1991, prompt("Il tuo nome")));
*/

//Lezione 38: funzioni che richiamano funzioni

//è comune che delle funzioni vengano richiamate all'interno di altre funzioni, ciò
//permette di perseguire i principi DRY (don't repeat yourself).
//Usare una funzione permette di fare le modifiche solo a essa e far si che si presentino ovunque sia richiamata

function fruitCutter(fruit) {
    return fruit * 4;
}

function fruitProcessor2(apples, oranges) {
    const applePieces = fruitCutter(apples);
    const orangePieces = fruitCutter(oranges);
    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
    return juice;
}
console.log(fruitProcessor2(3, 2))

//Lezione 37: ripasso delle funzioni

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirment = function (birthYear, firstName) {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    if (retirement > 0) {
        return retirement;
    } else {
        return -1; //return esce immediatamente dalla funzione. Ciò che sta dopo il return non viene eseguito
    }
    // return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirment(1960));