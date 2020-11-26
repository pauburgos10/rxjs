
import { of, range, asyncScheduler } from 'rxjs';

/**
 * Eventos del DOM
 */
//son 10 emisiones desde -5
//valor por defecto del start es 0
const src1$ = range(-5, 10, asyncScheduler);

console.log('inicio obs$');
// los valores se empiezan a leer cuando hay una suscripcion


src1$.subscribe(console.log);

console.log('fin obs$');





