/*Snack 2
Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.
Calcolare perimetro e area e stampare il risultato con console.log
*/

var triangolo = {
      base: 10,
      height: 20,
}




var ipotenusa = Math.sqrt(Math.pow(triangolo.base,2) + Math.pow(triangolo.height,2))
console.log('ipotenusa', ipotenusa)
var perimetro = ipotenusa + triangolo.base + triangolo.height ;
console.log('perimetro', perimetro)
var area = triangolo.base * triangolo.height / 2;
console.log('area', area)





console.log('triangolo', triangolo)