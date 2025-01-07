import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { AppConfigModule } from 'src/app/layout/config/app.config.module';
import { RippleModule } from 'primeng/ripple';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    FormsModule,
    AppConfigModule,
    RippleModule
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
