
import { fromEvent } from 'rxjs';

/**
 * Eventos del DOM
 */
const src1$ = fromEvent<MouseEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

console.log('inicio obs$');
// los valores se empiezan a leer cuando hay una suscripcion

const observer = {
  next:val => console.log('next:', val)
}

src1$.subscribe(({x,y}) => {
  console.log(x,y)
});
src2$.subscribe( ev => {
  console.log( ev.key );
});

console.log('fin obs$');





