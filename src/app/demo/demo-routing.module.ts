import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from '../layout/app.layout.component';


const routes: Routes = [
    {
        path: '', component: AppLayoutComponent,
        children: [
            { path: '', loadChildren: () => import('./components/dashboards/dashboards.module').then(m => m.DashboardsModule) },
            { path: 'uikit', data: { breadcrumb: 'UI Kit' }, loadChildren: () => import('./components/uikit/uikit.module').then(m => m.UIkitModule) },
            { path: 'utilities', data: { breadcrumb: 'Utilities' }, loadChildren: () => import('./components/utilities/utilities.module').then(m => m.UtilitiesModule) },
            { path: 'pages', data: { breadcrumb: 'Pages' }, loadChildren: () => import('./components/pages/pages.module').then(m => m.PagesModule) },
            { path: 'profile', data: { breadcrumb: 'User Management' }, loadChildren: () => import('./components/profile/profile.module').then(m => m.ProfileModule) },
            { path: 'documentation', data: { breadcrumb: 'Documentation' }, loadChildren: () => import('./components/documentation/documentation.module').then(m => m.DocumentationModule) },
            { path: 'blocks', data: { breadcrumb: 'Prime Blocks' }, loadChildren: () => import('./components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
            { path: 'ecommerce', data: { breadcrumb: 'E-Commerce' }, loadChildren: () => import('./components/ecommerce/ecommerce.module').then(m => m.EcommerceModule) },
            { path: 'apps', data: { breadcrumb: 'Apps' }, loadChildren: () => import('./components/apps/apps.module').then(m => m.AppsModule) },
            { path: 'coverage', data: { breadcrumb: 'Coverage' }, loadChildren: () => import('../components/pages/coverage/coverage.module').then(m => m.CoverageModule) },
            { path: 'investments', data: { breadcrumb: 'Investments' }, loadChildren: () => import('../components/pages/investments/investments.module').then(m => m.InvestmentsModule) },
        ]
    },
    { path: 'auth', data: { breadcrumb: 'Auth' }, loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule) },
    { path: 'wizard', data: { breadcrumb: 'Wizard' }, loadChildren: () => import('./components/pages/wizard/wizard.module').then(m => m.WizardModule) },
    { path: 'landing', loadChildren: () => import('./components/landing/landing.module').then(m => m.LandingModule) },
    { path: 'notfound', loadChildren: () => import('./components/notfound/notfound.module').then(m => m.NotfoundModule) },
    { path: 'notfound2', loadChildren: () => import('./components/notfound2/notfound2.module').then(m => m.Notfound2Module) },
    { path: 'register', redirectTo: '/auth/register' },
    { path: '**', redirectTo: '/auth/login' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DemoRoutingModule { }

