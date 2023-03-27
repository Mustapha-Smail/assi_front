import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../categorie.service';

@Component({
  selector: 'app-pc-portable',
  templateUrl: './pc-portable.component.html',
  styleUrls: ['./pc-portable.component.css'],
})
export class PcPortableComponent implements OnInit {
  articles: Array<any> = [];

  constructor(private categorieService: CategorieService) {}

  ngOnInit(): void {
    this.categorieService
      .getPcPortable()
      .subscribe((result) => (this.articles = result));
  }
}
