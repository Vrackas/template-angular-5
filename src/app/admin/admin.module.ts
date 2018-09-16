import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { ModuleRouting } from './admin-routing';
import { SidebarComponent } from './sidebar/sidebar.component';

import { UserManagementModule } from './user-management/user-management.module';
import { WebStorageModule } from 'ngx-store';
import { ProviderListService } from './shared/services/provider-list.service';
import { NavbareModule } from './navbar/navbar.module';


@NgModule({
    imports: [
        WebStorageModule,
        CommonModule,
        ModuleRouting,
        UserManagementModule,
        NavbareModule
    ],
    declarations: [
        AdminComponent,
        SidebarComponent,
    ],
    providers: [
        ProviderListService
    ]
})
export class AdminModule {
}
