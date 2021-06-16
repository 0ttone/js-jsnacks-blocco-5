/*Snack 1.
Creare un oggetto palla che abbia le seguenti proprietà.
Nome = palla
Peso = 10
*/

var palla = {
      name: 'palla',
      peso: 10
}

console.log('Esercizio snack 1', palla)


/*Snack1. - la continua.
Attraverso un prompt dare la possibilità all’utente 
di modificare il peso della palla.
*/

var newpeso = prompt('inserisci peso per numero')

palla.peso = newpeso;

console.log(palla)

/*Inserire  l’oggetto palla in una array
*/

var giochi = []

giochi.push({
      nome: palla}
      
      );

console.log(giochi);


/*Snack 1 - la conclusione per davvero.
Permettere all’utente di inserire un nuovo oggetto 
all’interno dell’array giochi*/


var newgioco = prompt('Inserisci un nuovo gioco');

giochi.push({
      nome: newgioco,

});

console.log('Elenco in array giochi con aggiunta',giochi)