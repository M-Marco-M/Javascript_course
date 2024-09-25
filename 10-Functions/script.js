'use strict';
/*
//Lezione 129: Parametri di default
const bookings = [];
//In JS 6 si può assegnare direttamente nella firma
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 / numPassengers
) {
  //Per assegnare un valore standard in JS5
  //numPassengers = numPassengers || 1;

  //Creo l'oggetto
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('B229', 10, 78);
createBooking('A127');
//Se passiamo un solo valore il resto è undefined

//Adesso per far si che un prametro assuma il valore di default, assegnando però il successivo,
//bisognerebbe passare undefined
createBooking('A228', undefined, 37);

//Lezione 130: Passaggio argomenti per valore o per riferimento
const flight = 'LH234';
const marco = {
  nome: 'marco',
  passport: 238976,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LT734';
  passenger.nome = 'Mr.' + passenger.nome;
  if (passenger.passport === 238976) {
    alert('Check-in avvenuto con successo');
  } else {
    alert('Passporto non corrispondente!');
  }
};
checkIn(flight, marco);

//La funzione modifica il nome nell'oggetto, poichè degli oggetti viene passato il
//riferimento, mentre dei tipi primitivi il valore
console.log(flight, marco);

//Perchè è come fare
//Assegno valore
const flightNum = flight;
//Assegno riferimento: passenger contiene solo il riferimento a marco,
//in pratica punta allo stesso oggetto in memoria a cui punta marco
const passeggero = marco;

//è importante ricordare questa caratteristica nei codici molto estesi
//per esempio:
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

//Sto modificando l'oggetto marco
newPassport(marco);

console.log(marco);
//Adesso la funzione checkIn dirà che il passaporto è sbagliato
checkIn(flight, marco);
console.log(marco);
*/
//Lezione 131: First-class e funzioni di ordine superiore
//Le funzioni in JS sono first-class function, sono cioè dei particolari oggetti
//non dissimili da array, oggetti o mappe.
//Questo consente di passare le funzioni come un valore anche all'interno di altre funzioni
//Come avviene ad esempio nell'eventListener

//Le funzioni che hanno funzioni come parametro o restituiscono funzioni
//si chiamano funzioni di ordine superiore (higher-order function)

//Le first-class function sono una caratteristica del linguaggio,come quella di essere a oggetti o tipizzato

//Lezione 132: Funzioni che accettano funzioni di callback

/*
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...rest] = str.split(' ');
  return [first.toUpperCase(), ...rest].join(' ');
};
//La funzione transformer prende in ingresso una stringa e una funzione che eseguirà una trasformazione sulla stringa
const transformer = function (string, fn) {
  console.log('Original string = ' + string);
  console.log('Transformed string = ' + fn(string)); //Richiamo la funzione proprio qui
  console.log('Transformed by = ' + fn);
};

const stringaProva = 'Javascript is the best!';
//La funzione non va richiamata!
transformer(stringaProva, upperFirstWord);

transformer(stringaProva, oneWord);

//La funzione ad argomento è detta callback function

const high5 = function () {
  console.log('🖐🏼');
};
//Stampa quando clicco
document.body.addEventListener('click', high5);

//Le funzioni hanno proprietà e metodi (essendo oggetti)
//Ad esempio il metodo forEach

//Il metodo forEach reitera la funzione passata per ogni elemento di un array
['Marco', 'Sofiya', 'Andrea', 'Alessio'].forEach(high5);

//Le funzioni di ordine superiore son una forma di astrazione
//Consentono di spacchettare la logica di alcuni funzioni e utilizzarle in maniera modulare

//Lezione 133: Funzioni che restituiscono funzioni
const greet = function (greeting) {
  return function (nome) {
    console.log(`${greeting} ${nome}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Marco');

greet('Hello')('Marco');

//Trasformare le funzioni in arrowFunction
const greetArrow = greeting => {
  return nome => {
    console.log(`${greeting} ${nome}`);
  };
};

//Avendo un solo parametro si può scrivere così
const greetArrowS = greeting => nome => console.log(`${greeting} ${nome}`);

greetArrow('prova')('marco');

//Lezione 134: metodi call e apply
const lufthansa = {
  airnline: 'lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, nome) {
    console.log(
      `${nome} booked a seat on flight ${this.iataCode}${flightNum} offered by ${this.airnline}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, nome });
  },
};

lufthansa.book(337, 'Marco');

console.log(lufthansa);

const eurowings = {
  airnline: 'eurowings',
  iataCode: 'EW',
  bookings: [],
};

//Se provassi a assegnare il metodo book di lufthansa a una variabile per usarlo
//come una funzione le keyword this del metodo punterebbero a undefined
const book = lufthansa.book;

// book(242, 'Luca');

//Se vogliamo usare il metodo book fuori da lufthansa, magari su eurowings
//dobbiamo usare il metodo delle funzioni "call"
//Quest'operazione si chiama binding
lufthansa.book.call(eurowings, 242, 'Luca');

console.log(eurowings.bookings);

//Il metodo call (che vuole come primo parametro l'oggetto su cui deve essere chiamata)
//serve a specificare lo scope a cui la funzione deve fare riferimento

//Il metodo apply permette di passare a una funzione un array

const flightData = [571, 'Alfredo'];
book.apply(eurowings, flightData);

//Non è più molto in uso, si può usare lo spread operator
book.call(eurowings, ...flightData);

//Lezione 135: metodo bind
const bookEw = book.bind(eurowings);

bookEw(672, 'Pietro');

//Con bind posso assegnare dei parametri predefiniti a una funzione, il primo
//è l'oggetto che deve richiamarla. Assegnando a una variabile conservo
//una funzione che verrà richiamata sempre da eurowings

//In questo caso il primo parametro sarà sempre 661
const bookEw661 = book.bind(eurowings, 661);

bookEw661('Andrea');
bookEw661('Lucia');

//Con eventListener
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

//Nell'eventListener il this fa sempre riferimento all'elemento del DOM che richiama la funzione

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);

//In questo cas "this" è il button, che non ha una proprietà planes, quindi non può eseguire alcuna somma
//Per far si che this punti all'oggetto lufthansa:
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//---------N.B.Il binding è una forma di ereditarietà?-------------//
//Creo una nuova funzione che eredità quasi tutto da quella vecchio,
//ma ha specificati uno o più parametri

//Applicazioni
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

//Ammettendo di voler calcolare una specifica tassa, con un valore di rate fisso
const addIva = addTax.bind(null, 0.23); //Il primo parametro deve essere sempre l'oggetto su cui la funzione si deve applicare
//Se vogliamo che la funzione sia globale possiamo inserire null
console.log(addIva(200));

//Riscrivere queste due funzioni ma utilizzando una funzione che restituisce una funzione
const addTax2 = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addIva2 = addTax2(0.23);
console.log(addIva2(100));

//Lezione 137: Immediatly Invoked Function Expression (Funzioni anonime)(IIFE)
//Le funzioni IIFE sono funzioni senza nome dichiarate tra parentesi tonde
//in questo modo il blocco verrà immediatamente eseguito

const runOnce = function () {
  console.log('This function run once');
};

//Questa funzione può i realtà essere eseguita più volte
runOnce();
runOnce();

//Per ottenere il risultato che vogliamo:
(function () {
  console.log('This function REALLY run once');
  const privateConst = 23;
});

//Questa struttura è stata inizialmente utilizzata come forma di incapsulamento
//poichè le funzioni creano un loro prorpio scope, a cui non si può accedere dall'esterno
//quindi garantisce una forma di privacy e sicurezza

// console.log(privateConst); //Non lo trova, is not defined

//Con l'introduzione di const e let però non c'è più bisogno di questa struttura
//perchè anche let e const creano il loro scope, non accessibile dall'esterno
//a differenza di var che fa sempre riferimento allo scope globale

{
  const privateConstInObject = 72;
  var nonPrivateVarInObject = 33;
}

// console.log(privateConstInObject); //is not defined
console.log(nonPrivateVarInObject);

//Le IIFE sono ancora utili nel caso in cui si volesse dichiarare una funzione
//da usare al volo e non ripetibile

//Lezione 138: Closure
//La closure è una caratteristica di JavaScript, una modalità di funzionamento
//che può essere sfruttata.

//Le funzioni hanno un accesso permanente al variable environment in cui vengono create

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(passengerCount);
  };
};

//Non stampa niente perchè la funzione anonima non viene richiamata,
//viene solamente restituita, infatti stampando l'output di secureBooking()
//viene stampata la funzione anonima
secureBooking();
secureBooking();
secureBooking();

console.log(secureBooking()); // *1 Stesso risultato

//Assegnando l'output di secureBooking() a booker gli sto in realtà assegnando
//il valore di ritorno CHE è ESATTAMENTE LA FUNZIONE ANONIMA ALL'INTERNO
const booker = secureBooking();
booker();
booker();
console.log(booker); // *2 Stesso risultato
//Assegnare booker comporta l'esecuzione della funzione anonima in quest'ordine
//-1) Viene eseguita la funzione secureBooking
//-2) Viene creato il suo variable environment
//-3) Viene creata la funzione anonima, che ha accesso al variable environment
//-4) Viene restiuita la funzione anonima e la funzione secureBooking non è più in esecuzione

//Al momento dell'esecuzione di booker la funzione continu ad accedere al variable environment
//esistente al momento della sua creazione (e assegnazione a booker)

//Quindi alla fine sarà eseguita la funzione anonima, senza mai più passare dalla funzione
//secure booking

//A closure is created when a function retains access to its outer function's variables, even after that outer function has finished executing.
//This allows the inner function to remember the state of those variables.

//La funzione è in grado di tenere il conto perchè farà riferimento a un altro
//variable environment, creato alla prima esecuzione di secureBooking, in passengerCount non viene più inizializzata

//console.dir() stampa l'oggetto funzione
console.dir(booker);

//N.B. La closure ha priorità sullo scope
*/
//Lezione 139: approfondimento sulle closure

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

console.log(f);
g(); //g crea la funzione e la assegna a f
console.log(f); //Adesso f contiene la funzione

f(); //Il variable environment di f contiene a = 23, come al momento della sua creazione

console.dir(f);
const h = function () {
  const b = 50;
  f = function () {
    console.log(b * 2);
  };
};

////Assegna ad f una nuova funzione
h();
f();
console.dir(f);

//Altro esempio
const boardPassenger = function (n, wait) {
  const perGroup = n / 3;

  //Set time out esegue la funzione passata come primo parametro
  //dopo un ritardo passato in millisecondi nel secondo parametro
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);

    console.log(`There are three groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`We start boarding in ${wait} seconds`);
};

//Pur dichiarando la variabile globale perGroup
//e pur essendo boardPassenger eseguita nel blocco principale
//la funzione in setTimeout farà sempre riferimento a perGroup presente
//nel suo variable environment quando è stata creata
const perGroup = 900;
boardPassenger(180, 5);
//La closure ha la precedenza sullo scope
