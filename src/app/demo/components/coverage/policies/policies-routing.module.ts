import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PoliciesComponent } from './policies.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '',  data: { breadcrumb: 'Policies' }, component: PoliciesComponent }
	])],
	exports: [RouterModule]
})
export class PoliciesRoutingModule { }
