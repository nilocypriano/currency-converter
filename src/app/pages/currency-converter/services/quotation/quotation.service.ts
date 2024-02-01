import { Injectable } from '@angular/core';
import { HttpRequestsService } from '../../../../shared/services/http-requests/http-requests.service';
import { Observable, repeat, throttleTime, map } from 'rxjs';
import { ICurrency, ICurrencyExchange } from '../../../../shared/models/currency';


@Injectable({
  providedIn: 'root'
})

export class QuotationService {
  private readonly API = 'https://economia.awesomeapi.com.br/last/'
  constructor(private httpRequests: HttpRequestsService) { }

  getQuotations(): Observable<ICurrency[]> {
    return this.httpRequests.get<ICurrencyExchange>(this.API)
      .pipe(repeat({ delay: 180000 }),
        throttleTime(180000),
        map(currencies => Object.values(currencies).map(v => ({ ...v, updatedAt: new Date() })))
      )
  }
}
