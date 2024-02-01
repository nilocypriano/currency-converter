import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService {

  constructor(private http: HttpClient) { }

  get<T>(url: string, params?: HttpParams): Observable<T> {
    return this.http.get<T>(url, { params });
  }
}
