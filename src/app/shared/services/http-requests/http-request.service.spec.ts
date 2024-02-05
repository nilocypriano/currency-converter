import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpRequestService } from './http-request.service';
import { HttpClient } from '@angular/common/http';

describe('HttpRequestsService', () => {
  let service: HttpRequestService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;
  const URL = 'https://economia.awesomeapi.com.br/last/CAD-BRL,ARS-BRL,GBP-BRL'


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(HttpRequestService);
    httpTestingController = TestBed.inject(HttpTestingController)
    httpClient = TestBed.inject(HttpClient);
  });

  afterEach(() => {
    httpTestingController.verify()
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make a GET http request', async () => {
    await service.get(URL).subscribe();

    const req = httpTestingController.expectOne(URL);

    expect(req.request.method).toEqual('GET');
  })
});
