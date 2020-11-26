
import { Observable, Observer } from 'rxjs';

const observer: Observer <any> = {
  next :  value => console.log('next:', value),
  error: error => console.log('error', error),
  complete: () => console.log('completado')
}

const intervalo$ = new Observable( sub => {

  let count = 0;
  setInterval(() => {
    count++;
    sub.next(count);
  }, 1000);
});

const subscripcion = intervalo$.subscribe( num => console.log('num:', num) );

setTimeout(() => {
  subscripcion.unsubscribe();
}, 3000);

/*obs$.subscribe( valor => console.log('next:', valor),
    error => console.log('error:', error),
    () => console.log('Completado')
  );*/






