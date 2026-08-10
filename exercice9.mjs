import { Subject } from 'rxjs';

const panierEvents$ = new Subject();

panierEvents$.subscribe(event => {
    console.log('Header :', event);
});

panierEvents$.subscribe((event) => {
  console.log('Notification :', event);
});

panierEvents$.next('produit-ajouté');

panierEvents$.subscribe((event) => {
  console.log('Abonné tardif :', event);
});