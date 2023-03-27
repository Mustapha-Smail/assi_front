import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../categorie.service';

@Component({
  selector: 'app-disque-dur',
  templateUrl: './disque-dur.component.html',
  styleUrls: ['./disque-dur.component.css'],
})
export class DisqueDurComponent implements OnInit {
  articles: Array<any> = [];

  constructor(private categorieService: CategorieService) {}

  ngOnInit(): void {
    this.categorieService
      .getDisqueDur()
      .subscribe((result) => (this.articles = result));
  }
}
