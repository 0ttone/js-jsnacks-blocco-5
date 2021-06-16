/*Snack 4 -
Creare un array di 3 studenti (3 oggetti in un array, quindi) con queste proprietà:
nome
cognome
age
descrizione
Per nome, cognome ed age assegnate direttamente nel codice i valori che volete.
ATTENZIONE: la descrizione invece sarà l’unico valore vuoto, stringa vuota.
{
  nome: ‘Pippo’,
  cognome: ‘Baudo’,
  age: 80,
  descrizione: ‘’
} 
Successivamente, con dei prompt chiediamo di volta in volta all’utente la descrizione di ciascun studente, salviamola quindi all’interno della sua proprietà.
Nota bene: questo naturalmente, in un ciclo, per ciascun studente. ;)
Stampiamo con un console.log il risultato di questo array di studenti aggiornato.
Bonus
Visualizzare nell’html questi dati in una forma tabellare.
*/

var students = [
      { nome: 'Alex', 
        cognome: 'Base',
        anno: 2000,
        descrizione: ''

            },
      { nome: 'Aldo', 
      cognome: 'Case',
      anno: 2001,
      descrizione: ''
    
            },
      { nome: 'Alba', 
      cognome: 'Dase',
      anno: 2002,
      descrizione: ''
    
                }
      
];

console.log('Mostra array students campo descrizione vuoto' , students)

var resultList = document.querySelector(".result")


for (var i = 0; i < students.length; i++){
      var descrizioneUtente = prompt('Inserisci la descrizione di' + students[i].nome + ' ' + students[i].cognome + ':')
      for (var k in students[i] ){
            resultList.innerHTML += "<li>" + k + ':' + students[i][k] + "</li>";

            console.log('Ovvero chiavi e prompt ciclato', k, students[i][k])
      }
      
      
      ///   SOLUZIONE ABBANDONATA ERRORE SU ASSEGNAZIONE CLASSE O ID O QUERY ATTENZIONE
      // students[i].descrizione = descrizioneUtente

      // console.log(descrizioneUtente)

      // resultList[i].innerHTML += students[i].nome + "<br" + students[i].cognome + "<br" + students[i].anno + "<br" + students[i].descrizione + "<hr>" ;


}


console.log('dopo inserimento',students)










