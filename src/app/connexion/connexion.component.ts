import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
})
export class ConnexionComponent {
  url = 'http://localhost:8080/projet/rest/utilisateur/login';
  email: string = '';
  password: string = '';

  login() {}
}
