import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClaimsRoutingModule } from './claims-routing.module';
import { AllClaimsComponent } from './all-claims/all-claims.component';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { RippleModule } from 'primeng/ripple';


@NgModule({
  declarations: [
    AllClaimsComponent
  ],
  imports: [
    CommonModule,
    ClaimsRoutingModule,
    ButtonModule,
    DividerModule,
    RippleModule
  ]
})
export class ClaimsModule { }
