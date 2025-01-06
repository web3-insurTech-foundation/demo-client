import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestmentMarketplaceRoutingModule } from './investment-marketplace-routing.module';
import { InvestmentMarketplaceComponent } from './investment-marketplace.component';
import { ProgressBarModule } from 'primeng/progressbar';


@NgModule({
  declarations: [
    InvestmentMarketplaceComponent
  ],
  imports: [
    CommonModule,
    InvestmentMarketplaceRoutingModule,
    ProgressBarModule
  ]
})
export class InvestmentMarketplaceModule { }
