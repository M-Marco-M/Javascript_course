const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

//Destructuring array

//-1) Scomponi l'array in due variabili: primoLibro e secondoLibro

const [primoLibro, secondoLibro] = books;

console.log(primoLibro, secondoLibro);

//-2) Scomponi l'array in una variabile chiamata terzoLibro, salta i primi due oggetti

const [, , terzoLibro] = books;
console.log(terzoLibro);

//-3) Scomponi l'array ratings in due variabili, una che contenga rating e una ratingsCount
const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
];

const [rating1, ratingsCount1] = [ratings[0][1], ratings[1][1]];
console.log(rating1, ratingsCount1);

//Soluzione
const [[, rating2], [, ratingsCount2]] = ratings;

//-4) Dividi l'array in tre variabili: fiveStarRatings, oneStarRatings, threeStarRatings
//threeStarRating è 0 di default
const ratingStars = [63405, 1808];

const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

//Destructuring object

//-1) Dividi il primo oggetto dell'array libri nelle variabili titolo, autore, ISBN

const { author: autore, title: titolo, ISBN } = books[0];

console.log(autore, titolo, ISBN);

//-2) Dividi il primo oggetto dell'array books in una variabile chiamata tags, i valori di tags devono esser assegnati da keywords

const tags1 = books[0].keywords;
console.log(tags1);

//Soluzione

const { keywords: tags2 } = books[0];
console.log(tags2);

//-3) //Scomponi il settimo libro nelle variabili language e programmingLanguage.
//Assegnare a programmingLanguage il valore di default "unknown"

const { language, programmingLanguage = 'unknokwn' } = books[6];

console.log(language, programmingLanguage);

//-4) Riassegna alle variabili i valori di titolo e autore del primo libro
let bookTitle = 'unknown';
let bookAuthor = 'unknown';

// {title: bookTitle, author: bookAuthor} = books[0];
// console.log(bookAuthor, bookTitle);

//Soluzione: quando si scompone un oggetto assegnando a delle variabili esistenti
//bisogna mettere le tonde prima delle graffe poihè JS non consente di iniziare una riga con le graffe
({ title: bookTitle, author: bookAuthor } = books[0]);

//-5) Scomponi il primo libro in una variabile chiamata bookRating ch contenga book[0].thirdParty.goodreads.rating

const {
  thirdParty: {
    goodreads: { rating: bookRating },
  },
} = books[0];

console.log(bookRating);

//-6) Scrivi una funzione printBookInfo con i parametri title, author e year.
//Deve funzionare passando un singolo oggetto come argomento
//Deve stampare "${title} by ${author}, ${year}"
//Se anno è indefinito il valore di default deve essere "unknown"

const printBookInfo = function ({ title, author, year = 'year unknown' }) {
  console.log(`${title} by ${author}, ${year}`);
};

for (const book of books) {
  printBookInfo(book);
}

//Spread operator
//-1)Dichiara un array chiamato bookAuthors che contenga gli autori dei primi due libri
//senza avere array all'interno

const bookAuthors = [...books[0].author, ...books[1].author];
console.log(bookAuthors);

//-2) Scrivere una funzione chiamat spellWord che prenda una stringa come parametro e
//che stampi i caratteri intervallati da spazi

const spellWord = function (string) {
  console.log(...string);
};

spellWord('prova');

// Rest pattern
//-1) Scomponi keywords di books nelle variabili mainKeyword e rest, assegna la prima keyword a mainKeyword, il resto a rest

const [mainKeyword, ...rest] = books[0].keywords;
console.log(mainKeyword, rest);

//-2) Scomponi il secondo libro in una variabile chiamata bookPublisher, che conserverà il publisher
// e in una chiamata restOfTheBook

const { publisher: bookPublisher, ...restOfTheBook } = books[1];
console.log(bookPublisher, restOfTheBook);

//-3) Scrivi una funzione printBookAuthorsCount che abbia due parametri, titolo e autore, autore può accettare un numero illimitato di argomenti
//La funzione deve stampare una stringa in questo formato "The book "${title}" has ${authors.length} authors"

const printBookAuthorsCount = function (title, ...authors) {
  console.log(`The book "${title}" has ${authors.length} authors`);
};

printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');

//Short circuiting

//-1) Scrivi una funzione hasExamplesInJava che indichi se il libro passato come parametro
// usa come linguaggio Java, restituendo true se vero o 'no data available' se falso o assente

const hasExamplesInJava = function (book) {
  return book.programmingLanguage === 'Java' || 'no data available';
};

console.log(hasExamplesInJava(books[0]));
console.log(hasExamplesInJava(books[2]));

console.log('--------------------------------------------------');
//-2) Scrivi un for-of di books che verifichi se presente onlineContent, se si stampare "${title}" provides online content

for (const book of books) {
  book.onlineContent && console.log(`${book.title} provides online content`);
}

//Nullish operator
//-1) Scrivi un for-of che stampi "${title}" provides no data about its online content
//se l'oggetto non possiede la proprietà onlineContent

for (const book of books) {
  book.onlineContent ??
    console.log(`${book.title} provides no data about its online content`);
}

//Logical Assignments Operators
//-1) Aggiungi la proprietà edition dove mancante, assegnando 1 come valore di default

for (const book of books) {
  book.edition = book.edition || 1;
}

//-2) Impostare false la proprietà highlighted se rating è inferiore di 4.2

for (const book of books) {
  book.highlighted &&= !(book.thirdParty.goodreads.rating < 4.2);
}
console.log(books);

//The for-of loop
//-1) Somma i valori della proprietà pages di ogni libro dell'array nella variabile pageSum

let pageSum = 0;
for (const book of books) {
  pageSum += book.pages;
}

console.log(pageSum);

//-2) Conserva tutti gli autori di ogni libro in books dentro l'array allAuthors
//L'array deve avere solo stringhe tutte sullo stesso livello (non array di stringhe)

const allAuthors = [];

for (const { author } of books) {
  if (typeof author === 'string') {
    allAuthors.push(author);
  } else {
    allAuthors.push(...author);
  }
}

console.log(allAuthors);

//-3) Stampa ciascun autore di allAuthors con il suo indice, usa entries().
//L'indice deve partire da 1

for (const [index, author] of allAuthors.entries()) {
  console.log(`${index}. ${author}`);
}

//Enhanced Object Literals

//-1) Riporta i valori di bookData nella coppia chiave-valore allinterno dell'oggetto newBook
//tramite la notazione avanzata degli oggetti (notazione con [])
const bookData = [
  ['title', 'Computer Networking: A Top-Down Approach'],
  ['author', ['James F. Kurose', 'Keith W. Ross']],
  ['publisher', 'Addison Wesley'],
];

const newBook = {
  [bookData[0][0]]: bookData[0][1],
  [bookData[1][0]]: bookData[1][1],
  [bookData[2][0]]: bookData[2][1],
};
console.log(newBook);

//-2) Aggiungere la proprietà pages a newBook2 con il valore di pages
const pages = 880;

// const newBook2 = {
//   title: 'The C Programming Language',
//   author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
//   pages: pages,
// };

// console.log(newBook2);

//Soluzione

const newBook2 = {
  title: 'The C Programming Language',
  author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
  pages,
};
console.log(newBook2);

//Optional Chaining (?.)
//-1) Scrivi una funzione che indichi il primo elemento in keyword,
//se keyword non è presente restituisce undefined, non errore
const getFirstKeyword = function (book) {
  return book.keywords?.[0];
};

console.log(getFirstKeyword(newBook2));
console.log(getFirstKeyword(books[0]));

//Looping objects: keys, values, entries
//-1) Ciclando l'array books[0].thirdParty.goodreads inserisci le key nell'array entries
const entries = [];

for (const key of Object.keys(books[0].thirdParty.goodreads)) {
  entries.push([key]);
}

console.log(entries);

//-2) Ciclando books[0].thirdparty.goodreads inserisci i valori al posto giusto dell'array entries

for (const [index, value] of Object.values(
  books[0].thirdParty.goodreads
).entries()) {
  entries[index].push(value);
}

//-3) Ciclando books[0].thirdparty.goodreads e applicando il metodo .entries(), inserisci i valori nell'array vuoto entries2
const entries2 = [];

for (const entry of Object.entries(books[0].thirdParty.goodreads)) {
  entries2.push(entry);
}

console.log(entries2);

//Sets
//-1) Riempi allKeywords con tutte i valori di books[x].keywords. L'array non deve contenere array annidati
const allKeywords = [];

for (const book of books) {
  allKeywords.push(...book.keywords);
}

console.log(allKeywords);

//-2) Rimuovi i duplicati dall'array allKeywords inserendoli in un set
const allKeywordsUnique = new Set(allKeywords);

console.log(allKeywordsUnique);

//-3) Aggiungi "code" e "science" al set

allKeywordsUnique.add('code', 'science');

console.log(allKeywordsUnique);

//-4) Elimina business da allKeywordsUnique
allKeywordsUnique.delete('business');

//-5) Crea un array con gli elementi del set
const allKeywordsUniqueArray = [...allKeywordsUnique];
console.log(allKeywordsUniqueArray);

//-6) Cancella tutti gli elementi dal set
allKeywordsUnique.clear();

//Mappe: fondamentali
//-1) Crea un nuovo libro in forma di mappa con questi dati [['title', 'Clean Code'], ['author', 'Robert C. Martin']]
const newBook3 = new Map([
  ['title', 'Clean Code'],
  ['author', 'Robert C. Martin'],
]);

console.log(newBook3);

//-2) In newBook 3 inserisci una nuova chiave pages col valore 464
newBook3.set('pages', 464);

//-3) Stampa questa stringa "${title} by ${author}".
console.log(`${newBook3.get('title')} by ${newBook3.get('author')}`);

//-4) Stampa la size di newBook3
console.log(newBook3.size);

//-5) Stampa "The author of the book is known" se newBook3 ha la chiave author
newBook3.has('author') && console.log('The author of the book is known');

//Mappe: cicli
//-1) Converti il primo oggetto dell'array books in una mappa
const book0Map = new Map(Object.entries(books[0]));

console.log(book0Map);

//Stampa le chiavi di book0Map che hanno numeri come valori

for (const [key, value] of book0Map) {
  if (typeof value === 'number') console.log(key);
}
