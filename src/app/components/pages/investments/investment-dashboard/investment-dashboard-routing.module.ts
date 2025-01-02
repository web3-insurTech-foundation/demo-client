import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvestmentDashboardComponent } from './investment-dashboard.component';

const routes: Routes = [];

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '',  data: { breadcrumb: 'My Investments' }, component: InvestmentDashboardComponent }
	])],
	exports: [RouterModule]
})
export class InvestmentDashboardRoutingModule { }
