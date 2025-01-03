import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestComponent } from './invest.component';
import { investRoutingModule } from './invest-routing.module';



@NgModule({
  declarations: [InvestComponent],
  imports: [
    CommonModule,
    investRoutingModule
  ],
  exports: [InvestComponent]
})
export class InvestModule { }
