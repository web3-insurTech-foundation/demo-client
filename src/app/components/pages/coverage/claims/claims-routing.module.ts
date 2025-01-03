import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllClaimsComponent } from './all-claims/all-claims.component';

const routes: Routes = [];

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '',  data: { breadcrumb: 'Claims' }, component: AllClaimsComponent }
	])],
	exports: [RouterModule]
})
export class ClaimsRoutingModule { }
