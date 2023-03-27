import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../categorie.service';

@Component({
  selector: 'app-tel-fixe',
  templateUrl: './tel-fixe.component.html',
  styleUrls: ['./tel-fixe.component.css'],
})
export class TelFixeComponent implements OnInit {
  articles: Array<any> = [];

  constructor(private categorieService: CategorieService) {}

  ngOnInit(): void {
    this.categorieService
      .getTelephoneFixe()
      .subscribe((result) => (this.articles = result));
  }
}
