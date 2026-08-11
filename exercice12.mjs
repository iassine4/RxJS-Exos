import { of } from 'rxjs';
import { delay, tap, shareReplay } from 'rxjs/operators';

function simulerAppelAPI() {

  return of({ data: 'résultat' }).pipe(
    tap(() => console.log('Appel réseau lancé')),
    delay(1000)
  );
}

const reponse$ = simulerAppelAPI().pipe(
shareReplay(1)
);

reponse$.subscribe((resultat) => {
  console.log('Abonné 1 :', resultat);
});

reponse$.subscribe((resultat) => {
  console.log('Abonné 2 :', resultat);
});

