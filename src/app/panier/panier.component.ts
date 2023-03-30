import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
})
export class PanierComponent implements OnInit {
  articles: any;

  constructor() {}

  ngOnInit(): void {
    var panier = localStorage.getItem('panier');
    var panierFromLocalStorage = panier && JSON.parse(panier);

    this.articles = panierFromLocalStorage.articles;

    console.log(this.articles);
  }

  getTotal(): number {
    let sum = 0;
    for (let i = 0; i < this.articles.length; i++) {
      var q: number = +this.articles[i].quantite;
      sum += this.articles[i].article.prix * q;
    }
    return sum;
  }

  checkCart(): boolean {
    var panier = localStorage.getItem('panier');
    var panierFromLocalStorage = panier && JSON.parse(panier);

    return panierFromLocalStorage.articles.length > 0 ? true : false;
  }

  removeArticle(articleId: number): void {
    var panier = localStorage.getItem('panier');
    var panierFromLocalStorage = panier && JSON.parse(panier);

    const pos = panierFromLocalStorage.articles.findIndex(
      (ar: { article: any }) => ar.article.idArticle === articleId
    );

    if (pos > -1) {
      panierFromLocalStorage.articles.splice(pos, 1);
      localStorage.setItem('panier', JSON.stringify(panierFromLocalStorage));
      location.reload();
    }
  }
}
