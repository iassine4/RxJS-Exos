import { ReplaySubject } from 'rxjs';

const notifications$ = new ReplaySubject(3);

notifications$.next('Notif 1');
notifications$.next('Notif 2');
notifications$.next('Notif 3');
notifications$.next('Notif 4');

notifications$.subscribe((notification) => {
  console.log(notification);
});

