
import { interval, timer } from 'rxjs';

/**
 * interval y timer son observables asincronos por naturaleza
 */
//son 10 emisiones desde -5
//valor por defecto del start es 0

const observer = {
  next: val => console.log('next:', val),
  complete:() => console.log('completado')
}
const interval$ = interval(1000);

// esto tiene un efecto como interval que cominda a ejecutarse a los 2 seg 
//  y despues cada 1 seg emite un nuevo valor
//const timer$ = timer(2000, 1000);

//ejecuta a los 5 segundos
const hoyEn5 = new Date();
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);
const timer$ = timer(hoyEn5);


console.log('inicio obs$');
// los valores se empiezan a leer cuando hay una suscripcion
timer$.subscribe(observer);

console.log('fin obs$');





