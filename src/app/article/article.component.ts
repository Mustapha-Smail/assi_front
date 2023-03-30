import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private articleService: ArticleService,
    private router: Router
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
          quantite: q,
        },
      ],
    };

    var panier = localStorage.getItem('panier');

    if (panier === null) {
      localStorage.setItem('panier', JSON.stringify(basket));
    } else {
      var panierFromLocalStorage = JSON.parse(panier);

      const found = panierFromLocalStorage.articles.some(
        (ar: { article: { idArticle: any } }) =>
          ar.article.idArticle === article.idArticle
      );

      console.log(found);

      if (!found) {
        panierFromLocalStorage.articles.push({ article, quantite });
      } else {
        const pos = panierFromLocalStorage.articles.findIndex(
          (ar: { article: any }) => ar.article.idArticle === article.idArticle
        );
        console.log(q);

        panierFromLocalStorage.articles[pos].quantite += q;
        console.log(panierFromLocalStorage);
      }

      localStorage.setItem('panier', JSON.stringify(panierFromLocalStorage));
    }
  }

  deleteArticle(): any {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.articleService.deleteArticle(id).subscribe((result: any) => {
        console.log(result);
        if (result > 0) {
          this.router.navigate(['/']);
        }
      });
    });
  }
}
