'use strict';
//Lezione 89: Panoramica di javascript
/*
Javascript è un linguaggio:
- Di alto livello = non ci permette di gestire direttamente le risorse del PC come la memoria o i processi.
  è lui a occuparsene.
- Garbage collected = possiede dei processi automatici che gestiscono la memoria occupata da 
  variaabii inutilizzate.
- Interpretato (o compilato sul momento) = viene tradotto in linguaggio macchina (0-1)
  durante la sua esecuzione, riga per riga. Questo comporta maggiori rischi di bug e una minore velocità di esecuzione
  ma permette di evitare l'installazione.
- Multiparaigma = consente di utilizzarre i principali algoritmi della programmazione:
  -- Procedurale(Il codice viene eseguito nella sequenza in cui è scritto)
  -- Funzionale(Il codice è diviso in blocchi che possono essere eseguiti in qualsiasi momento "richiamandoli")
  -- A oggetti(Il codice è diviso in oggetti che racchiudono insieme valori (proprietà) e funzioni(metodi))
- Programmazioni a oggetti basata sui prototipi = il prototipo è uno schema sulla cui base vengono riprodotti gli oggetti
- Funzioni di "prima classe" (o forse "primo ordine") = Le funzioni vengono trattate come dei valori, tanto che possono 
  essere assegnati, passati come parametri, restituite da un'altra funzione
- Dinamico (tipi) = le variabili non sono tipizzate, ma il tipo viene assegnato dal motore di JS
  a seconda del valore assegnato. Pertanto le varibili possono cambiare tipo in maniera automatica.
  TypeScript è una versione di JavaScript che inve utilizza le variabili tipizzate
- Mono-processo(single-thread) = Viene eseguita un'istruzione alla volta, non ci sono processi parlleli-
 - "Non-bloccante" = Nonostante sia mono-processo è in grado di mettere dei processi lunghi in back-ground
  */

//Lezione 90: Il motore di JS e la run-time
/*
- Per le moderne applicazioni di JS, ad esempio web-app molto complesse come Google Maps,
  l'interpretazione sarebbe troppo lenta e macchinosa, quindi i moderni motori di JS utilizzano
  un modello differente cioè quello della compilazone sul momento.
  -- L'interpretazione comporta una traduzione riga per riga sul momento
  -- La compilazione sul momento invece comporta la compilazione dell'intero codice sul momento
    dell'avvio dell'applicazione.
- A occuparsi della traduzione è il motore (ogni browser possiede il suo). Il processo vviene in due parti
  -- Il parsing AST (una scomposizione in uno schema ad albero del codice (a più basso livello del codice iniziale))
  -- La traduzione in linguaggio macchina
  La prima traduzione in linguaggio macchina non è del tutto precisa e ottimizzata, per questo il codice viene ricompilato
  più volte durante l'esecuzione. Ma ciò consente di avere un programma subito pronto all'esecuzione, 
  che solo successivamente viene ottimizzato.

- La runtime di JS è una "scatola" che contiene tutto il necessario all'esecuzione dell'applicazione
  -- Web-API(che sono messe a disposizione dal Browser, ma JS si prepara ad interagirci, ad esempio il DOM).
  -- La callback queue, cioè un sorta di ciclo che controlla l'avvenimento degli eventi, 
     è poi questo "ciclo" che da modo a Javscript di mandare in esecuzione gli EventListener.
     Node.js non ha le WebAPI, al suo posto ha un pachetto di programmi in C
*/

//Lezione 91: contesto di esecuzione e "call stack"
/*
- Contesto di esecuzione:
  -- Cosa è: è l'insieme del codice e di tutti gli "strumenti" che
     servono alla sua esecuzione, impacchettati in una "scatola".
     Per ogni funzione viene definito un "execution-context".
     --- Global execution context: il primo EC a essere creato è quello globale, viene creato 
         al momento della compilazione e include tutto ciò che non è racchiuso in una funzione.
     --- Viene eseguito un solo GEC per programma e poi uno per ogni funzione.
  -- Cosa contiene: 
    --- le variabili(specifiche di quell'EC, include le funzioni e gli arguments object[gli oggetti ad argomento della funzione, cioè quelli passati in ingresso])
    --- la scope chain(i riferimenti alle variabili esterne che vengono richiamate all'interno della funzione)
    --- la keyword this, che normalmente fa riferimento allo stesso EC
    --- nelle arrow function gli arguments object e this fnno riferimento all'EC subito superiore
- Call stack(--> "pila di chiamata"):
  -- Cosa è: è una "pila" su cui vengo impilati gli EC nell'ordine di esecuione, cioè l'ordine in cui 
     vengono richiamati.
  -- Come funziona:
     --- NOTA: nelle pile l'ultimo elemento inserito deve essere il primo a essere tolto(pila di piatti da lavare) 
     --- il motore esegue gli EC nell'ordine (opposto a quello) in cui sono impilati.
     --- il primo EC a essere messo nella call stack è la GEC
     --- la call stack va in esecuzione
     --- quando il motore incontra una funzione richiamata mette subito sopra il suo EC
     --- la call stack va in esecuzione
     --- se il motore incontra una funzione dentro questo EC viene messa in cima alla call stack
     --- la call stack va in esecuzione
     --- quando viene terminata la funzione il suo EC viene rimosso dalla call stack
     --- la call stack va in esecuzione, in cima troverà la funzione che aveva richiamato quella appena eseguita
 */

//Lezione 92: scope e scope chain
/*
- Scoping = come le variabili sono organizzate all'interno del codice e secondo
  quali criteri JS accede alle variabili
- Lexical scoping = in javascript lo scoping dipende dal posizionamento delle variabili nel codice, 
  dove le variabili sono scritte (in quale funzione o blocco)
- Scope = è lo spazio in cui una variabile o una funzione viene dichiarata.
  ci sono tre tipi di scope: 
  -- Scope globale = le variabili dichiarate in questo spazio sono accessibili da qualsiasi punto del codice
  -- Scope di funzione = detto anche global scope, le variabili dichiarate in questo scope sono accessibili solo all'interno della funzione
  -- Scope di blocco = le variabili dichiarate in questo scope sono accessibili solo dall'interno del blocco, a parte le variabili var
  che appartengono allo scope del blocco o della funzione genitore. Lo scope di blocco è stato introdotto con ES6, per questo var non lo considera .
  Le funzioni appartengono agli scope di blocco solo in strict mode

  - Scope chain = la catena di scope che da accesso alle variabili degli ambienti superiori.
  Lo scope di una funzione o di un blocco è composto dalle sue varibili e funzioni e dall'intero scope della funzione genitore.
  Quindi la scope chain può essere risalita lungo un solo ramo partendo da un'estremità, fino ad arrivare al global scope.
  Per questo motivo il global scope è accessibile ovunque.
  La scope chain può essere percorsa solo salendo verso lo scope genitore, non il contrario, quind la funzione madre non ha accesso agli scope delle figlie
  ma solo viceversa.
  IMPORTANTE: La scope chain è determinata dal luogo del codice in cui la funzione è DICHIARATA, non richiamata.
 */

//Lezione 93: lo scoping in azione
//Il motore di JS cerca sempre una variabile nello scope più vicino, se non la trova risale la scope chain
//Se una variabile globale e una locale hanno lo stesso nome lui darà precedenza a quella locale, poichè più vicina nella scope chain
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reasssigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();
*/

//Lezione 94: Variable environment, hoisting, TDZ
//- Quando il programma va in esecuzione le variabili di tutto il codice vengono lette e messe nel variable environment
//- L'hoisting è la possibilità di accedere a delle variabili prima vengano dichiarate nel codice
//- La gestione dell'hoisting varia a seconda del tipo della variabile o funzione
//  -- Funzioni dichiarate: sono hoisted, quindi accessibili anche prima della loro dichiarazione
//  -- Variabili var: sono hoisted, quindi accessibili anche prima della loro dichiarazione, MA restituiscono undefined
//  -- Variabili let e const: non sono hoisted, quindi non sono accessibili prima della loro dichiarazione, restituiscono un errore
//     il motore "sa" della loro esistenza, poichè vengono inserite nella Temporal Dead Zone, per questo viene restituito l'errore
//  -- Espressioni funzionali: si comportano esattamente come le variabili del tipo di cui sono dichiarate:
//     se dichiarate var o const non saranno accessibili prima della loro dichiarazione, se dichiarate var
//     saranno undefined

//TDZ: Temporal Dead Zone, è uno spazio a cui vengono assegnate le variabili non ancora dichiarate nel codice
//N.B. Le variabili non ancora dichiarate e quelle inesistenti restituiscono errori diversi

// console.log(dichiarata);
// console.log(nonDichiarata);
// const dichiarata = 'si';

//Perchè l'hoisting?
//L'hoisting era stato implementato all'origine di JS per poter accedere alle funzioni prima della loro dichiarazione,
//ciò avrebbe consentito l'uso di una tecnica di programmazione chiamta "mutual recursion".
//Per fare ciò era però necessario che anche le variabili subissero la stessa procedura, ma anzichè far assegnare un errore
//si scelse di assegnare undefined, che però si è poi notato essere problematico nell'individuazione degli errori.
//Per questo vennero poi introdotti const e let, ma var è stato mantenuto poichè le release di JS non modificano mai le funzioni esistenti

//Lezione 95: Approfondimentto di hoisting e TDZ

/*
//- Variabili

//Questo è undefined
console.log(me);
//Questi due daranno errore
// console.log(job);
// console.log(year);

var me = 'Marco';
let job = 'sviluppatore';
const year = 1998;

//- Funzioni

//Dichiarazione di funzione

console.log(addDecl(2, 3)); //Restituisce l'output della funzione
// console.log(addExpr(2, 3)); //Restituisce un errore:
//essendo ssegnata a una variabile var, al momento in cui viene richiamata addExpr vale undefined
//(le variabilli var, se vengono richiamate prima della dichiarazione sono undefined)
// console.log(addExpr);
//quindi l'errore dirà che addExpr non è una funzione, poichè undefined non è una funzione
// console.log(addArr(2, 3)); //Restituisce un errore, le variabili const e let
//non possono essere richiamete prima della loro dichiarazione

function addDecl(a, b) {
  return a + b;
}

var addExpr = function (a, b) {
  return a + b;
};

const addArr = (a, b) => a + b;

//Possibili bug gravi dovuti all'uso di var e a cattive abitudini di scrittura del
//codice, al posto dei più moderni let e const

//Ammettendo di creare un blocco che elimina il carrello quando ci sono 0 elementi
//0 è un falsy value, quindi diverso da 0 è uguale a true, se posto dentro il controllo di un if
//quindi il clocco va in esecuzione quando numProducts è uguale a zero

//Ricorda: il blocco if va in esecuzione quando il lvalore fra le tonde è true

//Abbiamo dichiarato alla riga 222 che numProducts vale 10, ma richiamandolo alla riga 218
//il suo valore è undefined, che è un falsy value, quindi il blocco if andrà in esecuzione cancellando il carrello
console.log(numProducts);

if (!numProducts) {
  deleteShoppingCart();
}

var numProducts = 10;
//Supponendo che questa funzione rimuova tutti gli articoli dal carrello
function deleteShoppingCart() {
  return 'All product DELETED FOREVER!';
}

//Per prevenire questa situazione si possono prndere vari accorgimenti:
//-- Dichiare funzioni e variabili all'inizio del blocco, in questo caso dell'intero programma
//-- Utilizzare espressioni funzionali al posto delle dichiarazioni di funzioni
//-- Non utilizzare variabili var

//Piccola nota personale: utilizzare una funzione che ritorna un valore permette di utilizzarla come una variabile
//che può essere richiamata prima della sua dichiarazione
let b = a() + 2;
console.log(b);

function a() {
  return 3;
}

var x = 1;
let y = 2;
const z = 3;
//Window è l'oggetto che rappresenta l'inter finsestra su cui è eseguito JS
console.log(window);

//Le variaabili di tipo var (come le funzioni), sono inserite all'interno dell'oggetto window,
//a differenza delle variabili let e const

console.log(x === window.x); //Esiste un oggetto in window chiamato x, infatti restituisce true
console.log(y === window.y); //Non esiste un oggetto in window chiamato y, infatti restituisce false
console.log(z === window.z); //Non esiste un oggetto in window chiamato y, infatti restituisce false

//Questo può costituire un problema in alcuni casi, chissà se può essre anche usato in maniera vantagiosa
*/

//Lezione 96: this keyword
/*
//this si comporta in maniera diversa a seconda di come la funzione viene richiamata

//- Se la funzione è un metodo this fa riferimento all'oggetto che richiama il metodo
//- Se la funzione è dichiarata this ha come valore undefined (N.B. SOLO IN STRICT MODE)
//- Se la funzione è una arrow function this fa riferimento all'oggetto che contiene l'oggetto in cui this è usato
//- Se la funzione è dichiarata in un EventListener this fa riferimento all'oggetto del DOM su cui levent listener è attaccato

//Lezione 97: approfondimento della keyword this

//Lezione 98: approfondimento arrow function

var provaNome = 'Andrea';

const marco = {
  nome: 'marco',
  anno: 1998,

  calcAge: function () {
    console.log(this); //Stampa l'oggetto
    console.log(2037 - this.anno);

    // const isMillenial = function () {
    //   console.log(this);
    //   console.log(this.anno >= 1981 && this.anno <= 1996);
    // };
    // isMillenial(); //Anno è undefined, poichè this è undefined. Il this delle funzioni dichiarate è sempre undefined
    //Per ovviare a questo problema ci sono due metodi:

    //Assegno a that il valore di this, che trovandosi dentro un metdo è l'oggetto stesso che lo contiene
    // const isMillenial = function () {
    // const that = this; //O self.
    //   console.log(this);
    //   console.log(this.anno >= 1981 && this.anno <= 1996);
    // };
    //isMillenial();

    //Uso una arrow function, la cui keyword this ha lo stesso valore dell'oggetto che la contiene, in questo caso il metodo calcAge, il cui this fa riferimento all'oggetto
    const isMillenial = () => {
      console.log(this);
      console.log(this.anno >= 1981 && this.anno <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log('My name is ' + this.nome);
  },

  provaThis: () => {
    console.log(this);
    console.log('My name is ' + this.provaNome);
  },
};
marco.calcAge();
// marco.greet(); //Stampa undefined, poichè this.nome è quello del global object, che non contiene nessuna variabile chiamata così
// marco.provaThis(); //Stampa "Andrea", il valore della variabile var, poichè viene inserita nel global object, cosa che non accdrebbe con let

//Per questo motivo è sempre sconsigliato usare le arrow function come metodi

//Ma le arrow function sono utili da usare nelle funzioni contenuti nei metodi

//arguments keyword
//Arguments restituisce un array degli argomenti della funzione
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(3, 7, 9, 11);

//Le arrow function non hanno valori per arguments
*/
//Lezione 99: tipi primitivi e tipi refernce (oggetti)
//I tipi primitivi sono conservati direttamente nel'execution contest, i tipi refernce sono
//sono conservati nell'heap
//L'EC è uno spazio limitato e ben organizzato che permette di eseguire il softare velocemente
//l'heap è uno spazio potenzialmente illimitato (e meno organizzato?) che permette di conservare informazioni pesanti

let age = 30;
let oldAge = age;
age = 31;

console.log('Age ' + age);
console.log('Old age ' + oldAge);

//Il comportamento è quello che ci aspettiamo alle righe 346 e 347 age vale 31 e oldAge 30
//Quello che succede dietro le quinte è che viene creata una variabile che punta a una cella di memoria,
//punta, più precisamente all'indirizzo della cella. Nella cella viene inserito il valore 30
//anche oldAge punterà alla stessa cella di age, cioè la cella che contiene il valore 30
//Quando viene assegnato un nuovo valore alla variabile age, questa punterà a una nuova cella, che conterrà il valore 31,
//mentre la variabile oldAge continuerà a puntare sempre alla stessa cella.

const me = {
  nome: 'Marco',
  eta: 26,
};

const amico = me;
amico.eta = 24;

//Ci aspetteremmo che solo amico abbia la proprietà eta = a 24
console.log(me);
console.log(amico);
//Invece entrambi gli oggetti hanno eta = 24

//Questo succede perchè gli oggeti vengono conservati nell'heap, quindi le variabili
//(conservate nell'EC), non puntano direttamente a un cella di memoria, ma puntano a una cella
//di memoria che contiene l'indirizzo dell'heap in cui è conservato l'oggetto.

//Le due variabili puntano alla stessa cella di memoria, che come valore ha l'indirizzo dell'heap
//a cui è conservato il nostro oggetto. Quando viene modificato un oggetto, l'indirizzo dell'oggetto sull'heap rimane lo stesso
//e non ne viene creato uno nuovo.
//Venendo modificato l'oggetto sull'heap, e puntando entrambi le variabili a quello stesso oggetto, entrambe subiranno la modifica
//DI FATTO LE VARIABILI CONTENGONO LO STESSO IDENTICO OGGETTO E SONO UNA COPIA PERMANENTE L'UNA DELL'ALTRA
