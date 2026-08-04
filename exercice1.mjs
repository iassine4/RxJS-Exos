import { Observable } from 'rxjs';

const prenoms$ = new Observable((subscriber) => {
    subscriber.next('Alice');
    subscriber.next('Bob');
    subscriber.next('Chloé');

    subscriber.complete();
});

prenoms$.subscribe({
  next: (prenom) => console.log(prenom),
  complete: () => console.log('Terminé !'),
});