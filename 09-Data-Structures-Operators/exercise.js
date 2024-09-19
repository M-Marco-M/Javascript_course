'use strict';
//Esercizio 9
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//Creo degli array che contengano i nomi di tutti i giocatori di ciascuna squadra
//destruuturando l'array
const [players1, players2] = game.players;
console.log(players1, '---', players2);

//Creo una variabile per il portiere e una per i giocatori usando il rest operator
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//Creo un array che includa tutti i giocatori usando lo spread operator
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//Creo un array a partire da players1 a cui aggiungo tre giocatori, sempre usando lo spread operator
const players1final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1final);

//Creo tre variabili che conservino le quote dell'incontro
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

const printGoals = function (...players) {
  let i;
  for (i = 0; i < players.length; i++) console.log(players[i]);
  console.log(players.length);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

//Stampo il team che ha più probabilità di vincere
//-team1 è minore di team2 perciò prosegue
//-"team1" è l'ultimo valore thruty che incontra e perciò è quello che stampa

//-se team1 < team2 fosse falso si fermerebbe a questo valore, quindi l'espressione tra parentesi sarebbe falsa
//-a questo punto procede con l'OR che si ferma al primo valore thruty, quindi "team2"
console.log((team1 < team2 && 'team1') || 'team2');

//Esercizio 10
//Ciclare game.scored e scrivere il goal (posizione) segnato da ogni giocatore
for (let i = 0; i < game.scored.length; i++) {
  console.log(`Goal ${i}) + 1}: ${game.scored[i]}`);
}

//Soluzione
console.log('Soluzione 1');
for (const scored of game.scored.entries())
  console.log(`Goal ${scored[0]}) + 1}: ${scored[1]}`);

//Soluzione avanzata
console.log('Soluzione 2');
for (const [key, value] of game.scored.entries())
  console.log(`Goal ${key}) + 1}: ${value}`);

//Calcolare la media di odds
let oddsValues = Object.values(game.odds);
let somma = 0;
for (const value of oddsValues) {
  somma += value;
}
let avgOdds = somma / oddsValues.length;
console.log(avgOdds);

//Scrivere le odds in maniera leggibile e ben formattata (discorsiva)
const oddsEntries = Object.entries(game.odds);
const gameEntries = Object.entries(game);
const gameKeys = Object.keys(game);

for (const teamOdd of oddsEntries) {
  const team = game[oddsEntries[oddsEntries.indexOf(teamOdd)][0]];
  console.log(`Quota ${team ?? 'pareggio'} ${team ?? ''} = ${teamOdd[1]}`);
}

//Soluzione
console.log('Soluzione esercizio 3');
for (const [team, odd] of oddsEntries) {
  const isTeam = gameKeys.includes(team);
  console.log(
    `Quota ${isTeam ? 'vittoria' : 'pareggio'} ${
      isTeam ? game[team] : ''
    } = ${odd}`
  );
}

//Crea un oggetto che riporti i giocatori con il numero di goal segnati
//a partire dall'array game.scored

const scorers = {};

// for (const player of game.scored) {
//   if (Object.keys(scorers).includes(player)) {
//     scorers[player] += 1;
//   } else scorers[player] = 1;
// }

//Soluzione
// for (const player of game.scored) {
//   if (scorers[player]) {
//     scorers[player]++;
//   } else scorers[player] = 1;
// }

//Con operatore ternario
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

console.log(scorers);

//Esercizio 11
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

//Creare l'array "events" con tutti gli eventi della partita, di modo che non contenga duplicati

const events = [...new Set(gameEvents.values())];

console.log(events);

//Rimuovere il cartellino giallo del minuto 64 dalla mappa
gameEvents.delete(64);
console.log(gameEvents);

//Calcolare ogni quanti minuti, in media, avviene un evento durante una partita e stampare una stringa

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

//Stampare uno a uno gli eventi della partita specificando se sono avvenuti nella prima metà o nella seconda metà dell'incontro
for (const [minute, event] of gameEvents) {
  console.log(
    `${minute <= 45 ? '[FIRST' : '[SECOND'} HALF] ${minute}: ${event}`
  );
}

//Esercizio 12
//Prelevare dal DOM dei nomi di variabili scritti in underscore_case e convertirli in camelCase
//poi stampareli uno a uno con accanto un numero di spunte pari alla posizione nell'array + 1
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const testoEl = document.querySelector('textarea');
const buttonEl = document.querySelector('button');

//Funzione che converte una parola da underscore_case a camelCase
const fromUnderscoreToCamel = function (underscoreString) {
  const arrayLower = underscoreString.toLowerCase().trim().split('_');
  const arrayUpper = [arrayLower[0]];
  for (let i = 0; i < arrayLower.length; i++) {
    const word = arrayLower[i];
    if (i > 0) arrayUpper.push(word.replace(word[0], word[0].toUpperCase()));
  }
  return arrayUpper.join('');
};

// console.log(fromUnderscoreToCamel('underscore_string'));

//Funzione che stampa tutte le variabili convertite con accato le spunte
const printConverted = function (text) {
  const array = text.split('\n');
  for (const [i, row] of array.entries()) {
    console.log(
      `${fromUnderscoreToCamel(row).padEnd(30, ' ')} ${'☑'.repeat(i + 1)}`
    );
  }
};

const testo =
  'underscore_case\nfirst_name\nSome_Variable\n calculate_AGE\ndelayed_departure';

buttonEl.addEventListener('click', function () {
  printConverted(testo);
});
