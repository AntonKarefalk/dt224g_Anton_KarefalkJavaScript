/*Denna uppgift går ut på att skapa individer med deras namn, ålder och bostad som sen ska användas för att se om varje individ är myndig eller inte*/
"use strict";

/*Här är vår array som ska då kommer att användas vid functionen.*/
const people = [
    {
        name: "Anton",
        age: 19,
        city: "Örnsköldsvik"
    },
    {
        name: "Peter",
        age: 15,
        city: "Sundsvall"
    },
    {
        name: "Wilma",
        age: 27,
        city: "Sollefteå"
    }
];

/*Functionen kollar efter varje persons ålder för att se vilken "kategori" de ska skrivas ut i (myndig eller inte myndig) beoronde på ålder. Sedan skriver den ut deras namn och bostad.*/
function showPerson(person) {
    if (person.age >= 18) {
        console.log(person.name + " bor i " + person.city + " och är myndig.");
    } else {
        console.log(person.name + " bor i " + person.city + " och är inte myndig.")
    }
}

/*Här går den igenom alla personer tills alla har skrivits ut*/
for (let i = 0; i < people.length; i++) {
    showPerson(people[i]);
}