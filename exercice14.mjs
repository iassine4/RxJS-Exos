import { BehaviorSubject } from 'rxjs';

function creerPanierService() {
    const _nombreArticles$ = new BehaviorSubject(0);

    return {
        panier$: _nombreArticles$.asObservable(),
        ajouterArticle() {
            _nombreArticles$.next(_nombreArticles$.value + 1);
        }
    };
}

const panierService = creerPanierService();

panierService.panier$.subscribe((nombre) => {
    console.log('Header :', nombre);
});

panierService.panier$.subscribe((nombre) => {
    console.log('PageProduit :', nombre);
});

panierService.ajouterArticle();
panierService.ajouterArticle();