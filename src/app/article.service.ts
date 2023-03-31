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

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
    }),
  };

  getAll(param: string | null): Observable<Object> {
    return this.http.get<Object>(`${this.url}/${param}`);
  }

  addArticle(formData: any): Observable<any> {
    return this.http.post<any>(this.url, formData, this.httpOptions);
  }

  editArticle(param: string | null, formData: any): Observable<any> {
    return this.http.put<any>(
      `${this.url}/${param}`,
      formData,
      this.httpOptions
    );
  }

  deleteArticle(param: string | null): any {
    return this.http.delete<any>(`${this.url}/${param}`, this.httpOptions);
  }
}
