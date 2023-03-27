import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../categorie.service';

@Component({
  selector: 'app-smartphone',
  templateUrl: './smartphone.component.html',
  styleUrls: ['./smartphone.component.css'],
})
export class SmartphoneComponent implements OnInit {
  articles: Array<any> = [];

  constructor(private categorieService: CategorieService) {}

  ngOnInit(): void {
    this.categorieService
      .getSmartphones()
      .subscribe((result) => (this.articles = result));
  }
}
