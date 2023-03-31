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

  getSubCategories(): Observable<any> {
    return this.http.get<any>(`${this.url}/sub`);
  }

  getPcPortable(): Observable<Array<any>> {
    return this.http.get<Array<any>>(this.url + '/4');
  }

  getPcBureau(): Observable<Array<any>> {
    return this.http.get<Array<any>>(this.url + '/5');
  }

  getPcAccessoires(): Observable<Array<any>> {
    return this.http.get<Array<any>>(this.url + '/6');
  }

  getSmartphones(): Observable<Array<any>> {
    return this.http.get<Array<any>>(this.url + '/7');
  }

  getTelephoneFixe(): Observable<Array<any>> {
    return this.http.get<Array<any>>(this.url + '/8');
  }

  getTelephoneAccessoires(): Observable<Array<any>> {
    return this.http.get<Array<any>>(this.url + '/9');
  }

  getDisqueDur(): Observable<Array<any>> {
    return this.http.get<Array<any>>(this.url + '/10');
  }

  getCleUsb(): Observable<Array<any>> {
    return this.http.get<Array<any>>(this.url + '/11');
  }

  getStockageAccessoire(): Observable<Array<any>> {
    return this.http.get<Array<any>>(this.url + '/12');
  }
}
