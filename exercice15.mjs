import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

function creerComposant() {
    const destroy$ = new Subject();
    const sub = interval(1000).pipe(
        takeUntil(destroy$)
    ).subscribe((valeur) => {
        console.log('tick', valeur);
    });

    return {
        detruire() {
            destroy$.next();
            destroy$.complete();
            
            console.log('Composant détruit');
        }
    };
}

const composant = creerComposant();

setTimeout(() => {
    composant.detruire();
}, 3500);