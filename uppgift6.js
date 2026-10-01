/*Denna uppgift går ut på att skapa en program som kan räkna ut area på två värden genom att använda multiplikation*/
"use strict";

/*Själva funktionen som har parametrerna och som sedan räknar ut arean. Return då skickar tillbaka resultatet*/
function calculateArea(bredd, höjd) {
    let area = bredd * höjd;
    return area;
}

/*Skriver ut dem olika areorna med olika värden*/
console.log("Arean är " + calculateArea(3, 5));
console.log("Arean är " + calculateArea(9, 21));
console.log("Arean är " + calculateArea(10, 12));