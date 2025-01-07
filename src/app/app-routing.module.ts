import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';

const routerOptions: ExtraOptions = {
    anchorScrolling: 'enabled'
};

const routes: Routes = [
  {
    path: 'home', component: AppLayoutComponent,
    children: [
      //{ path: '', loadChildren: () => import('./demo/components/auth/login/login.module').then(m => m.LoginModule)},
      //{ path: 'login', loadChildren: () => import('./components/pages/login/login.module').then(m => m.LoginModule)},
      // { path: 'signup', loadChildren: () => import('./components/pages/signup/signup.module').then(m => m.SignupModule)},
      // this one we will move eventually when we have a proper dashboard
      { path: '', loadChildren: () => import('./components/pages/getting-started/getting-started.module').then(m => m.GettingStartedModule)},
      { path: 'dashboard', loadChildren: () => import('./demo/components/dashboards/dashboards.module').then(m => m.DashboardsModule)},
      { path: 'invest', loadChildren: () => import('./components/pages/invest/invest.module').then(m => m.InvestModule)},
      { path: 'investments', loadChildren: () => import('./components/pages/investments/investments.module').then(m => m.InvestmentsModule)},
      { path: 'coverage', data: { breadcrumb: 'Coverage' }, loadChildren: () => import('./components/pages/coverage/coverage.module').then(m => m.CoverageModule) },
      { path: 'product', loadChildren: () => import('./components/pages/product/product.module').then(m => m.ProductModule)},
      { path: 'demo', loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule) },
    ]
  },

  // { path: '', loadChildren: () => import('./components/pages/login/login.module').then(m => m.LoginModule)},
  { path: '', loadChildren: () => import('./components/pages/login/login.module').then(m => m.LoginModule)},
  { path: 'signup', loadChildren: () => import('./components/pages/signup/signup.module').then(m => m.SignupModule)},
  // { path: 'dashboard', loadChildren: () => import('./components/pages/dashboard/dashboard.module').then(m => m.DashboardModule)},
  // { path: 'invest', loadChildren: () => import('./components/pages/invest/invest.module').then(m => m.InvestModule)},
  // // { path: 'claim', loadChildren: () => import('./components/pages/claim/claim.module').then(m => m.ClaimModule)},
  // { path: 'claim', data: { breadcrumb: 'Claims' }, loadChildren: () => import('./demo/components/coverage/coverage.module').then(m => m.CoverageModule) },
  // { path: 'product', loadChildren: () => import('./components/pages/product/product.module').then(m => m.ProductModule)},
  // { path: 'demo', loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, routerOptions)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
