import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../categorie.service';

@Component({
  selector: 'app-tel-accessoires',
  templateUrl: './tel-accessoires.component.html',
  styleUrls: ['./tel-accessoires.component.css'],
})
export class TelAccessoiresComponent implements OnInit {
  articles: Array<any> = [];

  constructor(private categorieService: CategorieService) {}

  ngOnInit(): void {
    this.categorieService
      .getTelephoneAccessoires()
      .subscribe((result) => (this.articles = result));
  }
}
