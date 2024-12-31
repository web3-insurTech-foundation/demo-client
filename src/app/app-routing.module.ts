import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routerOptions: ExtraOptions = {
    anchorScrolling: 'enabled'
};

const routes: Routes = [
  { path: '', loadChildren: () => import('./components/pages/login/login.module').then(m => m.LoginModule)},
  { path: 'login', loadChildren: () => import('./components/pages/login/login.module').then(m => m.LoginModule)},
  { path: 'signup', loadChildren: () => import('./components/pages/signup/signup.module').then(m => m.SignupModule)},
  { path: 'dashboard', loadChildren: () => import('./components/pages/dashboard/dashboard.module').then(m => m.DashboardModule)},
  { path: 'invest', loadChildren: () => import('./components/pages/invest/invest.module').then(m => m.InvestModule)},
  { path: 'claim', loadChildren: () => import('./components/pages/claim/claim.module').then(m => m.ClaimModule)},
  { path: 'product', loadChildren: () => import('./components/pages/product/product.module').then(m => m.ProductModule)},
  { path: 'demo', loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, routerOptions)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
