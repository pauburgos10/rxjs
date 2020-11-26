
import { asyncScheduler } from 'rxjs';

/**
 * interval y timer son observables asincronos por naturaleza
 */
//son 10 emisiones desde -5
//valor por defecto del start es 0

const saludar = () => console.log('Hola numdo');
const saludar2 = (nombre) => console.log(`Hola mundo ${nombre.a} ${nombre.b}`);

// mando la funcion a ejecutar en cierto tiempo

//asyncScheduler.schedule( saludar, 2000 );

// si la funcion necesita parametros, lo ponemos 
//en el tercer parametro que es donde vamos a enviar el state
// y si requiere multiples parametros los ponemos en un solo objeto, no permite mas de un parametro 
asyncScheduler.schedule(saludar2, 2000, { a: 'Paula', b: 'Burgos' });

const subscription = asyncScheduler.schedule( function (state) {

  console.log('state', state);
  this.schedule(state + 1, 1000);

}, 2000, 0);

//permite dessubscribir y que no sesiga ejecutando
/*setTimeout( () => {
  subscription.unsubscribe();
}, 6000);*/

// hacer el timeout pero con asyncSched
asyncScheduler.schedule(() => subscription.unsubscribe(), 6000);


