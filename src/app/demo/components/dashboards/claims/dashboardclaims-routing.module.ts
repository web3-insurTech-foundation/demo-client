import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardClaimsComponent } from './dashboardclaims.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: DashboardClaimsComponent }
    ])],
    exports: [RouterModule]
})
export class DashboardClaimsRoutingModule { }
