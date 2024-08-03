import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'https://api.exchangerate-api.com/v4/latest/UAH';

@Injectable({
  providedIn: 'root'
})
export class CurrencyClientService {

  constructor(private http: HttpClient) { }

  getRates(): Observable<any> {
    return this.http.get(API_URL);
  }
}
