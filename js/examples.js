/*Expresión Regex que busca dentro del texto aquellas coincidencias
 donde se encuentre la palabra*/
var text ="I have no special talents. I am only passionately curious.";
let regex=/curious/gm;

var result = text.match(regex);
console.log(`El resultado es: ${result}`);