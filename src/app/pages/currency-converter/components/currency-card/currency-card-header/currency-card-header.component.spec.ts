import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyCardHeaderComponent } from './currency-card-header.component';

describe('CurrencyCardHeaderComponent', () => {
  let component: CurrencyCardHeaderComponent;
  let fixture: ComponentFixture<CurrencyCardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrencyCardHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurrencyCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
