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
