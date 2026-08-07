import { BehaviorSubject, of, combineLatest, forkJoin } from 'rxjs';
import { delay } from 'rxjs/operators';

const prix$ = new BehaviorSubject(10);
const quantite$ = new BehaviorSubject(2);

combineLatest([prix$, quantite$]).subscribe(([prix, quantite]) => {
    console.log(prix * quantite);
});

setTimeout(() => {
    prix$.next(15);
}, 1000);

const utilisateur$ = of({ nom: 'Alice' }).pipe(
  delay(500)
);

const commandes$ = of(['cmd1', 'cmd2']).pipe(
  delay(800)
);

forkJoin([utilisateur$, commandes$]).subscribe(([utilisateur, commandes]) => {
  console.log(utilisateur, commandes);
});