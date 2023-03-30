import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-modif-article',
  templateUrl: './modif-article.component.html',
  styleUrls: ['./modif-article.component.css'],
})
export class ModifArticleComponent {
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private articleService: ArticleService,
    private router: Router
  ) {}

  article = {
    idArticle: this.route.snapshot.queryParams['idArticle'],
    libelle: this.route.snapshot.queryParams['libelle'],
    marque: this.route.snapshot.queryParams['marque'],
    prix: this.route.snapshot.queryParams['prix'],
    photo: this.route.snapshot.queryParams['photo'],
  };

  articleForm: FormGroup = this.fb.group({
    libelle: new FormControl(this.article.libelle, Validators.required),
    marque: new FormControl(this.article.marque, Validators.required),
    prix: new FormControl(this.article.prix, Validators.required),
    photo: new FormControl(this.article.photo, Validators.required),
  });

  onSubmit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      let body = new URLSearchParams();
      body.set('libelle', this.articleForm.controls['libelle'].value);
      body.set('marque', this.articleForm.controls['marque'].value);
      body.set('prix', this.articleForm.controls['prix'].value);
      body.set('photo', this.articleForm.controls['photo'].value);

      this.articleService
        .editArticle(id, body.toString())
        .subscribe((result) => {
          this.article = result;
          const queryParams: NavigationExtras = {
            queryParams: { param: this.article },
          };
          this.router.navigate([], queryParams);
        });
    });
  }
}
