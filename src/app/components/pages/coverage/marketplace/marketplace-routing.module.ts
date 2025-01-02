import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MarketplaceComponent } from './marketplace.component';


@NgModule({
	imports: [RouterModule.forChild([
		{ path: '',  data: { breadcrumb: 'Marketplace' }, component: MarketplaceComponent }
	])],
	exports: [RouterModule]
})

export class MarketplaceRoutingModule { }
