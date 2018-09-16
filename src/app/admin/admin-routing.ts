import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { UserManagementComponent } from './user-management/user-management.component';
import { AdminComponent } from './admin.component';

const ADMIN_ROUTING: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            { path: '', redirectTo: 'user-management', pathMatch: 'full' },
            {
                path: 'user-management',
                component: UserManagementComponent
            }
        ]
    },
];

export const ModuleRouting: ModuleWithProviders = RouterModule.forChild(ADMIN_ROUTING);
