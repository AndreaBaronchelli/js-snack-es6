// Snack 1
// Creare un array di oggetti: 
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

// const bikes = [
//     { 
//         name: "Graziella",
//         peso: 6,
//     },
//     { 
//         name: "Saltafoss",
//         peso: 8,
//     },
//     { 
//         name: "Bianchi",
//         peso: 5,
//     },
// ];

// let lightestBike = bikes[0]

// for(let i = 0; i < bikes.length; i++){
//     const{peso} = bikes[i];
//     if(peso < lightestBike.peso) {
//         lightestBike = bikes[i];
//     };
// };

// console.log(lightestBike);

// Snack 2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// const teams = [
//     {
//         name: "Milan",
//         points: 0,
//         fouls: 0,
//     },
//     {
//         name: "Atalanta",
//         points: 0,
//         fouls: 0,
//     },
//     {
//         name: "Torino",
//         points: 0,
//         fouls: 0,
//     },
//     {
//         name: "Chievo",
//         points: 0,
//         fouls: 0,
//     },
// ];

// for(let i = 0; i < teams.length; i++){
//     teams[i].points = randNumber(1, 100);
//     teams[i].fouls = randNumber(1, 100);
// }

// console.log(teams);

// const newTeams = [];

// for(let i = 0; i < teams.length; i++){
//     const{name, fouls} = teams[i];
//     newTeams.push(
//         {
//         name,
//         fouls,
//         }
//     );
// };

// console.log(newTeams);

/********************************
* FUNCTIONS
*********************************/

// function randNumber(min, max) {
//     return Math.floor(Math.random()* (max - min) + 1) + min;
// }

// jsnack 3
// Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri
// inseriti dall'utente (è possibile usare, ad esempio, for/foreach/filter

// const array = ["zero", "uno", "due", "tre", "quattro"];
// let numMin = parseInt(prompt("Inserire un numero da 0 a " + (array.length - 1)));
// let numMax = parseInt(prompt("Inserire un numero da " + numMin  + " a " + (array.length - 1)));


//1
// const newArray = [];
// myFunction(array, newArray, numMin, numMax);
// console.log(newArray);

// 2
// const newArray = [];
// array.forEach( (element, index) => {
//     if(index >= numMin && index <= numMax) {
//         newArray.push(element);
//     };
// } );
// console.log(newArray);

//3
// const newArray = array.filter( (element, index) => index >= numMin && index <= numMax);
// console.log(newArray);

/********************************
* FUNCTIONS
*********************************/
// function myFunction (arr, newarr, min, max) {
//     for(let i = 0; i < arr.length; i++) {
//         if(i >= min && i <= max) {
//             newarr.push(arr[i]);
//         }
//     }
// };

// jsnack 4
// Dato un'array con dei capi d'abbigliamento - oggetti che contengono informazioni su nome modello, tipologia e colore -
//  si aggiunga a ciascun elemento una ulteriore proprietà che indichi il costo del prodotto.
// Per inserire il costo del singolo prodotto si scriva una funzione che generi un numero random da 10 a 50 
// (potete sfruttare il map per aggiungere la nuova proprietà)

const vestiti = [
    {
        name: "jeans",
        type: "bottom",
        color: "black",
    },

    {
        name: "maglietta",
        type: "top",
        color: "red",
    },

    {
        name: "cappotto",
        type: "top",
        color: "blue",
    },
];

//1
// const newVestiti =  vestiti.map( (element) => {
//     const newVestito = {
//       ...element, 
//       price: randNumber(10,50),
//     }  

//     return newVestito;  
  
// });

// console.log(newVestiti);

//2
vestiti.forEach( (element) => {

    element.price = randNumber(10,50);
});

console.log(vestiti);

/********************************
* FUNCTIONS
*********************************/

function randNumber(min, max) {
    return Math.floor(Math.random()* (max - min) + 1) + min;
}