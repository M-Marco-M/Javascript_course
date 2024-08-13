'use strict';

//La strict mode è un costrutto ce influenza tutto il codice che la segue
//Viene solitamente usata su specifici script, e fa si che Javascript segnali errori
//che normalmente non segnalerebbe

let hasDriverLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true; //Qui Javascript segnala in console che hasDriversLicense non è dichiarata(contiene una s rispetto ala variabile dichiarata). Senza la strict mode non lo farebbe
if (hasDriverLicense) console.log("I can drive at 90 mph in those country lanes! :D"); 