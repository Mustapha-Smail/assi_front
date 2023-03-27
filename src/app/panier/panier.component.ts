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
}
