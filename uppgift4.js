/*Denna uppgift går ut på att hitta alla jämna tal mellan 0 och 20, därför kommer vi att behöva använda division för att få ut resultatet*/
"use strict";

/*Här säger vi att variabln öker från 1 tills den når 20. Efter det kollar den om talen som den får up kan delas med 2. Om den inte kan så ignoreras den*/
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}