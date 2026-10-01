/*Uppgiften går ut på att vi skapar en array som sedan addar ihopa alla tal*/
"use strict";

/*Själva arrayen (p.s - de är primtal :))*/
let tal = [2, 3, 5, 7, 11, 13, 17, 19, 23];

/*Här kommer functionen som då räknar ut allt. Vi börjar på 0 och sen använder vi for och array.length för att loopa igenom alla tal som finns i arrayen. Till sist finns return som då ger oss tillbaka summan*/
function calculateSum(array) {
    let summa = 0;

    for (let i = 0; i < array.length; i++) {
        summa += array[i];
    }
    return summa;
}

/*Här skrivs det då ut*/
console.log("Summa är " + calculateSum(tal));