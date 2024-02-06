import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ICurrencyExchange } from '../../../../shared/models/currency';
import { HttpRequestService } from '../../../../shared/services/http-requests/http-request.service';

@Injectable({
  providedIn: 'root',
})
export class QuotationService {
  private httpRequest = inject(HttpRequestService);

  private readonly API = 'https://economia.awesomeapi.com.br/last/';

  public getQuotations(): Observable<any> {
    const currencies = 'CAD-BRL,ARS-BRL,GBP-BRL';
    return this.httpRequest.get<ICurrencyExchange>(`${this.API}${currencies}`);
  }
}
