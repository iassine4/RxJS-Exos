const { fromEvent, of, throwError } = rxjs;
const {
    map,
    filter,
    debounceTime,
    distinctUntilChanged,
    switchMap,
    tap,
    catchError,
    finalize,
    delay
} = rxjs.operators;

const input = document.querySelector('#recherche');
const chargement = document.querySelector('#chargement');

function rechercherAPI(terme) {
    const echoue = Math.random() < 0.2;

    return echoue
        ? throwError(() => new Error('Erreur serveur'))
        : of([
            `${terme}-résultat-1`,
            `${terme}-résultat-2`
        ]).pipe(
            delay(400)
        );
}

const recherche$ = fromEvent(input, 'input').pipe(
    map((event) => event.target.value.trim()),
    filter((terme) => terme.length > 0),
    debounceTime(300),
    distinctUntilChanged(),
    tap(() => {
        chargement.textContent = 'Chargement...';
    }),
    switchMap((terme) => rechercherAPI(terme).pipe(
        catchError(() => of(['Erreur lors de la recherche'])),
        finalize(() => {
            chargement.textContent = '';
            })
        )
    )
);

recherche$.subscribe((resultats) => {
    console.log(resultats);
});

