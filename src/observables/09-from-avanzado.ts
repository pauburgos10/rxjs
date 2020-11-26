
import { of, from } from 'rxjs';

/**
 * of = genera una secuencia
 * from = array, promise, iterable, observable
 */
const observer = {
  next: val => console.log('next:', val),
  complete: () => console.log('completado')
}

//const source$ = from(fetch('https://api.github.com/users/kleith'));

//source$.subscribe(observer);
// para obtener más infromación
//decimos que devuelve una respuesta async
// source$.subscribe( async resp => {
//   console.log(resp);

//   //devuelve una promise
//   //necesitamos await
//   const dataResp = await  resp.json();
//   console.log(dataResp);
// });

//from tambien puede trabajar con fu nciones generadoras o iterables
//esta fn generadora va a emitir un valor cada vez
const miGenerador = function*(){
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

const miIterable = miGenerador();
// es una forma de iterar sobre un iterable
from(miIterable).subscribe(observer);