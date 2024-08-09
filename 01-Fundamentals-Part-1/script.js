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

*/

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


