/*Uppgiften går ut på att skapa en array och sedan göra ändringar på den*/
"use strict";
let matratter = ["Nuggets", "Hamburgare", "Tacos", "Köttbollar", "Krov"];

/*Skriver ut elementen, alltså maträtterna*/
console.log(matratter);

/*Skriver ut första maträtten genom att kolla på 0, alltså den första*/
console.log("Första maträtten: " + matratter[0]);
/*Skriver ut sista maträtten genom att kolla på den sista i arrayen*/
console.log("Sista maträtten: " + matratter[matratter.length - 1]);

/*Trycker fram en till maträtt och lägger den sist*/
matratter.push("Lasagne");

/*Tar bort första elementet/maträtten */
matratter.shift();

/*Skriver ut allt om igen med ändringarna*/
console.log(matratter);