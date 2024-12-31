import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardClaimsComponent } from './dashboardclaims.component';

describe('DashboardclaimsComponent', () => {
  let component: DashboardClaimsComponent;
  let fixture: ComponentFixture<DashboardClaimsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardClaimsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
