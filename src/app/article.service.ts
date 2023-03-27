import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  url = 'http://localhost:8080/projet/rest/article';
  article: any;
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  getAll(param: string | null): Observable<Object> {
    // const id = this.route.snapshot.paramMap.get('id');
    return this.http.get<Object>(`${this.url}/${param}`);
  }
}
