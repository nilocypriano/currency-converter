import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  #http = inject(HttpClient)

  get<T>(url: string, params?: HttpParams): Observable<T> {
    return this.#http.get<T>(url, { params })
  }
}
