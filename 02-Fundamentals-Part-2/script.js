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

/*
//Lezione 36: funzioni che richiamano funzioni

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
*/
/*
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
*/
/*
//Lezione 39: gli array
//Gli array sono strutture di dati in grado di ospitare dati in maniera ordinata.
//Ogni elemento di un array è individuato dalla sua posizione

const friend1 = "Marco";
const friend2 = "Francesco";
const friend3 = "Alessio";

//Notazione con parentesi
const friends = ["Marco", "Francesco", "Alessio"];
console.log(friends);

//Notazione letterale
const y = new Array(1998, 1998, 2000);

//Gli array sono elementi zero-based: il primo elemento si trova in posizione 0
console.log(friends[0]);
console.log(friends[2]);

//La lunghezza indica il numero di elementi nell'array contando da 1
console.log(friends.lenght);
console.log(friends[friends.length - 1]);

//Abbiamo dichiarato l'array come const, ma possiamo modificarne comunqu il contenuto
//Solo i tipi primitivi, se dichiarati const, sono immutabili.
//Nel caso dell'array const non possiamo sostituire l'intero array in blocco (IN PRATICA RIASSEGNARLO), ma possiamo modificarlo
friends[2] = "Simone";
console.log(friends);
//friends = ["Bob", "Alice"]; N.B = Infatti con la notazione letterale indichiamo proprio
//la costruzione di un "new Array", ciò non è possibile per una costante

const nome = "Marco";
//Gli array posso contenere dati di tipo diverso, e ogni elemento può essere costituito da un'espressione, quindi può anche richiamare una funzione
const marco = [nome, "Magnano", 2037 - 1998, "sviluppatore", friends]; //Gli array possono contenere altri array
console.log(marco);
console.log(marco.length);

//Exercise

const years = [1990, 1967, 2002, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]); //L'argomento di una funzione può essere qualsiasi espressione, poichè un'espressione restituisce sempre un solo valore;
console.log(age1, age2, age3);

//Qui abbiamo inserito un array che contiene delle espressioni costituite dal richiamo di ua funzione e anche altre operazioni
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
//è buona prassi (nonchè comodo e spesso findamentale) conservare i risultati dell'elaborazione di un array
//in un altro array
console.log(ages);
*/
//Lezione 40: Operazioni con gli array

/*
//Aggiunta elementi
const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push("Jay"); //push aggiunge un elemento in fondo all'array e restituisce la nuova lunghezza
console.log(friends, newLength);

friends.unshift("John") //unshift aggiunge un elemento all'inizio dell'array e restituisce la nuova lunghezza

//Rimozione elementi
const popped = friends.pop(); //pop rimuove l'ultimo elmento e lo restituisce
console.log(friends);

friends.shift(); //rimuove il primo elemento e lo restituisce

//Ricerca elementi
console.log(friends.indexOf("Steven")); //indexOf restituisce la posizione dell'elemento indicato a parametro
console.log(friends.indexOf("Bob")); //se l'elemento non è presento restituisce -1

console.log(friends.includes("Steven")); //True
console.log(friends.includes("Bob")); //False

friends.push("23");
friends.includes(23); //false: includes usa l'uguaglianza stretta
*/
//Lezione 42: Introduzione agli oggetti
/*
//Qui sott un array scritto in maniera più leggibile
const marcoArray = [
    "Marco",
    "Magnano",
    2037 - 1998,
    "programmatore",
    ["Michael", "Andrea", "Alessio"]
];

//Qui sotto un oggetto
const marco = {
    nome: "Marco",
    cognome: "Magnano",
    eta: 2037 - 1998,
    lavoro: "programmatore",
    friends: ["Michael", "Andrea", "Alessio"]
};
console.log(marco);
//La principale differenza tra gli array e gli oggetti è che i valori negli array sono identificati tramite la loro posizione, negli oggetti sono assegnati a una chiave(proprietà)
*/
/*
//Lezione 43: due notazioni per interagire con gli oggetti

//dot notation
console.log(marco.cognome);
//bracket notation
console.log(marco["cognome"]);
//La dot nootation è più leggibile e pulita, ma ammette solo nomi delle proprietà
//tra le parentesi quadre della bracket notation può essere inserito invece qualsiasi espressione
//e ciò rappresenta un grande vantaggio in alcuni casi

const nameKey = "nome";
console.log(marco[nameKey]);
console.log(marco["cog" + nameKey]);

//console.log(marco."cog" + nameKey); non è ammessa

const interestedIn = "";//prompt("What do you want to know about Marco? Choose between nome, cognome, eta, lavoro, amici");
//console.log(marco[interestedIn]);

//Chiedere una proprietà non definita nell'oggetto risulta in un valore "undefined"
//console.log(marco[squadraPreferita]);

//unedefined è un valore falsy, quindi si può costruire questo if - else
if (marco[interestedIn]) {
    console.log(marco[interestedIn]);
} else {
    console.log("Wrong request! Choose between nome, cognome, eta, lavoro, amici")
}

//Per aggiungere un campo all'oggetto possono essere usate entrambe le notazioni
marco.residenza = "Italia";
marco["email"] = "marco.magnano@posta.it";
console.log(marco);

//Challenge
const aboutMarcoFriends = `${marco.nome} ha ${marco.friends.length} amici e il suo migliore amico si chiama ${marco.friends[0]}`;
console.log(aboutMarcoFriends);
*/

/*
//Lezione 44: metodi degli oggetti
//I metodi sono delle proprietà dell'oggetto che contengo come valore una funzione. -> espressione funzionale
const marco3 = {
    nome: "Marco",
    cognome: "Magnano",
    birthYear: 1998,
    lavoro: "programmatore",
    friends: ["Michael", "Andrea", "Alessio"],
    hasDriversLicense: true,

    //Qui richiediammo un parametro in ingresso, ciò significa che deve essere inserito manualmente
    //ma è un'informazione già contenuta dall'oggetto che contiene il metodo
    // calcAge1: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     console.log(this); //this fa riferimento all'oggetto
    //     return 2037 - this.birthYear; //this è l'intero oggetto, con il punto possiamo accedere a tutte le sue proprietà
    // },

    //Questa funzione però richiama specificamente marco2, e non this. Se cambiassimo il nome all'oggetto non lo troverebbe più
    //inve con this risolviamo questo problema
    // calcAge2: function () {
    //     console.log(marco2); //this fa riferimento all'oggetto
    //     return 2037 - marco2.birthYear; //this è l'intero oggetto, con il punto possiamo accedere a tutte le sue proprietà
    // }

    //Possiamo usare la funzione per settare una (nuova) proprietà dell'oggetto, in modo che la funzione venga eseguit una sola olta ma il valore sia sempre accessibile
    calcAge: function () {
        this.eta = 2037 - this.birthYear; //this è l'intero oggetto, con il punto possiamo accedere a tutte le sue proprietà
        return this.eta;
    },

    describe: function () {
        return `${this.nome} ${this.cognome} è un ${this.lavoro} di ${this.eta} e ${this.hasDriversLicense ? "" : "non "}possiede la patente. I suoi amici più stretti sono ${this.friends}`;
    }
};

// console.log(marco2.calcAge1(1998));

console.log(marco3.calcAge());
//Funziona anche così
console.log("-----------------")
// console.log(marco3.calcAge2());

console.log(marco3.eta);

//Challenge: scrivi une metodo che faccia una breve descrizione della persona in oggetto
console.log(marco3.describe());
*/

/*
//Lezione 46: Introduzione ai cicli
//Ciclo for

//I cicli servono a ripetere un vlocco di codice fino a quando una condzione è soddisfatta
// console.log("Ripetizione di panca piana 1");
// console.log("Ripetizione di panca piana 2");
// console.log("Ripetizione di panca piana 3");
// console.log("Ripetizione di panca piana 4");

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Ripetizione di panca piana ${rep}`);
}
*/

//Lezione 47: cicli for per interagire con gli array

//Gli array sono costituiti da una serie di elementi numerati e ordinati, quindi è possibili scorrerli con un ciclo for che punta a una nuova "cella" dell'array per ogni giro
const marcoArray = [
    "Marco",
    "Magnano",
    2037 - 1998,
    "programmatore",
    ["Michael", "Andrea", "Alessio"]
];

for (let i = 0; i < marcoArray.length; i++) {
    console.log(marcoArray[i], typeof marcoArray[i]);
}

const typeArray = [];
//Riempie l'array con i tipi di marcoArray, scorrendo e assegnando una posizione alla volta
for (let i = 0; i < marcoArray.length; i++) {
    //Assegnazione tramite indice
    // typeArray[i] = typeof marcoArray[i];
    //Assegnazione tramite metodo: più pulita
    typeArray.push(typeof marcoArray[i]);
}

console.log(typeArray);

const years = [1990, 1967, 2002, 2018];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

//break and continue
//Continue

//Se il tipo di quell'elemento di marcoArray è diverso da "string" allora salta tutto il codice che segue "continue" e vai all'inizio del ciclo
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < marcoArray.length; i++) {
    if (typeof marcoArray[i] !== "string") continue;
    console.log(marcoArray[i], typeof marcoArray[i]);
}

//Break
//Se il tipo di quell'elemento di marcoArray è uguale a "number" allora interrompi totalmente il ciclo, non viene più eseguito nessun giro
console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < marcoArray.length; i++) {
    if (typeof marcoArray[i] === "number") break;
    console.log(marcoArray[i], typeof marcoArray[i]);
}

//Lezione 48: Cicli inversi e cicli annidati

//Cicli al contrario. Parte dall'ultima posizione di un array e si sposta verso la prima
for (let i = marcoArray.length - 1; i >= 0; i--) {
    console.log(i, marcoArray[i]);
}

//Cicli annidati: a ogni ciclo può essre eseguita qualsiasi tipo di operazione per cui anche un altro ciclo
//Un esrecizio in palestra è costituito da più serie di ripetizioni
for (let serie = 1; serie <= 4; serie++) {
    console.log(`--- Serie numero ${serie} 💪 ---`)
    for (let ripetizione = 1; ripetizione <= 6; ripetizione++) {
        console.log(`Ripetizione numero ${ripetizione} 🏋️‍♂️`);
    }
}

//Lezione 49: ciclo while
//A differenza del for, il costrutto del while richiede solamente la condizione di uscita dal ciclo

let ripetizone = 1; //Nel caso in cui si volesse utilizzare un contatore la variabile va inizializzata fuori
while (ripetizone <= 6) {
    console.log(`WHILE: Ripetizione numero ${ripetizone}`);
    ripetizone++; //Alla fine del ciclo si fa l'incremento. In realtà il while lascia la libertà di decidere in che punto del codice deve avvenire l'incremento e ciò può avere alcune applicazioni
}

//Il while si usa principalmente quando la condizione di uscita dal ciclo non dipende dall'incremento di un contatore poichè non si sa quando si può presentare la stessa condizione. Ad esempio l'estrazione di un numero casuale
//numero casuale
const lanciaDado = () => Math.trunc(Math.random() * 6) + 1; //Math.random estrae un numero causuale tra 0 e 1, moltiplicando per 6 si ottiene un numero decimale casuale tra 0 e 6, aggiungendo 1 si ottengono numeri tra 1 e 7. Math.trunc (arrotonda sempre per difetto) restituisce solo la parte intera;

let dado = lanciaDado();
while (dado !== 6) {
    console.log(`è uscito ${dado}`);
    dado = lanciaDado(); //Se non avvenisse il landio del dado (questa espressione) dentro al ciclo, la condizione non potrebbe mai essere soddisfatta e il ciclo sarebbe infinito poichè il dado avrebbe sempre e solo il valore del primo lancio avvenuto fuori dal ciclo
    if (dado === 6) console.log("Il ciclo sta per terminare");
}