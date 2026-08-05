import { range } from 'rxjs';
import { map, filter } from 'rxjs/operators';


const nombres$ = range(1, 10);

const nombresPairs$ = nombres$.pipe(
    filter((nombre) => nombre % 2 === 0),
    map((nombre) => nombre * 100),
);

nombresPairs$.subscribe((nombre) => {
    console.log(nombre);
});