import { BehaviorSubject } from 'rxjs';

const theme$ = new BehaviorSubject('clair');

theme$.subscribe((theme) => {
console.log('Abonné 1 :', theme);
});

theme$.next('sombre');

theme$.subscribe((theme) => {
  console.log('Abonné 2 :', theme);
});