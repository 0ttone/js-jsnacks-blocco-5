/*Snack 3 - 1^ parte.
Creare un array con tre numeri, calcolare la media di questi tre numeri.
*/

 var numbers = [ 5, 7, 6];
 console.log(numbers);
 
 var result = 0

 for (var i = 0; i < numbers.length; i++){
      result+= numbers[i]
       
      
 }
 var average = result / numbers.length

 console.log('media array', average)




/*Snack 3 - 2^ parte.
Costruiamo un array di tre giocatori di basket. Ogni giocatore avrà le seguenti proprietà:
nome
cognome
anno
punteggio
Calcolare il punteggio medio dei tre giocatori.
*/

var team = [
      { nome: 'Alex', 
        cognome: 'Base',
        anno: 2000,
        points: 90

            },
      { nome: 'Aldo', 
      cognome: 'Case',
      anno: 2001,
      points: 80
    
            },
      { nome: 'Alfio', 
      cognome: 'Dase',
      anno: 2002,
      points: 70
    
                }
      
];


var result = 0

for (var i = 0; i < team.length; i++){
      
      result += team[i].points

}

var averageP = result / team.length






console.log ('contenuto team',team);

console.log ('media singoli', averageP);