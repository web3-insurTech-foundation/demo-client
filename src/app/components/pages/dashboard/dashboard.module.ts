import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports: [DashboardComponent] // make the component available for other modules to import and use. This is necessary because we are using the DashboardComponent in the app.component.html file.
})
export class DashboardModule { }
