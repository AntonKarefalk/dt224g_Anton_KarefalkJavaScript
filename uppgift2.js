/* Uppgiften går ut på att använda JavaScript för att räkna ut värde på något när variabler som moms och antal kommer in */
"use strict";

/*Värdet på variablerna*/
const pris = 100;
const antal = 3;

/*Matten som används för att få ut resultatet*/
const totalt = pris * antal;
const totaltmedmoms = totalt * 1.25;

/*Visar priset och antalet*/
console.log("Pris: " + pris + " kr");
console.log("Antal: " + antal);

/*Använder matten för att räkna ut totala priset och moms*/
console.log("Totalt: " + totalt + " kr");
console.log("Totalt inklusive moms: " + totaltmedmoms + " kr");