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
