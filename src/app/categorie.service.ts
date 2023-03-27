import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategorieService {
  url = 'http://localhost:8080/projet/rest/categories';
  constructor(private http: HttpClient) {}

  getAll(): Observable<Array<any>> {
    return this.http.get<Array<any>>(this.url);
  }
}
