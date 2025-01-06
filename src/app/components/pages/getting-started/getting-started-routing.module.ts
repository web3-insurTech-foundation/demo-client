import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GettingStartedComponent } from './getting-started.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
      { path: '', data: { breadcrumb: 'Getting Started' }, component: GettingStartedComponent},
  ])],
  exports: [RouterModule]
})
export class GettingStartedRoutingModule { }
