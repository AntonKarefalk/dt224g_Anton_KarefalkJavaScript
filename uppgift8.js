/*Denna uppgift går ut på att skriva in detaljer om en författare (object) som sedan kan skrivas ut (function)*/
"use strict";

/*Här har vi objektet som nu innehåller tre olika egenskaper (titel, författare, utgivningsår)*/
let bok = {
    titel: "Frankenstein",
    forfattare: "Mary Shelley",
    utgivningsar: 1818
};

/*Egenskaperna då tas emot av functionen som den kan du skriva ut*/
function visaBok(bok) {
    console.log("Titel: " + bok.titel);
    console.log("Författare: " + bok.forfattare);
    console.log("Utgivningsår: " + bok.utgivningsar);
}

/*Då skickas objekten in i functionen*/
visaBok(bok);