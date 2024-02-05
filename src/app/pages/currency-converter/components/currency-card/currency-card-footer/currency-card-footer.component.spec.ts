import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyCardFooterComponent } from './currency-card-footer.component';

describe('CurrencyCardFooterComponent', () => {
  let component: CurrencyCardFooterComponent;
  let fixture: ComponentFixture<CurrencyCardFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrencyCardFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurrencyCardFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
