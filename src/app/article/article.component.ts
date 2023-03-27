import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  article: any;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.articleService.getAll(id).subscribe((result) => {
        this.article = result;
        this.articleService.article = result;
      });
    });
  }

  public addPanier(article: any, quantite: string): void {
    var q: number = +quantite;
    var basket = {
      articles: [
        {
          article,
          q,
        },
      ],
    };

    var panier = localStorage.getItem('panier');

    if (panier === null) {
      localStorage.setItem('panier', JSON.stringify(basket));
    } else {
      var panierFromLocalStorage = JSON.parse(panier);

      panierFromLocalStorage.articles.push({ article, quantite });

      localStorage.setItem('panier', JSON.stringify(panierFromLocalStorage));
    }
  }
}
