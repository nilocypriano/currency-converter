import { TestBed } from '@angular/core/testing';
import { CurrencyNamePipe } from './currency-name.pipe';

describe('CurrencyNamePipe', () => {
  let pipe: CurrencyNamePipe;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [CurrencyNamePipe] });
    pipe = TestBed.inject(CurrencyNamePipe);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('return content before "/"', () => {
    const value: any = 'antes/depois';
    expect(pipe.transform(value)).toEqual('antes');
  });
});
