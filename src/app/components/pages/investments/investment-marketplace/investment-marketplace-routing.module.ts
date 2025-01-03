import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvestmentMarketplaceComponent } from './investment-marketplace.component';

const routes: Routes = [];

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '',  data: { breadcrumb: 'Marketplace' }, component: InvestmentMarketplaceComponent }
	])],
	exports: [RouterModule]
})
export class InvestmentMarketplaceRoutingModule { }
