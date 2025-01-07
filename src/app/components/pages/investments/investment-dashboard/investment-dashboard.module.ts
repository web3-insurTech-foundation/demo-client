import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestmentDashboardRoutingModule } from './investment-dashboard-routing.module';
import { InvestmentDashboardComponent } from './investment-dashboard.component';

import { ChartModule } from 'primeng/chart'


@NgModule({
  declarations: [
    InvestmentDashboardComponent
  ],
  imports: [
    CommonModule,
    InvestmentDashboardRoutingModule,
		ChartModule
  ]
})
export class InvestmentDashboardModule { }
