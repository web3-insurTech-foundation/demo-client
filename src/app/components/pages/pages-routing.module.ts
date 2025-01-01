import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


// This is not directly used, as the app.module.ts has the direct paths assigned to it.

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'signup', data: { breadcrumb: 'Signup' }, loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) },
        { path: 'login', data: { breadcrumb: 'Login' }, loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
        { path: 'dashboard', data: { breadcrumb: 'Dashboard' }, loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
        { path: 'invest', data: { breadcrumb: 'Invest' }, loadChildren: () => import('./invest/invest.module').then(m => m.InvestModule) },
        // { path: 'claim', data: { breadcrumb: 'Claims' }, loadChildren: () => import('./claim/claim.module').then(m => m.ClaimModule) },
        { path: 'claim', data: { breadcrumb: 'Claims' }, loadChildren: () => import('../../demo/components/coverage/coverage.module').then(m => m.CoverageModule) },
        { path: 'coverage', data: { breadcrumb: 'Coverage' }, loadChildren: () => import('../../demo/components/coverage/coverage.module').then(m => m.CoverageModule) },
        { path: 'product', data: { breadcrumb: 'Product' }, loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
