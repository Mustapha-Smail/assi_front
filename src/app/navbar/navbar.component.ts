import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../categorie.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  categories: Array<any> = [];

  constructor(private categorieService: CategorieService) {}

  ngOnInit(): void {
    this.categorieService
      .getAll()
      .subscribe((result) => (this.categories = result));
  }

  checkUserLoggedIn(): boolean {
    return localStorage.getItem('user') ? true : false;
  }

  logout(): void {
    localStorage.removeItem('user');
  }
}
