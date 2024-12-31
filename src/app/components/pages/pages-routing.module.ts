import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'signup', data: { breadcrumb: 'About' }, loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) },
        { path: 'login', data: { breadcrumb: 'Contact' }, loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
        { path: 'dashboard', data: { breadcrumb: 'Crud' }, loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
        { path: 'invest', data: { breadcrumb: 'Empty' }, loadChildren: () => import('./invest/invest.module').then(m => m.InvestModule) },
        { path: 'claim', data: { breadcrumb: 'FAQ' }, loadChildren: () => import('./claim/claim.module').then(m => m.ClaimModule) },
        { path: 'product', data: { breadcrumb: 'Help' }, loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
