import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilisateurService {
  url = 'http://localhost:8080/projet/rest/utilisateur';
  constructor(private http: HttpClient) {}

  login(formData: any): Observable<any> {
    return this.http.post<any>(this.url + '/login', formData);
  }

  connexion(email: string, password: string): Observable<any> {
    let body = new URLSearchParams();
    body.set('email', email);
    body.set('password', password);

    let headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };

    return this.http.post(this.url + '/login', body.toString(), { headers });
  }
}
