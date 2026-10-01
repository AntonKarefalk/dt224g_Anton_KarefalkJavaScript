/*Uppgiften gåt ut på att kategorisera en person beroende på deras ålder*/
"use strict";

/*Min ålder*/
let age = 19

/*Här sätter jag restriktioner på kategorierna så om variabeln är under 18, så är jag ett barn. Om variabeln är över 18 så är man vuxen, etc*/
if (age < 18) {
    console.log("Barn");
} else if (age < 65) {
    console.log("Vuxen");
} else {
    console.log("Pensionär");
}