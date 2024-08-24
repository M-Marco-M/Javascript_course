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

console.log(dichiarata);
console.log(nonDichiarata);
const dichiarata = 'si';

//Perchè l'hoisting?
//L'hoisting era stato implementato all'origine di JS per poter accedere alle funzioni prima della loro dichiarazione,
//ciò avrebbe consentito l'uso di una tecnica di programmazione chiamta "mutual recursion".
//Per fare ciò era però necessario che anche le variabili subissero la stessa procedura, ma anzichè far assegnare un errore
//si scelse di assegnare undefined, che però si è poi notato essere problematico nell'individuazione degli errori.
//Per questo vennero poi introdotti const e let, ma var è stato mantenuto poichè le release di JS non modificano mai le funzioni esistenti
