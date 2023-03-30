import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    return this.http.get<Object>(`${this.url}/${param}`);
  }

  editArticle(param: string | null, formData: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
      }),
    };

    return this.http.put<any>(`${this.url}/${param}`, formData, httpOptions);
  }

  deleteArticle(param: string | null): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
      }),
    };

    return this.http.delete<any>(`${this.url}/${param}`, httpOptions);
  }
}
