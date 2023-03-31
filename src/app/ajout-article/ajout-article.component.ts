import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleService } from '../article.service';
import { CategorieService } from '../categorie.service';

@Component({
  selector: 'app-ajout-article',
  templateUrl: './ajout-article.component.html',
  styleUrls: ['./ajout-article.component.css'],
})
export class AjoutArticleComponent implements OnInit {
  categories: Array<any> = [];

  constructor(
    private articleService: ArticleService,
    private categorieService: CategorieService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categorieService
      .getSubCategories()
      .subscribe((result) => (this.categories = result));
  }

  articleForm: FormGroup = this.fb.group({
    libelle: new FormControl('', Validators.required),
    categorie: new FormControl('', Validators.required),
    marque: new FormControl('', Validators.required),
    prix: new FormControl('', Validators.required),
    photo: new FormControl('', Validators.required),
  });

  onSubmit(): void {
    let body = new URLSearchParams();
    body.set('libelle', this.articleForm.controls['libelle'].value);
    body.set('idCategorie', this.articleForm.controls['categorie'].value);
    body.set('marque', this.articleForm.controls['marque'].value);
    body.set('prix', this.articleForm.controls['prix'].value);
    body.set('photo', this.articleForm.controls['photo'].value);

    // envoyer l'article au backend
    this.articleService.addArticle(body.toString()).subscribe((result) => {
      if (result > 0) this.router.navigate(['/']);
      else {
        alert("Erreur d'ajout");
        location.reload();
      }
    });
  }
}
