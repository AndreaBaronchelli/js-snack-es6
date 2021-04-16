// Snack 1
// Creare un array di oggetti: 
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const bikes = [
    { 
        name: "Graziella",
        peso: 6,
    },
    { 
        name: "Saltafoss",
        peso: 8,
    },
    { 
        name: "Bianchi",
        peso: 5,
    },
];

let lightestBike = bikes[0]

for(let i = 0; i < bikes.length; i++){
    const{peso} = bikes[i];
    if(peso < lightestBike.peso) {
        lightestBike = bikes[i];
    };
};

console.log(lightestBike);

// Snack 2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const teams = [
    {
        name: "Milan",
        points: 0,
        fouls: 0,
    },
    {
        name: "Atalanta",
        points: 0,
        fouls: 0,
    },
    {
        name: "Torino",
        points: 0,
        fouls: 0,
    },
    {
        name: "Chievo",
        points: 0,
        fouls: 0,
    },
];

for(let i = 0; i < teams.length; i++){
    teams[i].points = randNumber(1, 100);
    teams[i].fouls = randNumber(1, 100);
}

console.log(teams);

let newTeams = [];

for(let i = 0; i < teams.length; i++){
    const{name, fouls} = teams[i];
    newTeams.push(
        {
        name: name,
        fouls: fouls,
        }
    );
};

console.log(newTeams);
/********************************
* FUNCTIONS
*********************************/

function randNumber(min, max) {
    return Math.floor(Math.random()* (max - min) + 1) + min;
}