import { throwError, of } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

function appelAPIInstable() {
  const succes = Math.random() > 0.5;

  return succes
    ? of(['a', 'b', 'c'])
    : throwError(() => new Error('Erreur réseau'));
}

appelAPIInstable().pipe(
  retry(1),
  catchError(() => of([]))
).subscribe((donnees) => {
  console.log(donnees);
});