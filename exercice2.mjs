import { Observable } from 'rxjs';

function verifierMotDePasse(mdp) {
  return new Observable((subscriber) => {
    subscriber.next('Vérification...');

    if (mdp.length < 8) {
        subscriber.error(new Error('Mot de passe trop court'));
        return;
    }

    subscriber.next('Mot de passe valide');
    subscriber.complete();

  });
}

verifierMotDePasse('abc').subscribe({
  next: (message) => console.log(message),
  error: (erreur) => console.error(erreur.message),
  complete: () => console.log('Vérification terminée'),
});

verifierMotDePasse('motdepasse123').subscribe({
  next: (message) => console.log(message),
  error: (erreur) => console.error(erreur.message),
  complete: () => console.log('Vérification terminée'),
});