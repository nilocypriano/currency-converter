import { TestBed } from '@angular/core/testing';

import { QuotationService } from './quotation.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { ICurrency, ICurrencyExchange } from '../../../../shared/models/currency';

describe('QuotationService', () => {
  let service: QuotationService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 180000;
  const URL = 'https://economia.awesomeapi.com.br/last/CAD-BRL,ARS-BRL,GBP-BRL'

  const mock: ICurrencyExchange = {
    "CADBRL": {
      "code": "CAD",
      "codein": "BRL",
      "name": "Dólar Canadense/Real Brasileiro",
      "high": "3.6954",
      "low": "3.67",
      "varBid": "0.0181",
      "pctChange": "0.49",
      "bid": "3.6867",
      "ask": "3.6922",
      "timestamp": "1706911180",
      "create_date": "2024-02-02 18:59:40"
    },
    "ARSBRL": {
      "code": "ARS",
      "codein": "BRL",
      "name": "Peso Argentino/Real Brasileiro",
      "high": "0.006",
      "low": "0.0059",
      "varBid": "0.0001",
      "pctChange": "1.68",
      "bid": "0.006",
      "ask": "0.006",
      "timestamp": "1706911174",
      "create_date": "2024-02-02 18:59:34"
    },
    "GBPBRL": {
      "code": "GBP",
      "codein": "BRL",
      "name": "Libra Esterlina/Real Brasileiro",
      "high": "6.2942",
      "low": "6.2422",
      "varBid": "0.0124",
      "pctChange": "0.2",
      "bid": "6.2696",
      "ask": "6.2854",
      "timestamp": "1706911170",
      "create_date": "2024-02-02 18:59:30"
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    service = TestBed.inject(QuotationService);
    httpTestingController = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient)
  });

  afterEach(() => {
    httpTestingController.verify()
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('uiuiui', async () => {
    const currencies = 'CAD-BRL,ARS-BRL,GBP-BRL'
    await service.getQuotations(currencies).subscribe((res: ICurrency[]) => {
      expect(res[0].code).toEqual('CAD');
      expect(res[1].codein).toEqual('BRL');
    });

    const req = httpTestingController.expectOne(URL);
    req.flush(mock);

    expect(req.request.method).toEqual('GET');
  })
});
