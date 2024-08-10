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
//Operatori matematici
const now = 2037; //Il valore viene usato più volte nel codice
const ageMarco = now - 1998;
const ageSarah = now - 2002;
console.log(ageMarco, ageSarah);

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