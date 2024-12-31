import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', data: {breadcrumb: 'Sales Dashboard'}, loadChildren: () => import('./sales/dashboardsales.module').then(m => m.DashboardSalesModule) },
        { path: 'dashboard-analytics', data: {breadcrumb: 'Analytics Dashboard'}, loadChildren: () => import('./analytics/dashboardanalytics.module').then(m => m.DashboardAnalyticsModule) },
        { path: 'dashboard-saas', data: {breadcrumb: 'SaaS Dashboard'}, loadChildren: () => import('./saas/dashboardsaas.module').then(m => m.DashboardSaasModule) },
        { path: 'dashboard-status', data: {breadcrumb: 'Status Dashboard'}, loadChildren: () => import('./status/dashboardstatus.module').then(m => m.DashboardStatusModule) },
        { path: 'dashboard-claims', data: {breadcrumb: 'Claims Status Dashboard'}, loadChildren: () => import('./claims/claims.module').then(m => m.ClaimsModule) },
    ])],
    exports: [RouterModule]
})
export class DashboardsRoutingModule { }
