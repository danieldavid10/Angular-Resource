import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
    {
        path: 'reports',
        loadChildren: './module-reports/reports.module#ReportsModule'
    },
    {
        path: 'operations',
        loadChildren: './module-operations/operations.module#OperationsModule'
    },
    {
        path: 'directives',
        loadChildren: './module-directives/directives.module#DirectivesModule'
    }
];