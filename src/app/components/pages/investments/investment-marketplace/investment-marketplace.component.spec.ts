import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentMarketplaceComponent } from './investment-marketplace.component';

describe('InvestmentMarketplaceComponent', () => {
  let component: InvestmentMarketplaceComponent;
  let fixture: ComponentFixture<InvestmentMarketplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentMarketplaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestmentMarketplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
