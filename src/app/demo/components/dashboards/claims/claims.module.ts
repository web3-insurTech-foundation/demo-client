import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardClaimsRoutingModule } from './dashboardclaims-routing.module';
import { MenuModule } from 'primeng/menu';
import { TimelineModule } from 'primeng/timeline';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DashboardClaimsComponent } from './dashboardclaims.component';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';

@NgModule({
    imports: [
        CommonModule,
        DashboardClaimsRoutingModule,
        MenuModule,
        TimelineModule,
        ButtonModule,
        RippleModule,
        TableModule,
        ChartModule,
        OverlayPanelModule,
        CardModule,
        InputTextModule,
        InputGroupModule,
		InputGroupAddonModule
    ],
  declarations: [
    DashboardClaimsComponent
  ]
})
export class ClaimsModule { }
