import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [RouterModule.forChild([
    { path: 'policies', data: { breadcrumb: 'Coverage' }, loadChildren: () => import('./policies/policies.module').then(m => m.PoliciesModule) },
    { path: 'marketplace', data: { breadcrumb: 'Coverage' }, loadChildren: () => import('./marketplace/marketplace.module').then(m => m.MarketplaceModule) },
    { path: 'claims', data: { breadcrumb: 'Coverage' }, loadChildren: () => import('./claims/claims.module').then(m => m.ClaimsModule) },
    /*
    { path: 'contact', data: { breadcrumb: 'Contact' }, loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
    { path: 'crud', data: { breadcrumb: 'Crud' }, loadChildren: () => import('./crud/crud.module').then(m => m.CrudModule) },
    { path: 'empty', data: { breadcrumb: 'Empty' }, loadChildren: () => import('./empty/emptydemo.module').then(m => m.EmptyDemoModule) },
    { path: 'faq', data: { breadcrumb: 'FAQ' }, loadChildren: () => import('./faq/faq.module').then(m => m.FaqModule) },
    { path: 'help', data: { breadcrumb: 'Help' }, loadChildren: () => import('./help/help.module').then(m => m.HelpModule) },
    { path: 'invoice', data: { breadcrumb: 'Invoice' }, loadChildren: () => import('./invoice/invoice.module').then(m => m.InvoiceModule) },
    { path: 'timeline', data: { breadcrumb: 'Timeline' }, loadChildren: () => import('./timeline/timelinedemo.module').then(m => m.TimelineDemoModule) },
    { path: 'wizard', data: { breadcrumb: 'Wizard' }, loadChildren: () => import('./wizard/wizard.module').then(m => m.WizardModule) },
     */
    { path: '**', redirectTo: '/notfound' }
])],
exports: [RouterModule]

})
export class CoverageRoutingModule { }
