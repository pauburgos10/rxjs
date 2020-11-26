
import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
  next: value => console.log('next:', value),
  error: error => console.log('error', error),
  complete: () => console.log('completado')
}

const intervalo$ = new Observable(sub => {

  const intervald = setInterval(() => sub.next(Math.random()), 1000);

  return () => {
    clearInterval(intervald);
    console.log('Intervalo destruido')
  }
});

const subjec$ = new Subject();
const suscrip = intervalo$.subscribe(subjec$);

const subs1 = subjec$.subscribe(num => console.log('num1:', num));
const subs2 = subjec$.subscribe(num => console.log('num2:', num));

setTimeout(() => {
  subjec$.next(10);
  subjec$.complete();
  suscrip.unsubscribe();
}, 3000);




