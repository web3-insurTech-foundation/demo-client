import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoliciesRoutingModule } from './policies-routing.module';
import { PoliciesComponent } from './policies.component';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  declarations: [
    PoliciesComponent
  ],
  imports: [
    CommonModule,
    PoliciesRoutingModule,
    ButtonModule,
    DividerModule,
    RippleModule
  ],
  exports: [
    PoliciesComponent
  ]
})
export class PoliciesModule { }
