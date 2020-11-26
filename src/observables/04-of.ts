
import { of } from 'rxjs';



const obs$ = of(...[4,8,10],1, 2, 3, 4, 5, 6);

console.log('inicio obs$');
// los valores se empiezan a leer cuando hay una suscripcion

const subs1 = obs$.subscribe(
  next => console.log('next:', next),
  null,
  () => console.log('Terminamos secuencia')
);

console.log('fin obs$');





