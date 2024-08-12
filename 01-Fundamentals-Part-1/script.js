/*
let js = "amazing";
if (js == "amazing") console.log("is very fun!");
console.log(40 + 8);

console.log("Marco");
console.log(23);

let nome = "Marco";
console.log(nome);
console.log(nome);
console.log(nome);

//Variable name convention
let marco_sofiya = "MS";

let Person = "Marco"; //legal but not usual

let PI = 3.1415; //the upper cse indicate a constant

let myFirstJob = "waiter";
let myCurrentJob = "programmer";

//Is better than

let job1 = "Waiter";
let job2 = "Programmer"

console.log(myCurrentJob);

//Javascript types
console.log(true);
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof "Prova");
// console.log(typeof 23);
console.log(typeof javascriptIsFun);

// In Javascript è il valore a determinare il tipo e non la variabile, 
// il cui tipo invece si adatta a quello del valore.
// --Dynamic typing

//Adesso il tipo è cambiato in stringa
javascriptIsFun = 'YES!'
console.log(typeof javascriptIsFun);

let year;
console.log(year); //il valore è undefined
console.log(typeof year); //il tipo è undefined

year = 1991;
console.log(typeof year); //è number

console.log(typeof null); //stamperà bject, ma è un bug di javascript, dovrebbe stampare null, il suo tipo è null;


//è consigliabile dichiaarare il maggior numero di variabili possibili come const
// a meno di non essere certi che varieranno nel corso del programma
//La riassegnazione delle variabile può essere causa di bug

//riassegnazione variabile
let age = 30;
age = 31;

//La riassegnazione di una variabile non è possibile
//per questo motivo non si può dichiarare una varibile senza valore,
//sarebbe insensato
const birthYear = 1991;
//birthYear = 1990; 
//const job;

//var è il vecchio modo di dichiarare le variabili in js
//risale a prima di js6, ormai è desueto
var job = "progrmmer";
job = "developer";

//In questo modo si crea una variabile nel "global object"
//DA NON FARE
lastName = "Magnano";
console.log(lastName);
*/

/*
//Operatori matematici
const now = 2037; //Il valore viene usato più volte nel codice
const ageMarco = now - 1998;
const ageSarah = now - 2002;
console.log(ageMarco, ageSarah);
*/

/*
console.log(ageMarco * 2, ageMarco /10, 2 ** 3);
//2 ** 3 significa 2 elevato alla poteenza di 3

//Concatenazione di stringhe
const nome = "Marco";
const cognome = "Magnano";
console.log(nome + " " + cognome);

//Operatori di assegnazione
let x = 10 + 5; //Assegna la somma di 10 + 5 alla variabile x
x += 10; //Assegna la somma di x + 10 a x; x = x + 10;
x *= 2; //Prodotto
x++; //x+1
x--; //x-1
*/
/*
//Operatori di comparazione
console.log(ageMarco > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1998 > now - 2002);
//Gli operatori hanno una priorità

//Lezione 14: Precedenza operatori
let x, y;
x = y = 25 - 10 -5;
console.log(x,y); //L'assegnazione avviene da destra verso sinistra -> è molto importante poichè se venisse da sinistra verso destra il valore di X, che è undefined, verrebbe assegnato a Y e X rimarrebbe undefined.

//const averageAge = ageJonas + ageSarah / 2;
const averageAge = (ageMarco + ageSarah) / 2; //Le parentesi hanno la maggiore priorità
console.log(ageMarco, ageSarah, averageAge);
*/

/*
//Lezione 17: Stringhe

const nome = "Marco";
const anno = 2024;
const annoNascita = 1998;
const lavoro = "sviluppatore software";

const marco = "Ciao, sono " + nome + ", ho " + (anno - annoNascita) + " e sono un apprendista " + lavoro + "!";
console.log(marco);

//Template string -> Si creano utilizzando i backthick: (`stringa`);

const newMarco = `Ciao, sono ${nome}, ho ${anno - annoNascita} e sono un apprendista ${lavoro}!`;
console.log(newMarco);

//Le template string sono molto comode per inserire testo per la pagina HTML,
// ad esempio permettono di andare agevolmente a capo 

const stringaACapo = "Questa stringa \nva a capo."
console.log(stringaACapo);

const stringaTemplateACapo = `Anche questa stringa
va a capo`
console.log(stringaTemplateACapo);
*/

/*
//Lezione 18 -> Costrutto if - else

//Marco può prendere la patente?
const eta = 15;

if (eta >= 18) {
    console.log("Hai più di 18 anni, puoi prendere la patente");
} else {
    console.log(`Mi dispiace, devi aspettare altri ${18 - eta} anni prima di pter prendere la patente`);
}

const annoNascita = 2002;
let secolo; 
//Variabile glogabile. Se venisse dichiarata all'interno di uno dei due blocchi di codice non sarebbe leggibile dall'esterno del blocco
if (annoNascita <= 2000) {
    secolo = 20;
} else {
    secolo = 21;
}
console.log(`Sei nato nel ${secolo}° secolo`);
*/

//Lezione 20: Type conersion and type coercion

/*
//Type conversion: La conversione manuale richiesta dall'utente
const inputYear = '1991';
//console.log(inputYear + 9); //Stamperà 19919, perchè converte il 9 in stringa. Il + è considerato un concat
console.log(Number(inputYear) + 9) //Number converte la stringa in numero (se possibile) ed esegue la somma
console.log(Number("prova") + 9) //Number non può operare la conversione: verrà restituito il valore NaN (Not a Number) che però è di tipo Number
console.log(typeof NaN);

console.log(String(23) + 7)//Il risultato sarà 237, perchè essendo 23 una stringa (dopo la conversione), il + viene interpretato come un concat

//Type coercion: La conversione operata automaticamente da Javascript
console.log("I'm " + 23 + " years old"); //Il 23 viene convertito n stringa
console.log('23' - '10' - 3); //L'operatore - forza la conversione al tipo number, poichè non ha utilizzi diversi dalla sottrazione, che richiede numeri
//Lo stesso vale per altri operatori matematici

let n = '1' + 1 //Conterrà 11
n = n - 1; //Conterrà 10

//Lezione 21: Truthy and falsy value

//5 Falsy value: 0, "", null, undefined, NaN;
//Thruthy  value sono tutti i numeri diversi da zero e tutte le stringhe non vuote. Anche gli oggetti, anche se vuoti, sono thruthy
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(undefined));

const money = 0;

//Non si usa mai la conversione, ma esistono degi scenari in cui è comodo lasciare a JS
//la "coercizione" del tipo. Ad esempio, se money è uguale a 0 o null o NaN, verrà eseguito il ramo 
//else, invece se è un numero diverso da 0 viene eseguito l'if.
//In breve: se money è un numero valido e diverso da 0, allora esiste, perciò è vero, altrimenti è falso
if (money) {
    console.log("Congratulazioni, il tuo portafoglio sta scoppiando!");
} else {
    console.log("You have no money, get a job: is for your best, thrust me!");

}

let height;
//height = 0;

//Questo blocco di codice riporterebbe un bug, perchè se l'altezza assumesse come valore un numero sarebbe definita, questo è corretto
//ma lo sarebbe anche se assumesse come valore 0, che però è un falsy value, perciò sarebbe eseguito il ramo else
if (height) {
    console.log("La tua altezza è definita")
} else {
    console.log("La tua altezza è indefinita(undefined)");
    
}

*/
//Lezione 22:: equality operator (operatori di uguaglianza) e costrutto if - else if

//usare sempre, di default, a meno di specifiche esigenze l'operatore di uguaglianza stretta (===) e non uguaglianza lasca (==)
const eta = '18';

//Se non è necessario un else si possono ometere le graffe
if (eta === 18) console.log("Sei un adulto! Stretto");

if (eta == 18) console.log("Sei un adulto! Lasco");

//const preferito = prompt("Qual è il tuo numero preferito?");
const preferito = Number(prompt("Qual è il tuo numero preferito?")); //Per far si che funzioni con l'uguaglianza stretta bsogna operare una conversione dell'input
console.log(preferito);
console.log(typeof preferito); //Il tipo è di default stringa

if (preferito == 23) {
    console.log(preferito + " è veramente un bel numero! Lasco");
}

if (preferito === 23) {
    console.log(preferito + " è veramente un bel numero!");
} else if (preferito === 7) {
    console.log(preferito + " è comunque un bel numero!");
} else if (preferito === 9) {
    console.log(preferito + " è un altro bel numero!");
} else {
    console.log("Che brutto numero!");
}

//Anche diverso può essere stretto o lasco
if (preferito !== 23) console.log("Ma perchè non 23?");

//Lezione 23: Logica booleana

//L'operatore NOT ha precedenza sugli altri operatori!

//Lezione 24: Operatori booleani in JavaScript
const hasDriverLicense = true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

const isTired = false;
if (hasDriverLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive');
} else {
    console.log("Someone else should drive...");
}