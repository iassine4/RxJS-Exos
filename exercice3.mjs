import { interval } from 'rxjs';

const compteur$ = interval(1000);

const subscription = compteur$.subscribe((valeur) => {
  console.log(valeur);
});

setTimeout(() => {
  subscription.unsubscribe();
}, 5500);