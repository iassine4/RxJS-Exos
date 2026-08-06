import { of } from 'rxjs';
import { mergeMap, switchMap, delay } from 'rxjs/operators';

function rechercherAPI(terme) {
  const delaiAleatoire = Math.random() * 1000;

  return of(`Résultats pour "${terme}"`).pipe(
    delay(delaiAleatoire)
  );
}

const recherches$ = of('ang', 'angular');

recherches$.pipe(
  switchMap((terme) => rechercherAPI(terme))
).subscribe((resultat) => {
  console.log(resultat);
});